import { Card, CardContent } from "@/components/ui/card";
import { Flame, Target, Trophy, TrendingUp } from "lucide-react";

const DashboardPreview = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        {/* Section Header - Centered */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 border border-primary/20 mb-4">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="text-xs sm:text-sm font-bold text-primary">YOUR PROGRESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-600 bg-clip-text text-transparent">
              Track Your Learning Journey
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay motivated with personalized insights, streak tracking, and achievement badges. Watch your progress grow every day.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Stats Cards - Enhanced */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="group rounded-2xl border border-border bg-card p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-purple-500 shadow-lg group-hover:shadow-primary/40 transition-all">
                    <TrendingUp className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">89%</div>
                    <div className="text-sm text-muted-foreground">Completion Rate</div>
                  </div>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[89%] bg-gradient-to-r from-primary to-purple-500 rounded-full"></div>
                </div>
              </div>

              <div className="group rounded-2xl border border-border bg-card p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-pink-600 shadow-lg group-hover:shadow-accent/40 transition-all">
                    <Trophy className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-accent to-pink-600 bg-clip-text text-transparent">42</div>
                    <div className="text-sm text-muted-foreground">Achievements</div>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-2 flex-1 bg-gradient-to-r from-accent to-pink-600 rounded-full"></div>
                  ))}
                </div>
              </div>

              <div className="group rounded-2xl border border-border bg-card p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 sm:col-span-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg">
                      <Flame className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Study Streak</div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">12 Days</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">Personal Best</div>
                    <div className="text-lg font-semibold text-foreground">21 days</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Card */}
          <div className="relative">
            <Card className="overflow-hidden shadow-2xl shadow-primary/10">
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-card-foreground">Dashboard</h3>
                  <span className="text-sm text-muted-foreground">Today</span>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="rounded-xl bg-secondary/50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Flame className="h-5 w-5 text-orange-500" />
                      <span className="text-sm font-medium text-card-foreground">Study Streak</span>
                    </div>
                    <div className="text-3xl font-bold text-card-foreground">12 Days</div>
                    <div className="text-xs text-muted-foreground mt-1">Personal best: 21 days</div>
                  </div>
                  <div className="rounded-xl bg-secondary/50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-card-foreground">Focus Score</span>
                    </div>
                    <div className="text-3xl font-bold text-card-foreground">85%</div>
                    <div className="text-xs text-muted-foreground mt-1">+12% this week</div>
                  </div>
                </div>

                {/* Recent Achievements */}
                <div>
                  <h4 className="text-sm font-medium text-card-foreground mb-3">Recent Achievements</h4>
                  <div className="flex gap-2">
                    {["🏆", "⭐", "🔥", "📚", "🎯"].map((emoji, index) => (
                      <div
                        key={index}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-lg"
                      >
                        {emoji}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-accent/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
