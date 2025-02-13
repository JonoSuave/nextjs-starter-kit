"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export function PDFUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [extractedText, setExtractedText] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile?.type === "application/pdf") {
      setFile(selectedFile);
      setExtractedText(null);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    try {
      setIsProcessing(true);
      // TODO: Implement PDF processing logic
      // For now, just simulate processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      setExtractedText("Sample extracted text");
    } catch (error) {
      console.error("Error processing PDF:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-4 p-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="pdf-upload" className="text-sm font-medium">
          Upload PDF
        </label>
        <input
          id="pdf-upload"
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
        />
      </div>

      {file && (
        <Button
          onClick={handleUpload}
          disabled={isProcessing}
          className="w-full"
        >
          {isProcessing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing PDF...
            </>
          ) : (
            "Upload PDF"
          )}
        </Button>
      )}

      {extractedText && (
        <div className="mt-4 p-4 rounded-lg bg-muted">
          <pre className="whitespace-pre-wrap">{extractedText}</pre>
        </div>
      )}

      {!file && !extractedText && (
        <div className="text-center text-muted-foreground">
          No PDF uploaded
        </div>
      )}
    </div>
  );
} 