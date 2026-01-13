import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame } from "lucide-react";

const StudyStreakCard = () => {
  const currentStreak = 12;
  const longestStreak = 21;
  
  // Last 7 days activity (true = studied, false = missed)
  const weekActivity = [true, true, true, false, true, true, true];
  const dayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <Card className="border-border">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Flame className="h-5 w-5 text-orange-500" />
          Study Streak
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Current Streak */}
        <div className="text-center mb-6">
          <div className="text-5xl font-bold text-primary mb-1">{currentStreak}</div>
          <div className="text-sm text-muted-foreground">days in a row</div>
        </div>

        {/* Week Activity */}
        <div className="flex justify-between mb-4">
          {weekActivity.map((active, index) => (
            <div key={index} className="flex flex-col items-center gap-1">
              <div
                className={`h-8 w-8 rounded-full flex items-center justify-center ${
                  active
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {active ? "✓" : "–"}
              </div>
              <span className="text-xs text-muted-foreground">{dayLabels[index]}</span>
            </div>
          ))}
        </div>

        {/* Longest Streak */}
        <div className="pt-4 border-t border-border">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Longest Streak</span>
            <span className="text-sm font-semibold text-card-foreground">
              {longestStreak} days
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudyStreakCard;
