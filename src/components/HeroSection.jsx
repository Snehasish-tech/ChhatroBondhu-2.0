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
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const HeroSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const { user } = useAuth();

  const stats = [
    { value: "15+", label: "Smart Features", icon: Zap },
    { value: "100K+", label: "Active Learners", icon: Users },
    { value: "4.9", label: "User Rating", icon: Star },
  ];

  const features = [
    { icon: Brain, label: "AI Assistant", description: "Get instant help" },
    { icon: Target, label: "Focus Mode", description: "Stay concentrated" },
    { icon: BookOpen, label: "Study Room", description: "Collaborate & learn" },
    { icon: Sparkles, label: "Smart Tools", description: "Work smarter" },
  ];

  const highlights = [
    "AI-powered learning assistance",
    "Personalized study plans",
    "Track progress in real-time",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Subtle Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-primary">
                The Future of Learning
              </span>
            </div>

            {/* Headline */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1]">
              Your AI Study{" "}
              <span className="text-primary">Companion</span>
            </h1>

            {/* Description */}
            <p className="mb-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              ChhatroBondhu combines AI, gamification, and collaboration to
              transform how you study. Learn smarter, not harder.
            </p>

            {/* Highlights */}
            <ul className="mb-8 space-y-3">
              {highlights.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" asChild>
                <Link to={user ? "/dashboard" : "/auth"}>
                  {user ? "Go to Dashboard" : "Start Learning Free"}
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/study-room">
                  <Play className="h-4 w-4 mr-1" />
                  Try Study Room
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 lg:gap-10">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-3"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-foreground flex items-center gap-1">
                      {stat.value}
                      {stat.label === "User Rating" && (
                        <Star className="h-4 w-4 fill-accent text-accent" />
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Interactive Preview */}
          <div
            className="relative lg:pl-8 animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            <div className="relative">
              {/* Main Card */}
              <div className="relative rounded-2xl border border-border bg-card p-6 shadow-xl">
                {/* Browser Bar */}
                <div className="flex items-center gap-2 mb-5 pb-4 border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-destructive/60" />
                    <div className="h-3 w-3 rounded-full bg-accent/60" />
                    <div className="h-3 w-3 rounded-full bg-primary/60" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      chhatrobondhu.app
                    </span>
                  </div>
                </div>

                {/* Active Feature Display */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center transition-all duration-500">
                      {(() => {
                        const Icon = features[activeFeature].icon;
                        return <Icon className="h-5 w-5 text-primary" />;
                      })()}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {features[activeFeature].label}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {features[activeFeature].description}
                      </p>
                    </div>
                  </div>

                  {/* Progress Indicators */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">
                          Today's Progress
                        </span>
                        <span className="text-primary font-medium">78%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full w-[78%] bg-primary rounded-full transition-all duration-700" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">
                          Focus Score
                        </span>
                        <span className="text-accent font-medium">92%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full w-[92%] bg-accent rounded-full transition-all duration-700" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature Selector */}
                <div className="flex flex-wrap gap-2">
                  {features.map((feature, index) => (
                    <button
                      key={feature.label}
                      onClick={() => setActiveFeature(index)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        activeFeature === index
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                    >
                      {feature.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Floating Cards */}
              <div
                className="absolute -top-4 -right-4 rounded-xl border border-border bg-card p-3 shadow-lg animate-float"
                style={{ animationDuration: "5s" }}
              >
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Target className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground">
                      7 Day Streak
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      Keep it going!
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="absolute -bottom-4 -left-4 rounded-xl border border-border bg-card p-3 shadow-lg animate-float"
                style={{ animationDuration: "6s", animationDelay: "1s" }}
              >
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Brain className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground">
                      AI Ready
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      Ask anything
                    </p>
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
