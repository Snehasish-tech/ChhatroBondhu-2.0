import { useState } from "react";
import { Box, RotateCcw, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";

const ThreeDVisualizations = () => {
  const [selectedModel, setSelectedModel] = useState("dna");

  const models = [
    {
      id: "dna",
      name: "DNA Structure",
      subject: "Biology",
      description: "Interactive 3D model of DNA double helix",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400",
    },
    {
      id: "atom",
      name: "Atomic Structure",
      subject: "Chemistry",
      description: "Electron orbital visualization",
      image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400",
    },
    {
      id: "heart",
      name: "Human Heart",
      subject: "Anatomy",
      description: "Detailed cardiac anatomy model",
      image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=400",
    },
    {
      id: "solar",
      name: "Solar System",
      subject: "Astronomy",
      description: "Planets and orbits in motion",
      image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=400",
    },
    {
      id: "cell",
      name: "Cell Structure",
      subject: "Biology",
      description: "Animal cell organelles",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400",
    },
    {
      id: "molecule",
      name: "Molecular Models",
      subject: "Chemistry",
      description: "Various organic compounds",
      image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=400",
    },
  ];

  const subjects = ["All", "Biology", "Chemistry", "Anatomy", "Astronomy", "Physics"];
  const [selectedSubject, setSelectedSubject] = useState("All");

  const filteredModels = selectedSubject === "All"
    ? models
    : models.filter((m) => m.subject === selectedSubject);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
              3D Interactive Visualizations
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore complex concepts through interactive 3D models
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* 3D Viewer */}
            <Card className="lg:col-span-2 p-0 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-cyan-900 to-teal-900 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Box className="h-20 w-20 mx-auto mb-4 animate-pulse" />
                    <h2 className="text-2xl font-bold mb-2">
                      {models.find((m) => m.id === selectedModel)?.name}
                    </h2>
                    <p className="text-cyan-200">
                      Interactive 3D model - Drag to rotate, scroll to zoom
                    </p>
                  </div>
                </div>

                {/* Controls Overlay */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button size="icon" variant="secondary" className="bg-white/20 hover:bg-white/30">
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="bg-white/20 hover:bg-white/30">
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="bg-white/20 hover:bg-white/30">
                    <ZoomOut className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="bg-white/20 hover:bg-white/30">
                    <Maximize2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Model Info */}
              <div className="p-6">
                <Tabs defaultValue="info" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="info">Information</TabsTrigger>
                    <TabsTrigger value="labels">Labels</TabsTrigger>
                    <TabsTrigger value="quiz">Quiz</TabsTrigger>
                  </TabsList>

                  <TabsContent value="info" className="space-y-4 mt-4">
                    <div>
                      <h3 className="font-semibold mb-2">About this Model</h3>
                      <p className="text-sm text-muted-foreground">
                        {models.find((m) => m.id === selectedModel)?.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Card className="p-4 bg-muted">
                        <p className="text-sm font-semibold">Subject</p>
                        <p className="text-lg">{models.find((m) => m.id === selectedModel)?.subject}</p>
                      </Card>
                      <Card className="p-4 bg-muted">
                        <p className="text-sm font-semibold">Complexity</p>
                        <p className="text-lg">Intermediate</p>
                      </Card>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Fully interactive 360° rotation</li>
                        <li>Detailed component labeling</li>
                        <li>Zoom and pan capabilities</li>
                        <li>Cross-section view available</li>
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="labels" className="mt-4">
                    <div className="space-y-2">
                      {["Component A", "Component B", "Component C", "Component D"].map((label, idx) => (
                        <Card key={idx} className="p-3 cursor-pointer hover:bg-muted transition-all">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">{label}</span>
                            <Badge variant="outline">Click to highlight</Badge>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="quiz" className="mt-4">
                    <Card className="p-4 bg-primary/5">
                      <p className="font-semibold mb-3">Test your knowledge!</p>
                      <Button className="w-full bg-gradient-to-r from-cyan-500 to-teal-500">
                        Start Interactive Quiz
                      </Button>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </Card>

            {/* Model Library */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Model Library</h2>

              {/* Subject Filter */}
              <div className="flex flex-wrap gap-2 mb-4">
                {subjects.map((subject) => (
                  <Badge
                    key={subject}
                    variant={selectedSubject === subject ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setSelectedSubject(subject)}
                  >
                    {subject}
                  </Badge>
                ))}
              </div>

              {/* Models List */}
              <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                {filteredModels.map((model) => (
                  <Card
                    key={model.id}
                    className={`cursor-pointer hover:shadow-md transition-all ${
                      selectedModel === model.id ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() => setSelectedModel(model.id)}
                  >
                    <div className="aspect-video bg-muted overflow-hidden">
                      <img
                        src={model.image}
                        alt={model.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="font-semibold text-sm">{model.name}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {model.subject}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {model.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ThreeDVisualizations;
