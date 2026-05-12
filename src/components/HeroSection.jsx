import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Play,
  Star,
  Users,
  Zap,
  BookOpen,
  Brain,
  Target,
  Sparkles,
  CheckCircle2,
  Code2,
  Cpu,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const HeroSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { user } = useAuth();

  const stats = [
    { value: "50K+", label: "Active Learners", icon: Users },
    { value: "15+", label: "AI Features", icon: Cpu },
    { value: "4.9★", label: "Top Rated", icon: Star },
  ];

  const features = [
    { icon: Brain, label: "AI Assistant", description: "24/7 intelligent study partner" },
    { icon: Target, label: "Focus Mode", description: "Eliminate all distractions" },
    { icon: BookOpen, label: "Study Room", description: "Real-time collaboration" },
    { icon: Sparkles, label: "Smart Tools", description: "15+ powerful features" },
  ];

  const highlights = [
    "AI-powered instant study assistance",
    "Real-time progress analytics & tracking",
    "Personalized adaptive learning paths",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
      {/* Premium Dark Background with Enhanced Glows */}
      <div className="absolute inset-0 -z-10">
        {/* Primary glow - electric blue */}
        <div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
             style={{
               background: "radial-gradient(circle, #58a6ff 0%, transparent 70%)"
             }} />
        {/* Secondary glow - purple-violet */}
        <div className="absolute bottom-1/4 left-1/4 w-[700px] h-[700px] rounded-full blur-3xl opacity-15"
             style={{
               background: "radial-gradient(circle, #bc8cff 0%, transparent 70%)"
             }} />
        {/* Tertiary glow - accent */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
             style={{
               background: "radial-gradient(circle, #fbbf24 0%, transparent 70%)"
             }} />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{
               backgroundImage: "url('data:image/svg+xml,<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><g fill=\"%23ffffff\" fill-opacity=\"0.1\"><circle cx=\"30\" cy=\"30\" r=\"1\"/></g></g></svg>')"
             }} />
      </div>

      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-4 py-2.5 backdrop-blur-md hover:border-primary/60 transition-colors duration-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">
                ✨ Trusted by 50,000+ Students
              </span>
            </div>

            {/* Hero Headline - Enhanced */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
                Your AI <br />
                <span className="text-gradient">Study Companion</span>
                <br />
                Awaits
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg font-medium">
                Transform your learning journey with AI-powered assistance, personalized study plans, real-time collaboration, and intelligent analytics. Achieve academic excellence effortlessly.
              </p>
            </div>

            {/* Key Highlights - Enhanced */}
            <ul className="space-y-3.5">
              {highlights.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-muted-foreground group hover:text-foreground transition-colors"
                >
                  <div className="h-5 w-5 rounded-full border border-primary/40 flex items-center justify-center flex-shrink-0 group-hover:border-primary/80 group-hover:bg-primary/10 transition-all">
                    <CheckCircle2 className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* Premium CTA Buttons - Enhanced */}
            <div className="flex flex-wrap gap-4 pt-6">
              <Button size="lg" className="btn-primary-glow text-base font-semibold h-12 px-8" asChild>
                <Link to={user ? "/dashboard" : "/auth"} className="gap-2">
                  {user ? "Open Dashboard" : "Start Free Trial"}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-card/50 border-primary/30 hover:border-primary/50 hover:bg-card/80 text-base font-semibold h-12 px-8 transition-all duration-300"
                asChild
              >
                <Link to="/study-room" className="gap-2">
                  <Play className="h-5 w-5" />
                  Explore Study Room
                </Link>
              </Button>
            </div>

            {/* Stats Row - Enhanced */}
            <div className="flex flex-wrap gap-8 pt-12 border-t border-border/20">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-4 group">
                  <div className="h-12 w-12 rounded-xl bg-card border border-primary/20 group-hover:border-primary/40 flex items-center justify-center transition-all duration-300">
                    <stat.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Premium Product Preview */}
          <div
            className="relative animate-fade-up"
            style={{ animationDelay: "0.15s" }}
            onMouseMove={handleMouseMove}
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Main Preview Card */}
            <div className="relative group">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative card-glow bg-gradient-to-br from-card/80 via-card/70 to-card/60 border border-primary/20 group-hover:border-primary/40 rounded-2xl p-8 overflow-hidden backdrop-blur-sm transition-all duration-500">
                {/* Browser Top Bar */}
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-border/30">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-destructive/40" />
                    <div className="h-3 w-3 rounded-full bg-accent/40" />
                    <div className="h-3 w-3 rounded-full bg-primary/40" />
                  </div>
                  <div className="flex-1 text-center">
                    <code className="text-xs text-muted-foreground bg-background/50 px-4 py-1.5 rounded-lg font-mono border border-border/20">
                      www.chhatrobondhu.ai
                    </code>
                  </div>
                </div>

                {/* Active Feature Display */}
                <div className="space-y-8">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center flex-shrink-0 transition-all duration-500">
                      {(() => {
                        const Icon = features[activeFeature].icon;
                        return <Icon className="h-6 w-6 text-primary" />;
                      })()}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-foreground mb-1">
                        {features[activeFeature].label}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {features[activeFeature].description}
                      </p>
                    </div>
                  </div>

                  {/* Progress Bars */}
                  <div className="space-y-4 py-4 border-y border-border/20">
                    <div>
                      <div className="flex justify-between mb-3">
                        <span className="text-xs font-semibold text-muted-foreground">
                          Daily Progress
                        </span>
                        <span className="text-xs font-bold text-primary">78%</span>
                      </div>
                      <div className="h-2.5 bg-background/40 rounded-full overflow-hidden border border-border/20">
                        <div
                          className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full transition-all duration-700"
                          style={{ width: "78%" }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-3">
                        <span className="text-xs font-semibold text-muted-foreground">
                          Focus Score
                        </span>
                        <span className="text-xs font-bold text-accent">92%</span>
                      </div>
                      <div className="h-2.5 bg-background/40 rounded-full overflow-hidden border border-border/20">
                        <div
                          className="h-full bg-gradient-to-r from-accent via-primary to-accent rounded-full transition-all duration-700"
                          style={{ width: "92%" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Feature Selector Tabs */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {features.map((feature, index) => (
                      <button
                        key={feature.label}
                        onClick={() => setActiveFeature(index)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 border ${
                          activeFeature === index
                            ? "bg-primary text-primary-foreground border-primary/50 shadow-lg shadow-primary/30"
                            : "bg-background/30 border-border/30 text-muted-foreground hover:border-primary/40 hover:bg-background/50"
                        }`}
                      >
                        {feature.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards with Enhanced Glows */}
            <div
              className="absolute -top-8 -right-8 animate-float"
              style={{ animationDuration: "4s" }}
            >
              <div className="glass rounded-xl p-5 border border-primary/30 shadow-2xl shadow-primary/20 backdrop-blur-xl bg-card/60 hover:shadow-primary/40 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-accent/30 to-primary/20 border border-accent/40 flex items-center justify-center">
                    <Code2 className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">7 Day</p>
                    <p className="text-[10px] text-muted-foreground font-medium">Learning Streak</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="absolute -bottom-8 -left-8 animate-float"
              style={{ animationDuration: "5s", animationDelay: "1s" }}
            >
              <div className="glass rounded-xl p-5 border border-primary/30 shadow-2xl shadow-primary/20 backdrop-blur-xl bg-card/60 hover:shadow-primary/40 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary/30 to-accent/20 border border-primary/40 flex items-center justify-center">
                    <Cpu className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">AI Ready</p>
                    <p className="text-[10px] text-muted-foreground font-medium">24/7 Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
