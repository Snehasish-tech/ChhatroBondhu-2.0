import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  BookOpen, Eye, EyeOff, Loader2, ArrowRight, 
  CheckCircle2, Shield, Zap, Users
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { z } from "zod";

const emailSchema = z.string().email("Please enter a valid email address");
const passwordSchema = z.string().min(6, "Password must be at least 6 characters");

export default function Auth() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState("signin");
  
  const { signIn, signUp, user, loading, demoMode, demoCredentials } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate("/dashboard");
    }
  }, [user, loading, navigate]);

  const validateForm = (isSignUp) => {
    const newErrors = {};

    const getFirstIssue = (result) =>
      result?.error?.errors?.[0]?.message ||
      result?.error?.issues?.[0]?.message ||
      null;
    
    const emailResult = emailSchema.safeParse(email);
    if (!emailResult.success) {
      newErrors.email = getFirstIssue(emailResult) || "Please enter a valid email address";
    }
    
    const passwordResult = passwordSchema.safeParse(password);
    if (!passwordResult.success) {
      newErrors.password = getFirstIssue(passwordResult) || "Password must be at least 6 characters";
    }
    
    if (isSignUp && !fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!validateForm(false)) return;
    
    setIsLoading(true);
    const { error } = await signIn(email, password);
    setIsLoading(false);
    
    if (!error) {
      navigate("/dashboard");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!validateForm(true)) return;
    
    setIsLoading(true);
    const { error } = await signUp(email, password, fullName);
    setIsLoading(false);
    
    if (!error) {
      navigate("/dashboard");
    }
  };

  const handleDemoSignIn = async () => {
    setErrors({});
    setEmail(demoCredentials.email);
    setPassword(demoCredentials.password);
    setIsLoading(true);
    const { error } = await signIn(demoCredentials.email, demoCredentials.password);
    setIsLoading(false);

    if (!error) {
      navigate("/dashboard");
    }
  };

  const handleDemoSignUp = async () => {
    setErrors({});
    setFullName(demoCredentials.fullName);
    setEmail(demoCredentials.email);
    setPassword(demoCredentials.password);
    setIsLoading(true);
    const { error } = await signUp(
      demoCredentials.email,
      demoCredentials.password,
      demoCredentials.fullName
    );
    setIsLoading(false);

    if (!error) {
      navigate("/dashboard");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="landing-page min-h-screen flex">
      {/* Left Panel - Branding & Value Props */}
      <div className="hidden lg:flex lg:w-[45%] relative bg-gradient-to-br from-[#0f2a3f] via-[#1a5578] to-[#0077b6] p-12 flex-col justify-between overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#0077b6]/30 via-[#00a6fb]/20 to-[#79ceff]/10 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#0077b6]/20 via-[#00a6fb]/15 to-[#79ceff]/10 rounded-full blur-3xl opacity-50"></div>
        
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(121,206,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(121,206,255,.08)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
        {/* Decorative shapes */}
        <div className="absolute top-1/4 left-12 w-32 h-32 border border-[#79ceff]/20 rounded-2xl rotate-12"></div>
        <div className="absolute bottom-1/4 right-12 w-24 h-24 border border-[#79ceff]/10 rounded-full"></div>

        {/* Logo & Brand */}
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0077b6] to-[#00a6fb] flex items-center justify-center shadow-lg shadow-[#0077b6]/40">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-[#b8e7ff] bg-clip-text text-transparent font-display">ChhatroBondhu</h1>
              <p className="text-xs text-[#79ceff] font-medium">AI Learning Companion</p>
            </div>
          </div>
          <div className="h-px w-24 bg-gradient-to-r from-[#00a6fb]/60 to-transparent"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 space-y-12">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#79ceff]/20 border border-[#79ceff]/40">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#79ceff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#79ceff]"></span>
              </span>
              <span className="text-xs font-semibold text-[#d8eeff]">100,000+ Learning Together</span>
            </div>
            
            <h2 className="text-5xl font-bold font-display bg-gradient-to-br from-white via-[#d8eeff] to-[#b8e7ff] bg-clip-text text-transparent leading-tight">
              Transform Your<br />
              Learning Journey
            </h2>
            <p className="text-lg text-[#b8e7ff]/90 leading-relaxed max-w-md">
              Join thousands of students achieving academic excellence with AI-powered tools and personalized learning paths.
            </p>
          </div>

          {/* Feature List */}
          <div className="space-y-5">
            {[
              { icon: Zap, text: "AI-Powered Study Assistant", color: "from-[#9eddff] to-[#64c4ff]" },
              { icon: Users, text: "Collaborative Learning Spaces", color: "from-[#79ceff] to-[#00a6fb]" },
              { icon: CheckCircle2, text: "Progress Tracking & Analytics", color: "from-[#00a6fb] to-[#0077b6]" },
              { icon: Shield, text: "Secure & Privacy-First", color: "from-[#00d8ff] to-[#00a6fb]" },
            ].map((feature, index) => (
              <div key={index} className="group flex items-center gap-4 text-[#d8eeff] hover:translate-x-2 transition-transform duration-300">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#0077b6]/30`}>
                  <feature.icon className="w-5 h-5 text-[#0f2a3f]" />
                </div>
                <span className="text-base font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="relative z-10 grid grid-cols-3 gap-8">
          <div className="space-y-1">
            <p className="text-4xl font-bold font-display bg-gradient-to-br from-white to-[#b8e7ff] bg-clip-text text-transparent">100K+</p>
            <p className="text-xs text-[#79ceff] font-medium">Active Learners</p>
          </div>
          <div className="space-y-1">
            <p className="text-4xl font-bold font-display bg-gradient-to-br from-white to-[#b8e7ff] bg-clip-text text-transparent">15+</p>
            <p className="text-xs text-[#79ceff] font-medium">Smart Features</p>
          </div>
          <div className="space-y-1">
            <p className="text-4xl font-bold font-display bg-gradient-to-br from-white to-[#b8e7ff] bg-clip-text text-transparent">4.9★</p>
            <p className="text-xs text-[#79ceff] font-medium">Rating</p>
          </div>
        </div>
      </div>

      {/* Right Panel - Auth Forms */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12 landing-page bg-white">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center">
            <div className="inline-flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0077b6] to-[#00a6fb] flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold font-display text-[#0f2a3f]">ChhatroBondhu</h1>
            </div>
            <p className="text-sm text-[#284660]">AI Learning Companion</p>
          </div>

          {/* Tab Switcher */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold font-display text-[#0f2a3f] tracking-tight">
              {activeTab === "signin" ? "Welcome back" : "Create an account"}
            </h2>
            <p className="text-sm text-[#284660]">
              {activeTab === "signin" 
                ? "Enter your credentials to access your account" 
                : "Start your learning journey with us today"
              }
            </p>
          </div>

          {/* Tab Pills */}
          <div className="inline-flex h-10 items-center justify-center rounded-lg bg-[#e8f4ff] p-1 text-[#284660] w-full border border-[#b8d5ea]">
            <button
              onClick={() => setActiveTab("signin")}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0077b6] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full ${
                activeTab === "signin" ? "bg-white text-[#0f2a3f] shadow-sm" : ""
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setActiveTab("signup")}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0077b6] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full ${
                activeTab === "signup" ? "bg-white text-[#0f2a3f] shadow-sm" : ""
              }`}
            >
              Sign Up
            </button>
          </div>
            
          {/* Sign In Form */}
          {activeTab === "signin" && (
            <form onSubmit={handleSignIn} className="space-y-5">
              <div className="rounded-lg border border-[#b8d5ea] bg-[#e8f4ff] p-3 text-xs text-[#284660]">
                Demo access is available. Use the demo account to enter without a database.
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signin-email" className="text-sm font-medium text-[#0f2a3f]">
                    Email
                  </Label>
                  <Input
                    id="signin-email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`h-11 border-[#b8d5ea] focus:ring-[#0077b6] focus:border-[#0077b6] ${errors.email ? "border-red-500" : ""}`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-600">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="signin-password" className="text-sm font-medium text-[#0f2a3f]">
                      Password
                    </Label>
                    <button
                      type="button"
                      className="text-xs text-[#0077b6] hover:text-[#005c99] hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <Input
                      id="signin-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`h-11 pr-10 border-[#b8d5ea] focus:ring-[#0077b6] focus:border-[#0077b6] ${errors.password ? "border-red-500" : ""}`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#284660] hover:text-[#0f2a3f]"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-xs text-red-600">{errors.password}</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-11 bg-gradient-to-r from-[#0077b6] to-[#00a6fb] text-white rounded-lg font-medium hover:shadow-lg hover:shadow-[#0077b6]/30 transition-shadow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>

              <button
                type="button"
                disabled={isLoading}
                onClick={handleDemoSignIn}
                className="w-full h-11 bg-white border-2 border-[#b8d5ea] text-[#0077b6] rounded-lg font-medium hover:bg-[#e8f4ff] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Use Demo Account
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-[#b8d5ea]" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-[#284660] font-medium">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button type="button" className="h-11 border-2 border-[#b8d5ea] rounded-lg hover:bg-[#e8f4ff] transition-colors flex items-center justify-center gap-2 text-[#284660] hover:text-[#0f2a3f]">
                  <svg className="h-4 w-4" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="text-xs font-medium">Google</span>
                </button>
                <button type="button" className="h-11 border-2 border-[#b8d5ea] rounded-lg hover:bg-[#e8f4ff] transition-colors flex items-center justify-center gap-2 text-[#284660] hover:text-[#0f2a3f]">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="text-xs font-medium">GitHub</span>
                </button>
              </div>
            </form>
          )}

          {/* Sign Up Form */}
          {activeTab === "signup" && (
            <form onSubmit={handleSignUp} className="space-y-5">
              <div className="rounded-lg border border-[#b8d5ea] bg-[#e8f4ff] p-3 text-xs text-[#284660]">
                Demo access is available. Create a local demo account to continue.
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-name" className="text-sm font-medium text-[#0f2a3f]">
                    Full Name
                  </Label>
                  <Input
                    id="signup-name"
                    type="text"
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={`h-11 border-[#b8d5ea] focus:ring-[#0077b6] focus:border-[#0077b6] ${errors.fullName ? "border-red-500" : ""}`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-600">{errors.fullName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-email" className="text-sm font-medium text-[#0f2a3f]">
                    Email
                  </Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`h-11 border-[#b8d5ea] focus:ring-[#0077b6] focus:border-[#0077b6] ${errors.email ? "border-red-500" : ""}`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-600">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-password" className="text-sm font-medium text-[#0f2a3f]">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="signup-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`h-11 pr-10 border-[#b8d5ea] focus:ring-[#0077b6] focus:border-[#0077b6] ${errors.password ? "border-red-500" : ""}`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#284660] hover:text-[#0f2a3f]"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-xs text-red-600">{errors.password}</p>
                  )}
                  {password.length > 0 && (
                    <div className="flex gap-1">
                      <div
                        className={`h-1 flex-1 rounded-full transition-colors ${
                          password.length >= 6 ? "bg-[#0077b6]" : "bg-[#e8f4ff]"
                        }`}
                      />
                      <div
                        className={`h-1 flex-1 rounded-full transition-colors ${
                          password.length >= 8 ? "bg-[#0077b6]" : "bg-[#e8f4ff]"
                        }`}
                      />
                      <div
                        className={`h-1 flex-1 rounded-full transition-colors ${
                          password.length >= 10 ? "bg-[#0077b6]" : "bg-[#e8f4ff]"
                        }`}
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-11 bg-gradient-to-r from-[#0077b6] to-[#00a6fb] text-white rounded-lg font-medium hover:shadow-lg hover:shadow-[#0077b6]/30 transition-shadow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Creating account...
                    </>
                  ) : (
                    <>
                      Create Account
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>

                <button
                  type="button"
                  disabled={isLoading}
                  onClick={handleDemoSignUp}
                  className="w-full h-11 bg-white border-2 border-[#b8d5ea] text-[#0077b6] rounded-lg font-medium hover:bg-[#e8f4ff] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Create Demo Account
                </button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-[#b8d5ea]" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-[#284660] font-medium">
                      Or sign up with
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button type="button" className="h-11 border-2 border-[#b8d5ea] rounded-lg hover:bg-[#e8f4ff] transition-colors flex items-center justify-center gap-2 text-[#284660] hover:text-[#0f2a3f]">
                    <svg className="h-4 w-4" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    <span className="text-xs font-medium">Google</span>
                  </button>
                  <button type="button" className="h-11 border-2 border-[#b8d5ea] rounded-lg hover:bg-[#e8f4ff] transition-colors flex items-center justify-center gap-2 text-[#284660] hover:text-[#0f2a3f]">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span className="text-xs font-medium">GitHub</span>
                  </button>
                </div>

                <p className="text-xs text-center text-muted-foreground">
                  By signing up, you agree to our{" "}
                  <button type="button" className="text-primary hover:underline">
                    Terms
                  </button>{" "}
                  and{" "}
                  <button type="button" className="text-primary hover:underline">
                    Privacy Policy
                  </button>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}