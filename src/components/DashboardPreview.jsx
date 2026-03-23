import { Card, CardContent } from "@/components/ui/card";
import { Flame, Target, Trophy, TrendingUp, Clock, BookOpen } from "lucide-react";

const DashboardPreview = () => {
  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Progress Tracking
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Track Your{" "}
            <span className="text-primary">Learning Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay motivated with personalized insights, streak tracking, and
            achievement badges.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-center">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Completion Rate */}
            <div className="rounded-xl border border-border bg-card p-5 hover:shadow-md hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">89%</div>
                  <div className="text-xs text-muted-foreground">
                    Completion Rate
                  </div>
                </div>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full w-[89%] bg-primary rounded-full"></div>
              </div>
            </div>

            {/* Achievements */}
            <div className="rounded-xl border border-border bg-card p-5 hover:shadow-md hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10">
                  <Trophy className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">42</div>
                  <div className="text-xs text-muted-foreground">
                    Achievements
                  </div>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="h-2 flex-1 bg-accent rounded-full"
                  ></div>
                ))}
              </div>
            </div>

            {/* Study Streak */}
            <div className="rounded-xl border border-border bg-card p-5 hover:shadow-md hover:border-primary/30 transition-all duration-300 sm:col-span-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-destructive/10">
                    <Flame className="h-5 w-5 text-destructive" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">
                      Study Streak
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      12 Days
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">
                    Personal Best
                  </div>
                  <div className="text-lg font-semibold text-foreground">
                    21 days
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Card Preview */}
          <div>
            <Card className="overflow-hidden shadow-xl border-border">
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    Dashboard
                  </h3>
                  <span className="text-sm text-muted-foreground">Today</span>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="rounded-lg bg-muted/50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Flame className="h-4 w-4 text-destructive" />
                      <span className="text-sm font-medium text-foreground">
                        Study Streak
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      12 Days
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Personal best: 21 days
                    </div>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">
                        Focus Score
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      85%
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      +12% this week
                    </div>
                  </div>
                </div>

                {/* Today's Schedule */}
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">
                    Today's Schedule
                  </h4>
                  <div className="space-y-2">
                    {[
                      { time: "9:00 AM", task: "Physics Review", icon: BookOpen },
                      { time: "11:00 AM", task: "Math Problems", icon: Target },
                      { time: "2:00 PM", task: "Chemistry Lab", icon: Clock },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-2 rounded-lg bg-muted/30"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                          <item.icon className="h-4 w-4 text-primary" />
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
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
