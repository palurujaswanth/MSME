import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Mail, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast";
import PageLayout from "@/components/layout/PageLayout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast({
        title: "Missing Fields",
        description: "Please enter both email and password.",
        variant: "destructive",
      });
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // 🚨 Block login if email not verified
      if (!user.emailVerified) {
        toast({
          title: "Email Not Verified",
          description:
            "Please verify your email before logging in. Check your inbox.",
          variant: "destructive",
        });

        await auth.signOut();
        return;
      }

      toast({
        title: "Login Successful",
        description: "Welcome back to CreditIntel!",
      });

      // 🚀 Redirect to Home Page
      navigate("/", { replace: true });

    } catch (error: any) {
      toast({
        title: "Login Failed",
        description:
          error?.message || "Invalid credentials. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <PageLayout showFooter={false}>
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="bg-card rounded-3xl p-8 lg:p-10 soft-shadow-lg border border-border/50">
            <div className="text-center mb-8">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                CI
              </div>
              <h1 className="font-display font-bold text-2xl text-foreground">
                Welcome Back
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Sign in to your CreditIntel account
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 transition"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 gradient-bg text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm"
              >
                Sign In <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-accent-foreground font-medium hover:underline"
              >
                Create an Account
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Login;