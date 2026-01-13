import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudyStreakCard from "@/components/dashboard/StudyStreakCard";
import AchievementsCard from "@/components/dashboard/AchievementsCard";
import ProgressCharts from "@/components/dashboard/ProgressCharts";
import RecommendationsCard from "@/components/dashboard/RecommendationsCard";
import QuickStatsBar from "@/components/dashboard/QuickStatsBar";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="container">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Welcome back, Student! 👋
            </h1>
            <p className="text-muted-foreground">
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
      <Footer />
    </div>
  );
};

export default Dashboard;
