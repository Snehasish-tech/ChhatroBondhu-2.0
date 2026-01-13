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
    <Card className="border-border">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Trophy className="h-5 w-5 text-amber-500" />
            Achievements
          </CardTitle>
          <span className="text-sm text-muted-foreground">
            {unlockedCount}/{achievements.length}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-3">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center"
              title={`${achievement.name}: ${achievement.description}`}
            >
              <div
                className={`h-12 w-12 rounded-xl flex items-center justify-center text-xl transition-transform hover:scale-110 ${
                  achievement.unlocked
                    ? "bg-secondary"
                    : "bg-muted grayscale opacity-50"
                }`}
              >
                {achievement.emoji}
              </div>
              <span
                className={`text-xs mt-1 text-center truncate w-full ${
                  achievement.unlocked ? "text-card-foreground" : "text-muted-foreground"
                }`}
              >
                {achievement.name}
              </span>
            </div>
          ))}
        </div>

        {/* Progress */}
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium text-card-foreground">
              {Math.round((unlockedCount / achievements.length) * 100)}%
            </span>
          </div>
          <div className="h-2 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${(unlockedCount / achievements.length) * 100}%` }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AchievementsCard;
