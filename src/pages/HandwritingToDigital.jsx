import { useState, useRef } from "react";
import { Upload, FileImage, Download, Loader2, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";

const HandwritingToDigital = () => {
  const [image, setImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [extractedText, setExtractedText] = useState("");
  const [history, setHistory] = useState([]);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setExtractedText("");
      };
      reader.readAsDataURL(file);
    }
  };

  const processImage = () => {
    setIsProcessing(true);
    
    // Simulating OCR processing (in real app, use Tesseract.js or backend OCR service)
    setTimeout(() => {
      const sampleText = `Introduction to Quantum Physics

Quantum mechanics is a fundamental theory in physics that describes the physical properties of nature at the scale of atoms and subatomic particles.

Key Concepts:
1. Wave-Particle Duality
   - Light and matter exhibit both wave and particle properties
   - Demonstrated by the double-slit experiment

2. Heisenberg Uncertainty Principle
   - Cannot simultaneously know exact position and momentum
   - Δx · Δp ≥ ℏ/2

3. Quantum Superposition
   - Particles exist in multiple states simultaneously
   - Collapse upon measurement

Important Equations:
- E = hf (Planck's equation)
- ψ(x,t) - Wave function
- [H]ψ = iℏ(∂ψ/∂t) - Schrödinger equation

Applications:
• Quantum computing
• Cryptography
• Medical imaging (MRI)
• Semiconductor technology`;

      setExtractedText(sampleText);
      setHistory([
        {
          id: Date.now(),
          image,
          text: sampleText,
          timestamp: new Date().toLocaleString(),
        },
        ...history,
      ]);
      setIsProcessing(false);
    }, 2500);
  };

  const downloadText = () => {
    const blob = new Blob([extractedText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `extracted-notes-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(extractedText);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
              Handwriting to Digital
            </h1>
            <p className="text-muted-foreground text-lg">
              Convert handwritten notes to digital text with AI recognition
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Upload Section */}
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Upload Image</h2>
              
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all hover:border-primary ${
                  image ? "border-primary bg-primary/5" : "border-muted-foreground/25"
                }`}
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
                
                {image ? (
                  <div className="space-y-4">
                    <img
                      src={image}
                      alt="Uploaded"
                      className="max-h-96 mx-auto rounded-lg shadow-lg"
                    />
                    <Button
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        setImage(null);
                        setExtractedText("");
                      }}
                    >
                      <X className="h-4 w-4 mr-2" />
                      Remove Image
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <FileImage className="h-16 w-16 mx-auto text-muted-foreground" />
                    <div>
                      <p className="text-lg font-semibold mb-2">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-sm text-muted-foreground">
                        PNG, JPG or HEIC (Max 10MB)
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {image && !extractedText && (
                <Button
                  className="w-full mt-6 bg-gradient-to-r from-violet-500 to-purple-500"
                  size="lg"
                  onClick={processImage}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Upload className="h-5 w-5 mr-2" />
                      Extract Text
                    </>
                  )}
                </Button>
              )}

              {/* Tips */}
              <div className="mt-6 bg-muted p-4 rounded-lg text-sm">
                <p className="font-semibold mb-2">Tips for Best Results:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Use good lighting and avoid shadows</li>
                  <li>Keep the camera steady and focused</li>
                  <li>Ensure text is clearly visible</li>
                  <li>Avoid glare on the paper</li>
                  <li>Capture entire page in frame</li>
                </ul>
              </div>
            </Card>

            {/* Extracted Text Section */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">Extracted Text</h2>
                {extractedText && (
                  <Badge className="bg-green-500">
                    <Check className="h-3 w-3 mr-1" />
                    Extracted
                  </Badge>
                )}
              </div>

              {extractedText ? (
                <div className="space-y-4">
                  <Textarea
                    value={extractedText}
                    onChange={(e) => setExtractedText(e.target.value)}
                    className="min-h-[400px] font-mono text-sm"
                    placeholder="Extracted text will appear here..."
                  />

                  <div className="flex gap-3">
                    <Button onClick={copyToClipboard} variant="outline" className="flex-1">
                      <Check className="h-4 w-4 mr-2" />
                      Copy to Clipboard
                    </Button>
                    <Button
                      onClick={downloadText}
                      className="flex-1 bg-gradient-to-r from-violet-500 to-purple-500"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>

                  {/* Format Options */}
                  <Card className="p-4 bg-muted">
                    <p className="font-semibold mb-2 text-sm">Export Options:</p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        PDF
                      </Button>
                      <Button size="sm" variant="outline">
                        Word
                      </Button>
                      <Button size="sm" variant="outline">
                        Markdown
                      </Button>
                      <Button size="sm" variant="outline">
                        Plain Text
                      </Button>
                    </div>
                  </Card>
                </div>
              ) : (
                <div className="text-center text-muted-foreground py-20">
                  <FileImage className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">No text extracted yet</p>
                  <p className="text-sm">Upload an image and click "Extract Text"</p>
                </div>
              )}
            </Card>
          </div>

          {/* History Section */}
          {history.length > 0 && (
            <Card className="p-6 mt-6">
              <h2 className="text-2xl font-semibold mb-4">Recent Conversions</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {history.slice(0, 6).map((item) => (
                  <Card key={item.id} className="p-3 cursor-pointer hover:shadow-md transition-all">
                    <img
                      src={item.image}
                      alt="History"
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                    <p className="text-xs text-muted-foreground">{item.timestamp}</p>
                    <p className="text-sm mt-1 line-clamp-2">{item.text}</p>
                  </Card>
                ))}
              </div>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default HandwritingToDigital;
