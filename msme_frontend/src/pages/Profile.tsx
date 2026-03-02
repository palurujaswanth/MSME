import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, ShieldCheck, LogOut, Edit } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut, User as FirebaseUser } from "firebase/auth";
import PageLayout from "@/components/layout/PageLayout";

const Profile = () => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate("/login");
      } else {
        setUser(currentUser);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  const handleEditProfile = () => {
    navigate("/edit-profile");
  };

  if (!user) return null;

  return (
    <PageLayout>
      <div className="container mx-auto px-4 lg:px-8 py-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div className="w-20 h-20 mx-auto rounded-full gradient-bg flex items-center justify-center text-primary-foreground text-2xl font-bold mb-4">
            {user.email?.charAt(0).toUpperCase()}
          </div>
          <h1 className="font-display font-bold text-3xl text-foreground">
            My Profile
          </h1>
          <p className="text-muted-foreground mt-2 text-sm">
            Manage your account information and preferences
          </p>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto bg-card rounded-3xl p-8 soft-shadow-lg border border-border/50"
        >
          <div className="space-y-6">

            {/* Name */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <User className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Full Name</p>
                <p className="text-sm font-medium text-foreground">
                  {user.displayName || "Not Provided"}
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <Mail className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email Address</p>
                <p className="text-sm font-medium text-foreground">
                  {user.email}
                </p>
              </div>
            </div>

            {/* Verification */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Account Status</p>
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    user.emailVerified
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {user.emailVerified ? "Verified" : "Not Verified"}
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="border-t border-border/50 pt-6 flex flex-col sm:flex-row gap-4">

              <button
                onClick={handleEditProfile}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-xl text-sm font-medium hover:opacity-90 transition"
              >
                <Edit className="w-4 h-4" />
                Edit Profile
              </button>

              <button
                onClick={handleLogout}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-red-500 text-white rounded-xl text-sm font-medium hover:opacity-90 transition"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>

            </div>

          </div>
        </motion.div>

      </div>
    </PageLayout>
  );
};

export default Profile;