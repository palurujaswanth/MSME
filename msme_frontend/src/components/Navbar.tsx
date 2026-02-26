import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, BarChart3, User, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Eligibility Check", path: "/form" },
  { label: "Results", path: "/results" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/80 backdrop-blur-md">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg text-foreground">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
            <BarChart3 className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="hidden sm:inline">MSME Credit</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
                pathname === item.path
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground" aria-label="Help">
            <HelpCircle className="h-4 w-4" />
          </Button>
          <Link to="/login">
            <Button variant="ghost" size="icon" className="text-muted-foreground" aria-label="Profile">
              <User className="h-4 w-4" />
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-muted-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-card animate-fade-in p-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "block px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                pathname === item.path
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
