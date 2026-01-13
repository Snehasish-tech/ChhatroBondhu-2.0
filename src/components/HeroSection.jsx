import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Users, Zap, BookOpen, Brain, Target, Sparkles } from "lucide-react";
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

  const demoFeatures = [
    { icon: Brain, label: "AI Assistant", color: "from-purple-500 to-pink-500" },
    { icon: Target, label: "Focus Mode", color: "from-blue-500 to-cyan-500" },
    { icon: BookOpen, label: "Study Room", color: "from-green-500 to-emerald-500" },
    { icon: Sparkles, label: "Smart Tools", color: "from-orange-500 to-amber-500" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % demoFeatures.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 3}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-secondary-foreground">
                The Future of Learning is Here
              </span>
            </div>

            {/* Headline */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              Your AI Study{" "}
              <span className="relative">
                <span className="text-primary">Companion</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-primary/30"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M1 9C30 3 60 1 100 5C140 9 170 7 199 3"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed">
              ChhatroBondhu combines <span className="text-foreground font-medium">AI</span>, 
              <span className="text-foreground font-medium"> gamification</span>, and 
              <span className="text-foreground font-medium"> collaboration</span> to transform how you study. 
              Learn smarter, not harder.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Button variant="hero" size="xl" asChild>
                <Link to={user ? "/dashboard" : "/auth"}>
                  {user ? "Go to Dashboard" : "Start Learning Free"}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/study-room">
                  <Play className="h-5 w-5" />
                  Try Study Room
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 lg:gap-12">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="flex items-center gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground sm:text-3xl">
                      {stat.value}
                      {stat.label === "User Rating" && (
                        <Star className="inline-block h-5 w-5 fill-accent text-accent ml-1" />
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Interactive Demo */}
          <div className="relative lg:pl-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Main Demo Card */}
              <div className="relative rounded-3xl border border-border/50 bg-card/80 backdrop-blur-sm p-6 shadow-2xl">
                {/* Browser Bar */}
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border/50">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                      chhatrobondhu.app
                    </span>
                  </div>
                </div>

                {/* Feature Demo */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${demoFeatures[activeFeature].color} flex items-center justify-center transition-all duration-500`}>
                      {(() => {
                        const Icon = demoFeatures[activeFeature].icon;
                        return <Icon className="h-5 w-5 text-white" />;
                      })()}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{demoFeatures[activeFeature].label}</p>
                      <p className="text-xs text-muted-foreground">Active feature</p>
                    </div>
                  </div>

                  {/* Progress Bars */}
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Today's Progress</span>
                        <span className="text-primary font-medium">78%</span>
                      </div>
                      <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                        <div className="h-full w-[78%] bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-1000" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Focus Score</span>
                        <span className="text-accent font-medium">92%</span>
                      </div>
                      <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                        <div className="h-full w-[92%] bg-gradient-to-r from-accent to-accent/60 rounded-full transition-all duration-1000" />
                      </div>
                    </div>
                  </div>

                  {/* Feature Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {demoFeatures.map((feature, index) => (
                      <button
                        key={feature.label}
                        onClick={() => setActiveFeature(index)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                          activeFeature === index
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted/50 text-muted-foreground hover:bg-muted"
                        }`}
                      >
                        {feature.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 rounded-2xl border border-border/50 bg-card/90 backdrop-blur-sm p-3 shadow-lg animate-bounce" style={{ animationDuration: "3s" }}>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <Target className="h-4 w-4 text-green-500" />
                  </div>
                  <div>
                    <p className="text-xs font-medium">7 Day Streak!</p>
                    <p className="text-[10px] text-muted-foreground">Keep it up! 🔥</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 rounded-2xl border border-border/50 bg-card/90 backdrop-blur-sm p-3 shadow-lg animate-bounce" style={{ animationDuration: "4s", animationDelay: "1s" }}>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Brain className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium">AI Ready</p>
                    <p className="text-[10px] text-muted-foreground">Ask anything!</p>
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
