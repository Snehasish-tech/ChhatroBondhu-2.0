import Header from "@/components/Header";
import StudyStreakCard from "@/components/dashboard/StudyStreakCard";
import AchievementsCard from "@/components/dashboard/AchievementsCard";
import ProgressCharts from "@/components/dashboard/ProgressCharts";
import RecommendationsCard from "@/components/dashboard/RecommendationsCard";
import QuickStatsBar from "@/components/dashboard/QuickStatsBar";
import { TrendingUp, Sparkles } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container-wide mx-auto py-8 pt-32">
        <div>
          {/* Page Header */}
          <div className="mb-12 space-y-4 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-wide">
                Dashboard
              </span>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2 tracking-tight">
                Welcome back! 
                <span className="text-gradient"> Keep Learning</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Track your progress, maintain your streak, and achieve your learning goals with AI-powered insights.
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <QuickStatsBar />
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid gap-6 lg:grid-cols-3 auto-rows-max" style={{ animationDelay: "0.2s" }}>
            {/* Left Column - Streak & Achievements */}
            <div className="space-y-6">
              <div className="animate-fade-up" style={{ animationDelay: "0.25s" }}>
                <StudyStreakCard />
              </div>
              <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <AchievementsCard />
              </div>
            </div>

            {/* Right Column - Charts & Recommendations */}
            <div className="lg:col-span-2 space-y-6">
              <div className="animate-fade-up" style={{ animationDelay: "0.35s" }}>
                <ProgressCharts />
              </div>
              <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
                <RecommendationsCard />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
