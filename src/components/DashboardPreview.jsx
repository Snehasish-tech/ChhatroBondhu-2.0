import { Card, CardContent } from "@/components/ui/card";
import { Flame, Target, Trophy, TrendingUp } from "lucide-react";

const DashboardPreview = () => {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-primary mb-4">
              YOUR PROGRESS
            </span>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl mb-6">
              Track Your Learning Journey
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Stay motivated with personalized insights, streak tracking, and achievement badges. Watch your progress grow every day.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">89%</div>
                  <div className="text-sm text-muted-foreground">Completion Rate</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <Trophy className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">42</div>
                  <div className="text-sm text-muted-foreground">Achievements</div>
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
