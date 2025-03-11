"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

const TreeEnsembleVisualization = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [treesVisible, setTreesVisible] = useState(0);

  useEffect(() => {
    let treeInterval: NodeJS.Timeout | undefined;

    if (treesVisible < 20) {
      treeInterval = setInterval(() => {
        setTreesVisible((prev: number) => (prev < 20 ? prev + 1 : prev));
      }, 300);
    }

    return () => {
      if (treeInterval) clearInterval(treeInterval);
    };
  }, [treesVisible]);

  const handleProceed = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/data");
    }, 5000);
  };

  const renderDecisionTree = () => (
    <svg width="150" height="100" viewBox="0 0 150 100">
      <circle cx="75" cy="20" r="8" fill="#F59E0B" />
      <text x="75" y="15" textAnchor="middle" fontSize="10" fill="white">
        Root
      </text>
      <line x1="75" y1="28" x2="45" y2="50" stroke="white" strokeWidth="2" />
      <line x1="75" y1="28" x2="105" y2="50" stroke="white" strokeWidth="2" />
      <circle cx="45" cy="50" r="6" fill="#3B82F6" />
      <text x="45" y="47" textAnchor="middle" fontSize="8" fill="white">
        L
      </text>
      <circle cx="105" cy="50" r="6" fill="#3B82F6" />
      <text x="105" y="47" textAnchor="middle" fontSize="8" fill="white">
        R
      </text>
      <line x1="45" y1="56" x2="30" y2="80" stroke="white" strokeWidth="2" />
      <line x1="45" y1="56" x2="60" y2="80" stroke="white" strokeWidth="2" />
      <line x1="105" y1="56" x2="90" y2="80" stroke="white" strokeWidth="2" />
      <line x1="105" y1="56" x2="120" y2="80" stroke="white" strokeWidth="2" />
      <circle cx="30" cy="80" r="5" fill="#22C55E" />
      <circle cx="60" cy="80" r="5" fill="#EF4444" />
      <circle cx="90" cy="80" r="5" fill="#22C55E" />
      <circle cx="120" cy="80" r="5" fill="#EF4444" />
    </svg>
  );

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-black via-[#1E1E2E] to-[#0A0F1F] min-h-screen p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">Tree Ensemble Visualization</h1>
      <p className="text-gray-300 text-lg text-center mb-6">
        Stacking 20 Decision Trees for Classification
      </p>
      <div className="grid grid-cols-5 gap-4 w-full max-w-3xl">
        {Array.from({ length: treesVisible }).map((_, index) => (
          <div key={index} className="flex justify-center">
            {renderDecisionTree()}
          </div>
        ))}
      </div>
      <button
        onClick={handleProceed}
        className="mt-8 bg-red-600 flex items-center justify-center px-6 py-3 rounded-xl hover:bg-red-700 transition"
      >
        {loading ? (
          <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
        ) : (
          <ArrowRight size={22} color="white" />
        )}
        <span className="ml-2 font-bold text-lg">
          {loading ? "Processing..." : "Proceed to Data"}
        </span>
      </button>
    </div>
  );
};

export default TreeEnsembleVisualization;
