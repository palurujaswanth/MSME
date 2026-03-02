import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "@/lib/firebase";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Schemes",
    children: [
      { label: "MSME Loan Schemes", href: "/schemes/msme-loans" },
      { label: "Subsidy Programs", href: "/schemes/subsidy-programs" },
      { label: "Mudra Yojana", href: "/schemes/mudra-yojana" },
      { label: "Startup India", href: "/schemes/startup-india" },
      { label: "Credit Guarantee", href: "/schemes/credit-guarantee" },
      { label: "Stand-Up India", href: "/schemes/stand-up-india" },
    ],
  },
  { label: "Eligibility", href: "/eligibility" },
  { label: "AI Assistant", href: "/ai-assistant" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [schemesOpen, setSchemesOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  // 🔥 Listen to Firebase auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // 🔥 Logout
  const handleLogout = async () => {
    await signOut(auth);
    setProfileOpen(false);
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">CI</span>
          </div>
          <span className="font-display font-bold text-lg text-foreground">
            CreditIntel
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent">
                  {link.label} <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-card rounded-2xl border border-border/50 shadow-lg p-2 min-w-[220px]">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className={`block px-3 py-2.5 text-sm rounded-xl transition-colors ${
                          location.pathname === child.href
                            ? "bg-accent text-accent-foreground font-medium"
                            : "text-muted-foreground hover:bg-accent hover:text-foreground"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                to={link.href!}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === link.href
                    ? "text-foreground bg-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Desktop Right Section */}
        <div className="hidden lg:flex items-center gap-3">
          
          {!user && (
            <>
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Login
              </Link>
              <Link
                to="/dashboard"
                className="px-4 py-2 text-sm font-semibold text-primary-foreground gradient-bg rounded-xl"
              >
                Dashboard
              </Link>
            </>
          )}

          {user && (
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white font-semibold flex items-center justify-center"
              >
                {user.email?.charAt(0).toUpperCase()}
              </button>

              <AnimatePresence>
                {profileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute right-0 mt-3 w-44 bg-card border border-border rounded-xl shadow-lg py-2"
                  >
                    <button
                      onClick={() => {
                        navigate("/profile");
                        setProfileOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-muted"
                    >
                      Profile
                    </button>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-muted"
                    >
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-b border-border/50 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">

              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setSchemesOpen(!schemesOpen)}
                      className="flex justify-between w-full px-3 py-2 text-sm font-medium text-muted-foreground"
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          schemesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {schemesOpen &&
                      link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block pl-6 py-2 text-sm text-muted-foreground"
                        >
                          {child.label}
                        </Link>
                      ))}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href!}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 text-sm text-muted-foreground"
                  >
                    {link.label}
                  </Link>
                )
              )}

              {!user && (
                <>
                  <Link
                    to="/login"
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 text-sm text-center border rounded-xl"
                  >
                    Login
                  </Link>
                  <Link
                    to="/dashboard"
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 text-sm text-center gradient-bg text-primary-foreground rounded-xl"
                  >
                    Dashboard
                  </Link>
                </>
              )}

              {user && (
                <>
                  <button
                    onClick={() => {
                      navigate("/profile");
                      setMobileOpen(false);
                    }}
                    className="block w-full px-3 py-2 text-sm text-left"
                  >
                    Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block w-full px-3 py-2 text-sm text-left text-red-500"
                  >
                    Logout
                  </button>
                </>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;