import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const AchievementsCard = () => {
  const achievements = [
    { emoji: "🏆", name: "First Steps", description: "Complete your first study session", unlocked: true },
    { emoji: "🔥", name: "On Fire", description: "7-day study streak", unlocked: true },
    { emoji: "⭐", name: "Star Student", description: "Score 100% on a quiz", unlocked: true },
    { emoji: "📚", name: "Bookworm", description: "Study 50 hours total", unlocked: true },
    { emoji: "🎯", name: "Focused", description: "90+ focus score", unlocked: true },
    { emoji: "🌙", name: "Night Owl", description: "Study after midnight", unlocked: false },
    { emoji: "☀️", name: "Early Bird", description: "Study before 6 AM", unlocked: false },
    { emoji: "💎", name: "Diamond", description: "30-day streak", unlocked: false },
  ];

  const unlockedCount = achievements.filter((a) => a.unlocked).length;

  return (
    <Card className="border-[#b8d5ea] bg-gradient-to-br from-[#f9fdff] to-[#eef5fa] hover:shadow-lg transition-all duration-250">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg text-[#0f2a3f]">
            <div className="p-2 rounded-md bg-gradient-to-br from-[#0077b6] to-[#00a6fb]">
              <Trophy className="h-5 w-5 text-white" />
            </div>
            Achievements
          </CardTitle>
          <span className="text-sm text-[#284660]">
            {unlockedCount}/{achievements.length}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center"
              title={`${achievement.name}: ${achievement.description}`}
            >
              <div
                className={`h-12 w-12 rounded-xl flex items-center justify-center text-xl transition-transform transform-gpu hover:scale-110 ${
                  achievement.unlocked
                    ? "bg-gradient-to-br from-[#0077b6] to-[#00a6fb] text-white shadow-md"
                    : "bg-[#e8f4ff] text-[#b8d5ea] grayscale opacity-70"
                }`}
              >
                {achievement.emoji}
              </div>
              <span
                className={`text-xs mt-2 text-center truncate w-full ${
                  achievement.unlocked ? "text-[#0f2a3f]" : "text-[#7b98a8]"
                }`}
              >
                {achievement.name}
              </span>
            </div>
          ))}
        </div>

        {/* Progress */}
        <div className="mt-5 pt-4 border-t border-[#d4e8f7]">
          <div className="flex justify-between items-center text-sm mb-2">
            <span className="text-[#284660]">Progress</span>
            <span className="font-medium text-[#0f2a3f]">
              {Math.round((unlockedCount / achievements.length) * 100)}%
            </span>
          </div>
          <div className="h-3 rounded-full bg-[#eef6fb] overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${(unlockedCount / achievements.length) * 100}%`,
                background: "linear-gradient(90deg,#0077b6,#00a6fb)",
              }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AchievementsCard;
