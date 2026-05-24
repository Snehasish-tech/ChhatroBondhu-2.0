import { Flame, Target, Trophy, TrendingUp, Clock, BookOpen } from "lucide-react";

const DashboardPreview = () => {
  return (
    <section id="about" className="landing-showcase">
      <div className="landing-frame">
        <div className="landing-showcase-panel landing-reveal">
          <div className="landing-showcase-grid">
            <div>
              <span className="landing-tag">Progress Tracking</span>
              <h2 className="font-display">
                Track Your <span className="text-[#79ceff]">Learning Journey</span>
              </h2>
              <p>
                Stay motivated with personalized insights, streak tracking, and
                achievement badges.
              </p>

              <div className="landing-metric-grid">
                <div className="landing-metric-card">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15">
                      <TrendingUp className="h-5 w-5 text-[#9eddff]" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-white">89%</div>
                      <div className="text-xs text-white/70">Completion Rate</div>
                    </div>
                  </div>
                </div>
                <div className="landing-metric-card">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15">
                      <Trophy className="h-5 w-5 text-[#9eddff]" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-white">42</div>
                      <div className="text-xs text-white/70">Achievements</div>
                    </div>
                  </div>
                </div>
                <div className="landing-metric-card sm:col-span-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15">
                        <Flame className="h-5 w-5 text-[#9eddff]" />
                      </div>
                      <div>
                        <div className="text-xs text-white/70">Study Streak</div>
                        <div className="text-lg font-semibold text-white">
                          12 Days
                        </div>
                      </div>
                    </div>
                    <div className="text-right text-xs text-white/70">
                      Personal Best
                      <div className="text-sm font-semibold text-white">
                        21 days
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="landing-dashboard-card hover:shadow-2xl hover:shadow-[#00a6fb]/20 transition-all duration-500 transform hover:-translate-y-2 border border-[#d4e8f7]">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-foreground">Dashboard</h3>
                <span className="text-sm text-muted-foreground">Today</span>
              </div>

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
                  <div className="text-2xl font-bold text-foreground">85%</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    +12% this week
                  </div>
                </div>
              </div>

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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
