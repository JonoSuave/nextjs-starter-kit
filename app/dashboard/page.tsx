import { PDFUploader } from "@/components/dashboard/pdf-uploader";

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="max-w-2xl mx-auto">
        <PDFUploader />
      </div>
    </div>
  );
} 