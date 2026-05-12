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
    { value: "15+", label: "AI Features", icon: Cpu },
    { value: "100K+", label: "Active Users", icon: Users },
    { value: "4.9★", label: "Top Rated", icon: Star },
  ];

  const features = [
    { icon: Brain, label: "AI Assistant", description: "Instant help anytime" },
    { icon: Target, label: "Focus Mode", description: "Zero distractions" },
    { icon: BookOpen, label: "Study Room", description: "Collaborate live" },
    { icon: Sparkles, label: "Smart Tools", description: "Work smarter" },
  ];

  const highlights = [
    "AI-powered study assistance",
    "Real-time progress tracking",
    "Personalized learning plans",
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
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Premium Dark Background with Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
             style={{
               background: "radial-gradient(circle, #58a6ff 0%, transparent 70%)"
             }} />
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] rounded-full blur-3xl opacity-5"
             style={{
               background: "radial-gradient(circle, #bc8cff 0%, transparent 70%)"
             }} />
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{
               backgroundImage: "url('data:image/svg+xml,<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><g fill=\"%23ffffff\" fill-opacity=\"0.1\"><circle cx=\"30\" cy=\"30\" r=\"1\"/></g></g></svg>')"
             }} />
      </div>

      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                The Future of Learning is Now
              </span>
            </div>

            {/* Hero Headline */}
            <div className="space-y-4">
              <h1 className="text-hero">
                Your AI Study
                <br />
                <span className="text-gradient">Companion</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Transform your learning with AI-powered assistance, intelligent planning, and real-time collaboration. Study smarter, achieve more.
              </p>
            </div>

            {/* Key Highlights */}
            <ul className="space-y-3">
              {highlights.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-muted-foreground group"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            {/* Premium CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="btn-primary-glow text-base" asChild>
                <Link to={user ? "/dashboard" : "/auth"} className="gap-2">
                  {user ? "Open Dashboard" : "Start Free Trial"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-card/50 border-primary/30 hover:border-primary/50 text-base"
                asChild
              >
                <Link to="/study-room" className="gap-2">
                  <Play className="h-4 w-4" />
                  Try Study Room
                </Link>
              </Button>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-6 pt-8 border-t border-border/30">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-card border border-primary/30 flex items-center justify-center">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
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
            style={{ animationDelay: "0.1s" }}
            onMouseMove={handleMouseMove}
          >
            {/* Main Preview Card */}
            <div className="relative group">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative card-glow bg-card/50 border border-primary/30 rounded-2xl p-8 overflow-hidden">
                {/* Browser Top Bar */}
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-border/50">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-destructive/50" />
                    <div className="h-3 w-3 rounded-full bg-accent/50" />
                    <div className="h-3 w-3 rounded-full bg-primary/50" />
                  </div>
                  <div className="flex-1 text-center">
                    <code className="text-xs text-muted-foreground bg-background/50 px-3 py-1 rounded-md">
                      www.chhatrobondhu.ai
                    </code>
                  </div>
                </div>

                {/* Active Feature Display with Animation */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center flex-shrink-0 transition-all duration-500">
                      {(() => {
                        const Icon = features[activeFeature].icon;
                        return <Icon className="h-6 w-6 text-primary" />;
                      })()}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground mb-1">
                        {features[activeFeature].label}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {features[activeFeature].description}
                      </p>
                    </div>
                  </div>

                  {/* Progress Bars */}
                  <div className="space-y-4 py-4 border-y border-border/30">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-xs font-medium text-muted-foreground">
                          Daily Progress
                        </span>
                        <span className="text-xs font-bold text-primary">78%</span>
                      </div>
                      <div className="h-2 bg-background/50 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-700"
                          style={{ width: "78%" }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-xs font-medium text-muted-foreground">
                          Focus Score
                        </span>
                        <span className="text-xs font-bold text-accent">92%</span>
                      </div>
                      <div className="h-2 bg-background/50 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-accent to-primary rounded-full transition-all duration-700"
                          style={{ width: "92%" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Feature Selector Tabs */}
                  <div className="flex flex-wrap gap-2">
                    {features.map((feature, index) => (
                      <button
                        key={feature.label}
                        onClick={() => setActiveFeature(index)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 ${
                          activeFeature === index
                            ? "bg-primary text-primary-foreground border border-primary/50"
                            : "bg-background/50 border border-border/50 text-muted-foreground hover:border-primary/30"
                        }`}
                      >
                        {feature.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards with Glow */}
            <div
              className="absolute -top-6 -right-6 animate-float"
              style={{ animationDuration: "4s" }}
            >
              <div className="glass rounded-xl p-4 border border-primary/30 shadow-lg shadow-primary/20">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
                    <Code2 className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">7 Day</p>
                    <p className="text-[10px] text-muted-foreground">Learning Streak</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="absolute -bottom-6 -left-6 animate-float"
              style={{ animationDuration: "5s", animationDelay: "1s" }}
            >
              <div className="glass rounded-xl p-4 border border-primary/30 shadow-lg shadow-primary/20">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <Cpu className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">AI Ready</p>
                    <p className="text-[10px] text-muted-foreground">24/7 Support</p>
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
