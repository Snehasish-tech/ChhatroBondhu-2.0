import { useState } from "react";
import { Plus, Trash2, Download, Share2, Lock, Globe, Eye, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const NotesSharing = () => {
  const styles = {
    page: 'landing-page min-h-screen bg-gradient-to-br from-[#f9fdff] to-[#eef5fa]',
    badge: 'bg-[#e8f4ff] border-[#b8d5ea] text-[#0077b6]',
    title: 'text-[#0f2a3f] font-display',
    card: 'bg-white border border-[#b8d5ea]',
  };

  const [notes, setNotes] = useState([
    { id: 1, title: "Physics Chapter 5", subject: "Physics", isPublic: true, views: 234, shares: 45, content: "Detailed notes on waves and oscillations..." },
    { id: 2, title: "Chemistry Formulas", subject: "Chemistry", isPublic: false, views: 0, shares: 0, content: "Important formulas for organic chemistry..." },
  ]);

  const [showNewNote, setShowNewNote] = useState(false);
  const [newNote, setNewNote] = useState({
    title: "",
    subject: "General",
    content: "",
    isPublic: false,
  });

  const [copiedId, setCopiedId] = useState(null);

  const subjects = ["General", "Mathematics", "Physics", "Chemistry", "Biology", "History", "English"];

  const addNote = () => {
    if (newNote.title && newNote.content) {
      setNotes([
        ...notes,
        {
          id: Date.now(),
          ...newNote,
          views: 0,
          shares: 0,
        },
      ]);
      setNewNote({ title: "", subject: "General", content: "", isPublic: false });
      setShowNewNote(false);
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const togglePublic = (id) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, isPublic: !note.isPublic } : note
    ));
  };

  const shareLink = (id) => {
    const link = `${window.location.origin}/shared-notes/${id}`;
    navigator.clipboard.writeText(link);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const downloadNote = (note) => {
    const element = document.createElement("a");
    const file = new Blob([note.content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${note.title}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className={styles.page}>
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <div className={`inline-flex items-center gap-2 rounded-full ${styles.badge} px-4 py-1.5 border mb-4`}>
              <Share2 className="h-4 w-4" />
              Collaborative Learning
            </div>
            <h1 className={`text-3xl font-bold ${styles.title} md:text-4xl mb-2`}>
              Notes Sharing Hub
            </h1>
            <p className="text-[#284660]">
              Create, organize, and share your study notes with classmates and friends.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className={`${styles.card} rounded-xl p-4 shadow-md`}>
              <p className="text-[#284660] text-sm mb-2">Total Notes</p>
              <p className="text-3xl font-bold text-[#0077b6]">{notes.length}</p>
            </div>
            <div className={`${styles.card} rounded-xl p-4 shadow-md`}>
              <p className="text-[#284660] text-sm mb-2">Total Views</p>
              <p className="text-3xl font-bold text-[#0077b6]">{notes.reduce((sum, n) => sum + n.views, 0)}</p>
            </div>
            <div className={`${styles.card} rounded-xl p-4 shadow-md`}>
              <p className="text-[#284660] text-sm mb-2">Total Shares</p>
              <p className="text-3xl font-bold text-[#0077b6]">{notes.reduce((sum, n) => sum + n.shares, 0)}</p>
            </div>
          </div>

          {/* New Note Button */}
          <Dialog open={showNewNote} onOpenChange={setShowNewNote}>
            <DialogTrigger asChild>
              <Button className="mb-8 w-full md:w-auto bg-gradient-to-r from-[#0077b6] to-[#00a6fb] text-white hover:shadow-lg">
                <Plus className="h-4 w-4 mr-2" />
                Create New Note
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className={`${styles.title}`}>Create New Note</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-[#0f2a3f]">Note Title</Label>
                  <Input
                    placeholder="e.g., Chapter 5 Summary"
                    value={newNote.title}
                    onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                    className="border-[#b8d5ea] focus:ring-[#0077b6]"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-[#0f2a3f]">Subject</Label>
                  <Select value={newNote.subject} onValueChange={(value) => setNewNote({ ...newNote, subject: value })}>
                    <SelectTrigger className="border-[#b8d5ea]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((subject) => (
                        <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-[#0f2a3f]">Content</Label>
                  <Textarea
                    placeholder="Write your notes here..."
                    value={newNote.content}
                    onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
                    rows={8}
                    className="border-[#b8d5ea] focus:ring-[#0077b6]"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="public"
                    checked={newNote.isPublic}
                    onChange={(e) => setNewNote({ ...newNote, isPublic: e.target.checked })}
                    className="rounded border-[#b8d5ea]"
                  />
                  <Label htmlFor="public" className="text-[#0f2a3f] cursor-pointer">
                    Make this note public (share with others)
                  </Label>
                </div>
                <div className="flex gap-2 justify-end">
                  <Button variant="outline" onClick={() => setShowNewNote(false)} className="border-[#b8d5ea]">
                    Cancel
                  </Button>
                  <Button
                    onClick={addNote}
                    className="bg-gradient-to-r from-[#0077b6] to-[#00a6fb] text-white hover:shadow-lg"
                  >
                    Create Note
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Notes List */}
          <div className="space-y-4">
            {notes.length === 0 ? (
              <div className={`${styles.card} rounded-xl p-8 text-center`}>
                <Share2 className="h-12 w-12 text-[#b8d5ea] mx-auto mb-4" />
                <p className="text-[#284660]">No notes yet. Create your first note to get started!</p>
              </div>
            ) : (
              notes.map((note) => (
                <div key={note.id} className={`${styles.card} rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className={`font-bold ${styles.title} text-lg`}>{note.title}</h3>
                        <Badge className={note.isPublic ? "bg-[#e8f4ff] text-[#0077b6] border-[#b8d5ea]" : "bg-gray-100 text-gray-700"}>
                          {note.isPublic ? "Public" : "Private"}
                        </Badge>
                      </div>
                      <p className="text-[#284660] text-sm mb-2">{note.subject}</p>
                      <p className="text-[#284660] line-clamp-2">{note.content}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteNote(note.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Stats and Actions */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#b8d5ea]">
                    <div className="flex items-center gap-1 text-[#284660] text-sm">
                      <Eye className="h-4 w-4" />
                      <span>{note.views} views</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#284660] text-sm">
                      <Share2 className="h-4 w-4" />
                      <span>{note.shares} shares</span>
                    </div>
                    <div className="flex-1"></div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => togglePublic(note.id)}
                      className="border-[#b8d5ea] text-[#0077b6]"
                    >
                      {note.isPublic ? (
                        <>
                          <Globe className="h-4 w-4 mr-1" />
                          Make Private
                        </>
                      ) : (
                        <>
                          <Lock className="h-4 w-4 mr-1" />
                          Make Public
                        </>
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => shareLink(note.id)}
                      className="border-[#b8d5ea] text-[#0077b6]"
                    >
                      {copiedId === note.id ? (
                        <>
                          <Check className="h-4 w-4 mr-1" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4 mr-1" />
                          Copy Link
                        </>
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => downloadNote(note)}
                      className="border-[#b8d5ea] text-[#0077b6]"
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotesSharing;
