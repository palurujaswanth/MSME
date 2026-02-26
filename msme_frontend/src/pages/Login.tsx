import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BarChart3, Eye, EyeOff } from "lucide-react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { auth } from "@/lib/firebase";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isRegister) {
        // 🔹 Register user
        await createUserWithEmailAndPassword(auth, email, password);
        toast({
          title: "Account Created 🎉",
          description: "Welcome to MSME Credit",
        });
      } else {
        // 🔹 Login user
        await signInWithEmailAndPassword(auth, email, password);
        toast({
          title: "Login Successful",
          description: "Redirecting to dashboard...",
        });
      }

      navigate("/dashboard");
    } catch (error: any) {
      toast({
        title: "Authentication Failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-sm"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-display font-bold text-xl text-foreground"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary">
              <BarChart3 className="h-5 w-5 text-primary-foreground" />
            </div>
            MSME Credit
          </Link>
          <p className="mt-2 text-sm text-muted-foreground">
            {isRegister ? "Create your account" : "Welcome back"}
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-border bg-card p-6 card-shadow space-y-4"
        >
          {/* Full Name (Register only – UI only for now) */}
          {isRegister && (
            <div className="space-y-1.5">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Rajesh Kumar" />
            </div>
          )}

          {/* Email */}
          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@business.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* GSTIN (Register only – optional) */}
          {isRegister && (
            <div className="space-y-1.5">
              <Label htmlFor="gstin">GSTIN (Optional)</Label>
              <Input id="gstin" placeholder="22AAAAA0000A1Z5" />
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full gradient-primary text-primary-foreground btn-ripple"
          >
            {loading
              ? "Please wait..."
              : isRegister
              ? "Create Account"
              : "Sign In"}
          </Button>

          {/* Toggle */}
          <p className="text-center text-sm text-muted-foreground">
            {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              type="button"
              onClick={() => setIsRegister(!isRegister)}
              className="text-primary font-medium hover:underline"
            >
              {isRegister ? "Sign In" : "Register"}
            </button>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;