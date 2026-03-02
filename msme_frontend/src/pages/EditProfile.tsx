import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Save, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, updateProfile, User as FirebaseUser } from "firebase/auth";
import { useToast } from "@/hooks/use-toast";
import PageLayout from "@/components/layout/PageLayout";

const EditProfile = () => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate("/login");
      } else {
        setUser(currentUser);
        setName(currentUser.displayName || "");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) return;

    try {
      setLoading(true);

      await updateProfile(user, {
        displayName: name,
      });

      toast({
        title: "Profile Updated",
        description: "Your profile has been updated successfully.",
      });

      navigate("/profile");

    } catch (error) {
      toast({
        title: "Update Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!user) return null;

  return (
    <PageLayout>
      <div className="container mx-auto px-4 lg:px-8 py-16">

        {/* Back Button */}
        <button
          onClick={() => navigate("/profile")}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Profile
        </button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center"
        >
          <div className="w-20 h-20 mx-auto rounded-full gradient-bg flex items-center justify-center text-primary-foreground text-2xl font-bold mb-4">
            {user.email?.charAt(0).toUpperCase()}
          </div>
          <h1 className="font-display font-bold text-3xl text-foreground">
            Edit Profile
          </h1>
          <p className="text-muted-foreground mt-2 text-sm">
            Update your personal information
          </p>
        </motion.div>

        {/* Edit Card */}
        <motion.form
          onSubmit={handleSave}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto bg-card rounded-3xl p-8 soft-shadow-lg border border-border/50 space-y-6"
        >

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 transition"
                placeholder="Enter your full name"
              />
            </div>
          </div>

          {/* Email (Readonly) */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="email"
                value={user.email || ""}
                disabled
                className="w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-xl text-sm text-muted-foreground cursor-not-allowed"
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 gradient-bg text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm"
            >
              <Save className="w-4 h-4" />
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>

        </motion.form>

      </div>
    </PageLayout>
  );
};

export default EditProfile;