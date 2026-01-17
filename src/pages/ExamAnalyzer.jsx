import { useState } from "react";
import { FileSearch, Upload, TrendingUp, AlertCircle, BookOpen, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";

const ExamAnalyzer = () => {
  const [analyzed, setAnalyzed] = useState(false);

  const analysisData = {
    importantTopics: [
      { topic: "Thermodynamics", frequency: 85, difficulty: "High", chapters: ["Heat", "Laws of Thermodynamics"] },
      { topic: "Electromagnetism", frequency: 78, difficulty: "Medium", chapters: ["Electric Field", "Magnetic Field"] },
      { topic: "Optics", frequency: 65, difficulty: "Medium", chapters: ["Reflection", "Refraction"] },
      { topic: "Modern Physics", frequency: 92, difficulty: "High", chapters: ["Quantum", "Nuclear"] },
      { topic: "Mechanics", frequency: 70, difficulty: "Low", chapters: ["Motion", "Forces"] },
    ],
    predictedQuestions: [
      { question: "Explain the Second Law of Thermodynamics", probability: 90, type: "Theory" },
      { question: "Derive the lens formula", probability: 85, type: "Derivation" },
      { question: "Photoelectric effect numerical", probability: 88, type: "Numerical" },
      { question: "Explain Maxwell's equations", probability: 75, type: "Theory" },
    ],
    chapterWeights: [
      { chapter: "Thermodynamics", marks: 18, questions: 6 },
      { chapter: "Electromagnetism", marks: 22, questions: 7 },
      { chapter: "Optics", marks: 15, questions: 5 },
      { chapter: "Modern Physics", marks: 25, questions: 8 },
      { chapter: "Mechanics", marks: 20, questions: 6 },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
              Exam Pattern Analyzer
            </h1>
            <p className="text-muted-foreground text-lg">
              Analyze past papers and predict likely exam questions
            </p>
          </div>

          {!analyzed ? (
            <Card className="p-12 text-center">
              <FileSearch className="h-20 w-20 mx-auto mb-6 text-primary" />
              <h2 className="text-2xl font-bold mb-4">Upload Past Papers</h2>
              <p className="text-muted-foreground mb-6">
                Upload your previous exam papers to analyze patterns and get predictions
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-500 to-blue-500"
                onClick={() => setAnalyzed(true)}
              >
                <Upload className="h-5 w-5 mr-2" />
                Upload Papers
              </Button>
            </Card>
          ) : (
            <Tabs defaultValue="topics" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="topics">Important Topics</TabsTrigger>
                <TabsTrigger value="predictions">Predictions</TabsTrigger>
                <TabsTrigger value="weights">Chapter Weights</TabsTrigger>
              </TabsList>

              <TabsContent value="topics" className="space-y-4">
                {analysisData.importantTopics.map((topic, idx) => (
                  <Card key={idx} className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold">{topic.topic}</h3>
                          <Badge
                            variant={
                              topic.difficulty === "High"
                                ? "destructive"
                                : topic.difficulty === "Medium"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {topic.difficulty}
                          </Badge>
                        </div>
                        <div className="flex gap-2 mb-3">
                          {topic.chapters.map((chapter) => (
                            <Badge key={chapter} variant="outline">
                              {chapter}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-primary">{topic.frequency}%</div>
                        <p className="text-xs text-muted-foreground">Frequency</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Importance</span>
                        <span className="font-semibold">{topic.frequency}%</span>
                      </div>
                      <Progress value={topic.frequency} className="h-2" />
                    </div>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="predictions" className="space-y-4">
                <Card className="p-6 bg-yellow-500/10 border-yellow-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="h-5 w-5 text-yellow-600" />
                    <h3 className="font-semibold">AI-Powered Predictions</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Based on 5 years of past papers analysis
                  </p>
                </Card>

                {analysisData.predictedQuestions.map((q, idx) => (
                  <Card key={idx} className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <Badge variant="outline" className="mb-2">{q.type}</Badge>
                        <h3 className="text-lg font-semibold">{q.question}</h3>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">{q.probability}%</div>
                        <p className="text-xs text-muted-foreground">Probability</p>
                      </div>
                    </div>
                    <Progress value={q.probability} className="h-2" />
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="weights" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  {analysisData.chapterWeights.map((chapter, idx) => (
                    <Card key={idx} className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold">{chapter.chapter}</h3>
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Expected Marks</span>
                          <span className="text-2xl font-bold text-primary">{chapter.marks}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Questions</span>
                          <span className="text-lg font-semibold">{chapter.questions}</span>
                        </div>
                        <Progress value={(chapter.marks / 100) * 100} className="h-2" />
                      </div>
                    </Card>
                  ))}
                </div>

                <Card className="p-6 bg-primary/5">
                  <div className="flex items-center gap-3">
                    <Target className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">Recommended Study Plan</h3>
                      <p className="text-sm text-muted-foreground">
                        Focus on Modern Physics (25 marks) and Electromagnetism (22 marks) for maximum impact
                      </p>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          )}
        </div>
      </main>
    </div>
  );
};

export default ExamAnalyzer;
