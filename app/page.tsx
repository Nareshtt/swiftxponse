"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/videoPlayer");
  };

  return (
    <div className="flex min-h-screen bg-black relative">
      {/* Background Image */}
      <Image
        src="/onboarding.jpg" // Move the image to /public folder
        alt="Onboarding"
        layout="fill"
        objectFit="cover"
        className="absolute"
      />

      {/* Gradient Overlay */}
      <div className="absolute w-full h-full bg-gradient-to-b from-black/80 via-black/50 to-transparent" />

      {/* Content */}
      <div className="flex flex-col justify-end items-center px-6 pb-12 w-full text-center relative z-10">
        <h1 className="text-white font-bold text-3xl mb-6">
          Elevate Your Game. Track, Analyze & Improve.
        </h1>

        {/* Start Button */}
        <button
          onClick={handleStart}
          className="bg-red-600 rounded-full py-4 w-[90%] text-white text-lg font-bold uppercase"
        >
          Start Analysis
        </button>
      </div>
    </div>
  );
}
