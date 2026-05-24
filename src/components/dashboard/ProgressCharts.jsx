import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { TrendingUp } from "lucide-react";

const ProgressCharts = () => {
  // Weekly study time data
  const weeklyData = [
    { day: "Mon", hours: 2.5, focus: 85 },
    { day: "Tue", hours: 3.2, focus: 92 },
    { day: "Wed", hours: 1.8, focus: 78 },
    { day: "Thu", hours: 0, focus: 0 },
    { day: "Fri", hours: 2.8, focus: 88 },
    { day: "Sat", hours: 4.5, focus: 95 },
    { day: "Sun", hours: 3.0, focus: 90 },
  ];

  // Subject distribution
  const subjectData = [
    { subject: "Math", hours: 12, color: "hsl(271 91% 65%)" },
    { subject: "Physics", hours: 8, color: "hsl(200 85% 55%)" },
    { subject: "Chemistry", hours: 6, color: "hsl(38 92% 50%)" },
    { subject: "Biology", hours: 5, color: "hsl(140 70% 45%)" },
    { subject: "English", hours: 4, color: "hsl(340 80% 60%)" },
  ];

  // Monthly progress
  const monthlyData = [
    { week: "Week 1", hours: 15, target: 20 },
    { week: "Week 2", hours: 22, target: 20 },
    { week: "Week 3", hours: 18, target: 20 },
    { week: "Week 4", hours: 25, target: 20 },
  ];

  return (
    <Card className="border-[#b8d5ea] bg-gradient-to-br from-[#f9fdff] to-[#eef5fa] hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg text-[#0f2a3f]">
          <TrendingUp className="h-5 w-5 text-[#0077b6]" />
          Study Progress
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="weekly" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4 bg-transparent">
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="subjects">Subjects</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>

          <TabsContent value="weekly" className="mt-0">
            <div className="h-64 rounded-md p-2 bg-white shadow-sm">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={weeklyData}>
                  <defs>
                    <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00a6fb" stopOpacity={0.25} />
                      <stop offset="95%" stopColor="#00a6fb" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e6f2fb" />
                  <XAxis dataKey="day" stroke="#284660" fontSize={12} />
                  <YAxis stroke="#284660" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #e6f2fb",
                      borderRadius: "8px",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="hours"
                    stroke="#0077b6"
                    strokeWidth={2}
                    fill="url(#colorHours)"
                    name="Study Hours"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 flex justify-center gap-6 text-sm text-[#284660]">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-gradient-to-r from-[#0077b6] to-[#00a6fb]" />
                <span>Total: 17.8 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Avg Focus: 88%</span>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="subjects" className="mt-0">
            <div className="flex items-center gap-8">
              <div className="h-64 w-64 flex-shrink-0 bg-white p-2 rounded-md shadow-sm">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={subjectData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={3}
                      dataKey="hours"
                    >
                      {subjectData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#fff",
                        border: "1px solid #e6f2fb",
                        borderRadius: "8px",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex-1 space-y-3">
                {subjectData.map((subject) => (
                  <div key={subject.subject} className="flex items-center gap-3">
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: subject.color }}
                    />
                    <span className="flex-1 text-sm text-[#0f2a3f]">
                      {subject.subject}
                    </span>
                    <span className="text-sm font-medium text-[#284660]">
                      {subject.hours}h
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="monthly" className="mt-0">
            <div className="h-64 rounded-md p-2 bg-white shadow-sm">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e6f2fb" />
                  <XAxis dataKey="week" stroke="#284660" fontSize={12} />
                  <YAxis stroke="#284660" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #e6f2fb",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="hours" fill="#0077b6" radius={[6, 6, 0, 0]} name="Actual" />
                  <Bar dataKey="target" fill="#e6f2fb" radius={[6, 6, 0, 0]} name="Target" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 flex justify-center gap-6 text-sm text-[#284660]">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded bg-gradient-to-r from-[#0077b6] to-[#00a6fb]" />
                <span>Actual Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded bg-[#e6f2fb]" />
                <span>Target</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ProgressCharts;
