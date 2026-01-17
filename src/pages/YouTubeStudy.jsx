import { useState, useRef } from "react";
import { Youtube, Search, BookOpen, Download, FileText, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";

const YouTubeStudy = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [videoData, setVideoData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sampleVideos = [
    {
      id: 1,
      title: "Complete Python Tutorial for Beginners",
      channel: "Programming with Mosh",
      duration: "6:14:07",
      thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400",
      keyPoints: [
        "Python Basics and Syntax",
        "Variables and Data Types",
        "Control Flow Statements",
        "Functions and Modules",
      ],
    },
    {
      id: 2,
      title: "Organic Chemistry - Complete Course",
      channel: "Khan Academy",
      duration: "4:32:15",
      thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400",
      keyPoints: [
        "Molecular Structure",
        "Functional Groups",
        "Reaction Mechanisms",
        "Stereochemistry",
      ],
    },
  ];

  const analyzeVideo = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      setVideoData({
        title: "Introduction to Machine Learning",
        channel: "MIT OpenCourseWare",
        duration: "1:23:45",
        thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600",
        summary: "This lecture covers the fundamentals of machine learning, including supervised and unsupervised learning, neural networks, and practical applications in real-world scenarios.",
        keyPoints: [
          "Introduction to ML concepts and terminology",
          "Supervised vs Unsupervised Learning",
          "Linear Regression and Classification",
          "Neural Networks Basics",
          "Model Evaluation and Validation",
          "Overfitting and Regularization",
        ],
        timestamps: [
          { time: "00:00", topic: "Introduction" },
          { time: "05:30", topic: "What is Machine Learning?" },
          { time: "15:20", topic: "Types of ML Algorithms" },
          { time: "32:10", topic: "Supervised Learning" },
          { time: "48:45", topic: "Neural Networks" },
          { time: "1:12:00", topic: "Practical Applications" },
        ],
        notes: `# Machine Learning Fundamentals

## Introduction
Machine learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed.

## Key Concepts
1. **Supervised Learning**: Training with labeled data
2. **Unsupervised Learning**: Finding patterns in unlabeled data
3. **Reinforcement Learning**: Learning through trial and error

## Applications
- Image Recognition
- Natural Language Processing
- Recommendation Systems
- Autonomous Vehicles`,
      });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              YouTube Study Integration
            </h1>
            <p className="text-muted-foreground text-lg">
              Extract key points from educational videos and create smart notes
            </p>
          </div>

          {/* Video URL Input */}
          <Card className="p-6 mb-6">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Youtube className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Paste YouTube video URL here..."
                  className="pl-10"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                />
              </div>
              <Button
                onClick={analyzeVideo}
                disabled={isLoading}
                className="bg-gradient-to-r from-red-600 to-red-500"
              >
                {isLoading ? "Analyzing..." : "Analyze"}
              </Button>
            </div>
          </Card>

          {videoData ? (
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Video Preview */}
              <Card className="p-6 lg:col-span-2">
                <Tabs defaultValue="summary" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="summary">Summary</TabsTrigger>
                    <TabsTrigger value="keypoints">Key Points</TabsTrigger>
                    <TabsTrigger value="timestamps">Timestamps</TabsTrigger>
                    <TabsTrigger value="notes">Notes</TabsTrigger>
                  </TabsList>

                  <TabsContent value="summary" className="space-y-4">
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                      <img
                        src={videoData.thumbnail}
                        alt="Video"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{videoData.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span>{videoData.channel}</span>
                        <Badge variant="secondary">
                          <Clock className="h-3 w-3 mr-1" />
                          {videoData.duration}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{videoData.summary}</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="keypoints">
                    <ScrollArea className="h-[500px]">
                      <div className="space-y-3 pr-4">
                        {videoData.keyPoints.map((point, idx) => (
                          <Card key={idx} className="p-4">
                            <div className="flex items-start gap-3">
                              <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                                {idx + 1}
                              </div>
                              <p className="text-sm">{point}</p>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </ScrollArea>
                  </TabsContent>

                  <TabsContent value="timestamps">
                    <ScrollArea className="h-[500px]">
                      <div className="space-y-2 pr-4">
                        {videoData.timestamps.map((stamp, idx) => (
                          <Card
                            key={idx}
                            className="p-3 cursor-pointer hover:bg-muted transition-all"
                          >
                            <div className="flex items-center gap-3">
                              <Badge variant="outline" className="font-mono">
                                {stamp.time}
                              </Badge>
                              <p className="text-sm">{stamp.topic}</p>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </ScrollArea>
                  </TabsContent>

                  <TabsContent value="notes">
                    <ScrollArea className="h-[500px]">
                      <Card className="p-4 bg-muted">
                        <pre className="text-sm whitespace-pre-wrap font-mono">
                          {videoData.notes}
                        </pre>
                      </Card>
                    </ScrollArea>
                  </TabsContent>
                </Tabs>

                <div className="flex gap-3 mt-6">
                  <Button variant="outline" className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Download Summary
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <FileText className="h-4 w-4 mr-2" />
                    Export Notes
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Add to Library
                  </Button>
                </div>
              </Card>

              {/* Suggested Videos */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Suggested Videos</h3>
                <div className="space-y-4">
                  {sampleVideos.map((video) => (
                    <Card
                      key={video.id}
                      className="p-3 cursor-pointer hover:shadow-md transition-all"
                    >
                      <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-2">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-semibold text-sm line-clamp-2 mb-1">
                        {video.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">{video.channel}</p>
                      <Badge variant="secondary" className="mt-2 text-xs">
                        {video.duration}
                      </Badge>
                    </Card>
                  ))}
                </div>
              </Card>
            </div>
          ) : (
            <Card className="p-12 text-center">
              <Youtube className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
              <h3 className="text-xl font-semibold mb-2">No video analyzed yet</h3>
              <p className="text-muted-foreground">
                Paste a YouTube URL above to extract key points and create notes
              </p>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default YouTubeStudy;
