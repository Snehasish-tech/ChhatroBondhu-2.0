import { Card, CardContent } from "@/components/ui/card";
import { Flame, Target, Trophy, TrendingUp, Clock, BookOpen, ArrowUpRight, Zap } from "lucide-react";

const DashboardPreview = () => {
  return (
    <section id="about" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/3 w-[600px] h-[600px] rounded-full blur-3xl opacity-5"
             style={{ background: "radial-gradient(circle, #58a6ff 0%, transparent 70%)" }} />
      </div>

      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24 max-w-2xl mx-auto space-y-6 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-wide">
              Progress Tracking
            </span>
          </div>
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
              Track Your{" "}
              <span className="text-gradient">Learning Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay motivated with personalized insights, streak tracking, and achievement badges powered by AI.
            </p>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Stats Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 space-y-4 sm:space-y-0">
            {/* Completion Rate */}
            <div className="card-glow rounded-xl p-6 border border-primary/30 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-start justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                  <ArrowUpRight className="h-3 w-3" />
                  +12%
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">89%</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Completion Rate
                </div>
              </div>
              <div className="h-2 bg-background/50 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full" style={{ width: "89%" }}></div>
              </div>
            </div>

            {/* Achievements */}
            <div className="card-glow rounded-xl p-6 border border-accent/30 animate-fade-up" style={{ animationDelay: "0.15s" }}>
              <div className="flex items-start justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/30">
                  <Trophy className="h-6 w-6 text-accent" />
                </div>
                <span className="text-xs font-bold text-accent bg-accent/10 px-2 py-1 rounded">
                  New!
                </span>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">42</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Achievements
                </div>
              </div>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-2 flex-1 bg-gradient-to-r from-accent to-primary rounded-full opacity-60"></div>
                ))}
              </div>
            </div>

            {/* Study Streak - Full Width */}
            <div className="sm:col-span-2 card-glow rounded-xl p-6 border border-destructive/30 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-destructive/20 to-accent/20 border border-destructive/30 animate-pulse-glow">
                    <Flame className="h-6 w-6 text-destructive" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      Current Streak
                    </div>
                    <div className="text-3xl font-bold text-foreground">
                      12 Days
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground mb-1">
                    Personal Best
                  </div>
                  <div className="text-2xl font-bold text-accent">
                    21 days
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Preview Card */}
          <div className="animate-fade-up" style={{ animationDelay: "0.25s" }}>
            <div className="glass rounded-2xl border border-primary/30 overflow-hidden shadow-2xl shadow-primary/10">
              <CardContent className="p-8 space-y-8">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Dashboard
                  </h3>
                  <span className="text-xs text-muted-foreground bg-background/50 px-3 py-1 rounded-full">
                    Today
                  </span>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-background/50 border border-border/50 p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Flame className="h-4 w-4 text-destructive" />
                      <span className="text-xs font-medium text-muted-foreground">
                        Streak
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      12 Days
                    </div>
                    <div className="text-xs text-muted-foreground">
                      +1 from yesterday
                    </div>
                  </div>
                  <div className="rounded-lg bg-background/50 border border-border/50 p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-primary" />
                      <span className="text-xs font-medium text-muted-foreground">
                        Focus
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      92%
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Excellent focus
                    </div>
                  </div>
                </div>

                {/* Today's Schedule */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-foreground">
                    Today's Schedule
                  </h4>
                  <div className="space-y-2">
                    {[
                      { time: "9:00 AM", task: "Physics Review", icon: BookOpen, color: "primary" },
                      { time: "11:00 AM", task: "Math Problems", icon: Target, color: "accent" },
                      { time: "2:00 PM", task: "Chemistry Lab", icon: Clock, color: "primary" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/50 hover:border-primary/30 transition-all"
                      >
                        <div className={`flex h-8 w-8 items-center justify-center rounded-lg transition-all ${
                          item.color === "accent" 
                            ? "bg-accent/10" 
                            : "bg-primary/10"
                        }`}>
                          <item.icon className={`h-4 w-4 ${item.color === "accent" ? "text-accent" : "text-primary"}`} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">
                            {item.task}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {item.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
