"use client"; // If using App Router (Next.js 13+)

import { useState } from "react";
import { useRouter } from "next/navigation"; // For navigation in App Router
import { Upload, FileVideo, X, Check } from "lucide-react";

export default function VideoUploader() {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoURL, setVideoURL] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const pickVideo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setVideoFile(file);
      setVideoURL(URL.createObjectURL(file)); // Generate preview URL
    }
  };

  const handleStep = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/videoPredefined"); // Navigate after delay
    }, 5000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-[#1E1E2E] to-[#0A0F1F] text-white px-6">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-6">Upload Video for Analysis</h1>

      {/* Video Upload Box */}
      <div className="w-[90%] max-w-lg bg-gradient-to-b from-[#1E293B] to-[#0F172A] p-6 rounded-2xl shadow-md shadow-blue-500 flex flex-col items-center">
        {!videoURL ? (
          <label className="bg-blue-700 flex items-center gap-3 py-3 px-6 rounded-lg cursor-pointer hover:bg-blue-800 transition">
            <Upload size={22} />
            <span className="text-lg font-bold">
              Drag & Drop or Choose a Video
            </span>
            <input
              type="file"
              accept="video/*"
              onChange={pickVideo}
              className="hidden"
            />
          </label>
        ) : (
          <div className="flex flex-col items-center">
            <video
              src={videoURL}
              controls
              className="w-[85%] h-[250px] rounded-lg"
            />
            <label className="bg-blue-700 flex items-center gap-3 py-3 px-6 rounded-lg mt-4 cursor-pointer hover:bg-blue-800 transition">
              <FileVideo size={22} />
              <span className="text-lg font-bold">Select Another Video</span>
              <input
                type="file"
                accept="video/*"
                onChange={pickVideo}
                className="hidden"
              />
            </label>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-6">
        <button className="bg-gray-700 flex items-center gap-3 px-6 py-3 rounded-lg hover:bg-gray-600 transition">
          <X size={22} />
          <span className="text-lg font-bold">Cancel</span>
        </button>
        <button className="bg-blue-600 flex items-center gap-3 px-6 py-3 rounded-lg hover:bg-blue-500 transition">
          <Check size={22} />
          <span className="text-lg font-bold">Submit</span>
        </button>
      </div>

      {/* Next Step Button */}
      <button
        onClick={handleStep}
        className="bg-red-600 flex items-center justify-center py-4 px-8 rounded-full mt-6 hover:bg-red-700 transition"
      >
        {loading ? (
          <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-6 h-6"></span>
        ) : (
          <span className="text-lg font-bold">Next Step</span>
        )}
      </button>
    </div>
  );
}
