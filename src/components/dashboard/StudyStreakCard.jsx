import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame } from "lucide-react";

const StudyStreakCard = () => {
  const currentStreak = 12;
  const longestStreak = 21;
  
  // Last 7 days activity (true = studied, false = missed)
  const weekActivity = [true, true, true, false, true, true, true];
  const dayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <Card className="border-[#b8d5ea] bg-gradient-to-br from-[#fff8e1] to-[#fff3e0] hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-3 border-b border-[#b8d5ea]">
        <CardTitle className="flex items-center gap-2 text-lg text-[#0f2a3f]">
          <div className="p-2 rounded-lg bg-gradient-to-br from-[#ffc107] to-[#ff9800]">
            <Flame className="h-5 w-5 text-white" />
          </div>
          Study Streak
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        {/* Current Streak */}
        <div className="text-center mb-6">
          <div className="text-5xl font-bold bg-gradient-to-r from-[#ffc107] to-[#ff9800] bg-clip-text text-transparent mb-1">{currentStreak}</div>
          <div className="text-sm text-[#284660]">days in a row</div>
        </div>

        {/* Week Activity */}
        <div className="flex justify-between mb-4 bg-white p-3 rounded-lg">
          {weekActivity.map((active, index) => (
            <div key={index} className="flex flex-col items-center gap-1">
              <div
                className={`h-8 w-8 rounded-full flex items-center justify-center font-semibold transition-all duration-200 ${
                  active
                    ? "bg-gradient-to-r from-[#ffc107] to-[#ff9800] text-white shadow-md"
                    : "bg-[#e8f4ff] text-[#b8d5ea]"
                }`}
              >
                {active ? "✓" : "–"}
              </div>
              <span className="text-xs text-[#284660]">{dayLabels[index]}</span>
            </div>
          ))}
        </div>

        {/* Longest Streak */}
        <div className="pt-4 border-t border-[#b8d5ea] bg-white p-3 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-sm text-[#284660]">Longest Streak</span>
            <span className="text-sm font-semibold text-[#0f2a3f]">
              {longestStreak} days
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudyStreakCard;
