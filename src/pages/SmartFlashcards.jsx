import { useState } from "react";
import { BookOpen, Plus, RotateCw, Check, X, Edit, Trash2, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";

const SmartFlashcards = () => {
  const [flashcards, setFlashcards] = useState([
    { id: 1, front: "What is photosynthesis?", back: "The process by which plants convert light energy into chemical energy", deck: "Biology", mastery: 80 },
    { id: 2, front: "Newton's First Law", back: "An object at rest stays at rest and an object in motion stays in motion unless acted upon by an external force", deck: "Physics", mastery: 60 },
    { id: 3, front: "What is a derivative?", back: "The rate of change of a function with respect to a variable", deck: "Math", mastery: 40 },
  ]);

  const [currentCard, setCurrentCard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [studyMode, setStudyMode] = useState(false);

  const [newCard, setNewCard] = useState({
    front: "",
    back: "",
    deck: "General",
  });

  const decks = ["General", "Biology", "Physics", "Math", "Chemistry"];

  const addFlashcard = () => {
    if (newCard.front && newCard.back) {
      setFlashcards([
        ...flashcards,
        {
          id: Date.now(),
          ...newCard,
          mastery: 0,
        },
      ]);
      setNewCard({ front: "", back: "", deck: "General" });
    }
  };

  const deleteCard = (id) => {
    setFlashcards(flashcards.filter((c) => c.id !== id));
  };

  const nextCard = () => {
    setShowAnswer(false);
    setCurrentCard((prev) => (prev + 1) % flashcards.length);
  };

  const previousCard = () => {
    setShowAnswer(false);
    setCurrentCard((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };

  const updateMastery = (cardId, correct) => {
    setFlashcards(
      flashcards.map((card) =>
        card.id === cardId
          ? {
              ...card,
              mastery: correct
                ? Math.min(100, card.mastery + 20)
                : Math.max(0, card.mastery - 10),
            }
          : card
      )
    );
    nextCard();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
              Smart Flashcards
            </h1>
            <p className="text-muted-foreground text-lg">
              AI-generated flashcards with spaced repetition
            </p>
          </div>

          {/* Study Mode Toggle */}
          <div className="flex justify-center gap-4 mb-6">
            <Button
              variant={!studyMode ? "default" : "outline"}
              onClick={() => setStudyMode(false)}
              className={!studyMode ? "bg-gradient-to-r from-teal-500 to-cyan-500" : ""}
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Browse Mode
            </Button>
            <Button
              variant={studyMode ? "default" : "outline"}
              onClick={() => {
                setStudyMode(true);
                setShowAnswer(false);
                setCurrentCard(0);
              }}
              className={studyMode ? "bg-gradient-to-r from-teal-500 to-cyan-500" : ""}
            >
              <Brain className="h-4 w-4 mr-2" />
              Study Mode
            </Button>
          </div>

          {studyMode ? (
            /* Study Mode */
            <div className="space-y-6">
              <Card className="p-8">
                <div className="text-center mb-6">
                  <Badge variant="secondary" className="mb-4">
                    Card {currentCard + 1} of {flashcards.length}
                  </Badge>
                  <div
                    className="min-h-[300px] flex items-center justify-center cursor-pointer"
                    onClick={() => setShowAnswer(!showAnswer)}
                  >
                    {!showAnswer ? (
                      <div>
                        <p className="text-sm text-muted-foreground mb-4">Question</p>
                        <h2 className="text-2xl font-bold">{flashcards[currentCard]?.front}</h2>
                        <p className="text-sm text-muted-foreground mt-6">
                          Click to reveal answer
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-sm text-muted-foreground mb-4">Answer</p>
                        <h2 className="text-2xl font-bold text-primary">
                          {flashcards[currentCard]?.back}
                        </h2>
                      </div>
                    )}
                  </div>
                </div>

                {showAnswer && (
                  <div className="flex justify-center gap-4">
                    <Button
                      variant="outline"
                      className="border-red-500 text-red-500 hover:bg-red-50"
                      onClick={() => updateMastery(flashcards[currentCard].id, false)}
                    >
                      <X className="h-4 w-4 mr-2" />
                      Didn't Know
                    </Button>
                    <Button
                      className="bg-green-500 hover:bg-green-600"
                      onClick={() => updateMastery(flashcards[currentCard].id, true)}
                    >
                      <Check className="h-4 w-4 mr-2" />
                      I Knew It
                    </Button>
                  </div>
                )}

                {!showAnswer && (
                  <div className="flex justify-between">
                    <Button variant="outline" onClick={previousCard}>
                      ← Previous
                    </Button>
                    <Button variant="outline" onClick={nextCard}>
                      Next →
                    </Button>
                  </div>
                )}
              </Card>

              {/* Progress */}
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Mastery Progress</h3>
                <div className="space-y-3">
                  {flashcards.map((card) => (
                    <div key={card.id}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="truncate max-w-[200px]">{card.front}</span>
                        <span className="text-muted-foreground">{card.mastery}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 transition-all"
                          style={{ width: `${card.mastery}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          ) : (
            /* Browse Mode */
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Add Card */}
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="p-8 cursor-pointer hover:shadow-lg transition-all border-dashed border-2 flex items-center justify-center min-h-[200px]">
                    <div className="text-center">
                      <Plus className="h-12 w-12 mx-auto mb-4 text-primary" />
                      <h3 className="text-xl font-semibold">Create New Flashcard</h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        Add a new card to your collection
                      </p>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create Flashcard</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 mt-4">
                    <div>
                      <label className="text-sm font-semibold mb-2 block">Question (Front)</label>
                      <Textarea
                        placeholder="Enter your question..."
                        value={newCard.front}
                        onChange={(e) => setNewCard({ ...newCard, front: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-2 block">Answer (Back)</label>
                      <Textarea
                        placeholder="Enter the answer..."
                        value={newCard.back}
                        onChange={(e) => setNewCard({ ...newCard, back: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-2 block">Deck</label>
                      <Select
                        value={newCard.deck}
                        onValueChange={(value) => setNewCard({ ...newCard, deck: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {decks.map((deck) => (
                            <SelectItem key={deck} value={deck}>
                              {deck}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <Button onClick={addFlashcard} className="w-full">
                      Add Flashcard
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

              {/* Existing Cards */}
              {flashcards.map((card) => (
                <Card key={card.id} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary">{card.deck}</Badge>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteCard(card.id)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Question</p>
                      <p className="font-semibold">{card.front}</p>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Answer</p>
                      <p className="text-sm">{card.back}</p>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Mastery</span>
                        <span className="font-semibold">{card.mastery}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-teal-500 to-cyan-500"
                          style={{ width: `${card.mastery}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* AI Generate Button */}
          {!studyMode && (
            <Card className="p-6 mt-6 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border-teal-500/20">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold mb-2">AI Flashcard Generator</h3>
                  <p className="text-sm text-muted-foreground">
                    Upload your notes and let AI create flashcards automatically
                  </p>
                </div>
                <Button className="bg-gradient-to-r from-teal-500 to-cyan-500">
                  <Brain className="h-4 w-4 mr-2" />
                  Generate with AI
                </Button>
              </div>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default SmartFlashcards;
