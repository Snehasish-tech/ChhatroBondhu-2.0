
import { Card, CardContent } from "@/components/ui/card";
import { Clock, BookOpen, Target, Zap } from "lucide-react";

const QuickStatsBar = () => {
  const stats = [
    {
      icon: Clock,
      label: "Study Time Today",
      value: "2h 45m",
      change: "+30m vs yesterday",
      changeType: "positive",
      gradient: "from-[#0077b6] to-[#00a6fb]",
      bgGradient: "from-[#e8f4ff] to-[#f0feff]",
    },
    {
      icon: BookOpen,
      label: "Topics Covered",
      value: "8",
      change: "3 more to go",
      changeType: "neutral",
      gradient: "from-[#00d8ff] to-[#0099cc]",
      bgGradient: "from-[#e0f7ff] to-[#f0feff]",
    },
    {
      icon: Target,
      label: "Daily Goal",
      value: "75%",
      change: "On track!",
      changeType: "positive",
      gradient: "from-[#0077b6] to-[#00a6fb]",
      bgGradient: "from-[#e8f4ff] to-[#f0feff]",
    },
    {
      icon: Zap,
      label: "Focus Score",
      value: "92",
      change: "+5 from last week",
      changeType: "positive",
      gradient: "from-[#ffc107] to-[#ff9800]",
      bgGradient: "from-[#fff8e1] to-[#fff3e0]",
    },
  ];

  const getChangeColor = (changeType) => {
    switch (changeType) {
      case "positive":
        return "text-green-600";
      case "negative":
        return "text-red-600";
      default:
        return "text-[#284660]";
    }
  };

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <Card 
            key={stat.label} 
            className="border-[#b8d5ea] bg-gradient-to-br hover:shadow-xl transition-all duration-300"
            style={{
              backgroundImage: `linear-gradient(to bottom right, ${stat.bgGradient.split(' ')[1]}, ${stat.bgGradient.split(' ')[3]})`
            }}
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="mb-1 text-sm text-[#284660]">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold text-[#0f2a3f]">
                    {stat.value}
                  </p>
                  <p
                    className={`mt-1 text-xs ${getChangeColor(
                      stat.changeType
                    )}`}
                  >
                    {stat.change}
                  </p>
                </div>

                <div 
                  className="flex h-10 w-10 items-center justify-center rounded-lg shadow-md"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${stat.gradient.split(' ')[1]}, ${stat.gradient.split(' ')[3]})`
                  }}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default QuickStatsBar;
