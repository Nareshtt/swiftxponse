"use client"; // Required for Next.js App Router

import { useRouter } from "next/navigation";
import { PlayCircle, ArrowRight } from "lucide-react";

export default function PredefinedVideo() {
  const router = useRouter();

  const handlePress = () => {
    router.push("/matchLog");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-[#1E1E2E] to-[#0A0F1F] text-white px-6">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-4">Analyzed Video</h1>

      {/* Video Player */}
      <div className="w-full flex justify-center">
        <video
          src="/output.mp4" // Ensure the file is inside the `public/` folder
          controls
          className="w-[85%] h-[350px] rounded-lg"
        />
      </div>

      {/* Proceed Button */}
      <button
        onClick={handlePress}
        className="bg-red-600 flex items-center gap-3 py-4 px-8 rounded-2xl mt-6 hover:bg-red-700 transition"
      >
        <PlayCircle size={24} />
        <span className="text-lg font-bold">Proceed</span>
        <ArrowRight size={20} />
      </button>
    </div>
  );
}
