import StudyStreakCard from "@/components/dashboard/StudyStreakCard";
import AchievementsCard from "@/components/dashboard/AchievementsCard";
import ProgressCharts from "@/components/dashboard/ProgressCharts";
import RecommendationsCard from "@/components/dashboard/RecommendationsCard";
import QuickStatsBar from "@/components/dashboard/QuickStatsBar";
import { TrendingUp } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="landing-page min-h-screen bg-gradient-to-br from-[#f9fdff] to-[#eef5fa]">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#e8f4ff] px-4 py-1.5 border border-[#b8d5ea] text-sm font-medium text-[#0077b6] mb-4">
              <TrendingUp className="h-4 w-4" />
              Your Progress
            </div>
            <h1 className="text-3xl font-bold font-display text-[#0f2a3f] mb-2">
              Welcome back, Student!
            </h1>
            <p className="text-[#284660]">
              Track your progress and keep up the momentum.
            </p>
          </div>

          {/* Quick Stats */}
          <QuickStatsBar />

          {/* Main Grid */}
          <div className="grid gap-6 lg:grid-cols-3 mt-8">
            {/* Left Column - Streak & Achievements */}
            <div className="space-y-6">
              <StudyStreakCard />
              <AchievementsCard />
            </div>

            {/* Middle & Right - Charts */}
            <div className="lg:col-span-2 space-y-6">
              <ProgressCharts />
              <RecommendationsCard />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
