import { useState } from "react";
import { Sparkles, Upload, FileText, Download, Play, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";

const AIQuizGenerator = () => {
  const [notes, setNotes] = useState("");
  const [quizGenerated, setQuizGenerated] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const [settings, setSettings] = useState({
    numQuestions: 5,
    difficulty: "medium",
    questionType: "multiple-choice",
  });

  const sampleQuiz = [
    {
      id: 1,
      question: "What is the primary function of mitochondria in a cell?",
      options: [
        "Protein synthesis",
        "Energy production",
        "DNA replication",
        "Lipid storage",
      ],
      correct: 1,
      explanation: "Mitochondria are known as the powerhouse of the cell, responsible for producing ATP through cellular respiration.",
    },
    {
      id: 2,
      question: "Which process converts light energy into chemical energy?",
      options: [
        "Respiration",
        "Photosynthesis",
        "Fermentation",
        "Digestion",
      ],
      correct: 1,
      explanation: "Photosynthesis is the process by which plants convert light energy into chemical energy stored in glucose.",
    },
    {
      id: 3,
      question: "What is the basic unit of heredity?",
      options: [
        "Chromosome",
        "DNA",
        "Gene",
        "Protein",
      ],
      correct: 2,
      explanation: "Genes are the basic units of heredity, containing instructions for building proteins.",
    },
  ];

  const generateQuiz = () => {
    // Simulate quiz generation
    setQuizGenerated(true);
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const handleAnswer = (questionId, answerIndex) => {
    setAnswers({ ...answers, [questionId]: answerIndex });
  };

  const submitQuiz = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    let correct = 0;
    sampleQuiz.forEach((q) => {
      if (answers[q.id] === q.correct) correct++;
    });
    return { correct, total: sampleQuiz.length, percentage: Math.round((correct / sampleQuiz.length) * 100) };
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
              AI Quiz Generator
            </h1>
            <p className="text-muted-foreground text-lg">
              Generate custom quizzes from your notes instantly
            </p>
          </div>

          {!quizGenerated ? (
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Input Section */}
              <Card className="p-6 lg:col-span-2">
                <h2 className="text-2xl font-semibold mb-4">Your Study Material</h2>
                
                <Textarea
                  placeholder="Paste your notes here or upload a file..."
                  className="min-h-[300px] mb-4"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />

                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload PDF/DOC
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <FileText className="h-4 w-4 mr-2" />
                    Import from Notes
                  </Button>
                </div>
              </Card>

              {/* Settings Section */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Quiz Settings</h2>

                <div className="space-y-6">
                  <div>
                    <Label className="mb-3 block">Number of Questions</Label>
                    <div className="space-y-2">
                      <Slider
                        value={[settings.numQuestions]}
                        onValueChange={(value) =>
                          setSettings({ ...settings, numQuestions: value[0] })
                        }
                        max={20}
                        min={3}
                        step={1}
                      />
                      <p className="text-center text-2xl font-bold text-primary">
                        {settings.numQuestions}
                      </p>
                    </div>
                  </div>

                  <div>
                    <Label className="mb-3 block">Difficulty Level</Label>
                    <Select
                      value={settings.difficulty}
                      onValueChange={(value) =>
                        setSettings({ ...settings, difficulty: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="easy">Easy</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="hard">Hard</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="mb-3 block">Question Type</Label>
                    <RadioGroup
                      value={settings.questionType}
                      onValueChange={(value) =>
                        setSettings({ ...settings, questionType: value })
                      }
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="multiple-choice" id="mcq" />
                        <Label htmlFor="mcq">Multiple Choice</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="true-false" id="tf" />
                        <Label htmlFor="tf">True/False</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="mixed" id="mixed" />
                        <Label htmlFor="mixed">Mixed</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-fuchsia-500 to-pink-500"
                    size="lg"
                    onClick={generateQuiz}
                    disabled={!notes}
                  >
                    <Sparkles className="h-5 w-5 mr-2" />
                    Generate Quiz
                  </Button>
                </div>
              </Card>
            </div>
          ) : !showResults ? (
            /* Quiz Taking Mode */
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <Badge variant="secondary">
                    Question {currentQuestion + 1} of {sampleQuiz.length}
                  </Badge>
                  <Badge variant="outline">
                    {settings.difficulty.charAt(0).toUpperCase() + settings.difficulty.slice(1)}
                  </Badge>
                </div>

                <h2 className="text-2xl font-semibold mb-6">
                  {sampleQuiz[currentQuestion].question}
                </h2>

                <RadioGroup
                  value={answers[sampleQuiz[currentQuestion].id]?.toString()}
                  onValueChange={(value) =>
                    handleAnswer(sampleQuiz[currentQuestion].id, parseInt(value))
                  }
                >
                  <div className="space-y-3">
                    {sampleQuiz[currentQuestion].options.map((option, idx) => (
                      <Card
                        key={idx}
                        className={`p-4 cursor-pointer transition-all ${
                          answers[sampleQuiz[currentQuestion].id] === idx
                            ? "ring-2 ring-primary bg-primary/5"
                            : "hover:bg-muted"
                        }`}
                        onClick={() => handleAnswer(sampleQuiz[currentQuestion].id, idx)}
                      >
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem value={idx.toString()} id={`option-${idx}`} />
                          <Label htmlFor={`option-${idx}`} className="flex-1 cursor-pointer">
                            {option}
                          </Label>
                        </div>
                      </Card>
                    ))}
                  </div>
                </RadioGroup>

                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                    disabled={currentQuestion === 0}
                  >
                    Previous
                  </Button>
                  
                  {currentQuestion < sampleQuiz.length - 1 ? (
                    <Button
                      onClick={() => setCurrentQuestion(currentQuestion + 1)}
                      className="bg-gradient-to-r from-fuchsia-500 to-pink-500"
                    >
                      Next Question
                    </Button>
                  ) : (
                    <Button
                      onClick={submitQuiz}
                      className="bg-gradient-to-r from-fuchsia-500 to-pink-500"
                    >
                      Submit Quiz
                    </Button>
                  )}
                </div>
              </Card>

              {/* Progress */}
              <Card className="p-4">
                <div className="flex gap-2">
                  {sampleQuiz.map((q, idx) => (
                    <div
                      key={q.id}
                      className={`flex-1 h-2 rounded-full ${
                        answers[q.id] !== undefined ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground text-center mt-2">
                  {Object.keys(answers).length} of {sampleQuiz.length} answered
                </p>
              </Card>
            </div>
          ) : (
            /* Results View */
            <div className="space-y-6">
              <Card className="p-8 text-center bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10">
                <CheckCircle className="h-16 w-16 mx-auto mb-4 text-primary" />
                <h2 className="text-3xl font-bold mb-2">Quiz Complete!</h2>
                <div className="text-6xl font-bold text-primary my-6">
                  {calculateScore().percentage}%
                </div>
                <p className="text-lg text-muted-foreground">
                  You scored {calculateScore().correct} out of {calculateScore().total}
                </p>
              </Card>

              {/* Answer Review */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Review Answers</h3>
                {sampleQuiz.map((q) => {
                  const isCorrect = answers[q.id] === q.correct;
                  return (
                    <Card key={q.id} className="p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <div
                          className={`p-2 rounded-full ${
                            isCorrect ? "bg-green-100" : "bg-red-100"
                          }`}
                        >
                          {isCorrect ? (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          ) : (
                            <X className="h-5 w-5 text-red-600" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-2">{q.question}</h4>
                          
                          <div className="space-y-2 mb-3">
                            {q.options.map((option, idx) => (
                              <div
                                key={idx}
                                className={`p-3 rounded-lg text-sm ${
                                  idx === q.correct
                                    ? "bg-green-100 border-2 border-green-500"
                                    : idx === answers[q.id]
                                    ? "bg-red-100 border-2 border-red-500"
                                    : "bg-muted"
                                }`}
                              >
                                {option}
                                {idx === q.correct && (
                                  <Badge className="ml-2 bg-green-600">Correct</Badge>
                                )}
                                {idx === answers[q.id] && idx !== q.correct && (
                                  <Badge className="ml-2 bg-red-600">Your Answer</Badge>
                                )}
                              </div>
                            ))}
                          </div>

                          <div className="bg-blue-50 p-3 rounded-lg">
                            <p className="text-sm text-blue-900">
                              <strong>Explanation:</strong> {q.explanation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => {
                    setQuizGenerated(false);
                    setNotes("");
                    setAnswers({});
                    setShowResults(false);
                  }}
                >
                  Create New Quiz
                </Button>
                <Button variant="outline" className="flex-1">
                  <Download className="h-4 w-4 mr-2" />
                  Export Results
                </Button>
                <Button
                  className="flex-1 bg-gradient-to-r from-fuchsia-500 to-pink-500"
                  onClick={() => {
                    setShowResults(false);
                    setCurrentQuestion(0);
                    setAnswers({});
                  }}
                >
                  <Play className="h-4 w-4 mr-2" />
                  Retake Quiz
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AIQuizGenerator;
