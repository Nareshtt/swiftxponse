"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const MatchLog = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleProceed = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/tree"); // Navigate after delay
    }, 5000);
  };

  // Simulated match log data (Tree Ensemble style)
  const matchLog = [
    {
      point: 1,
      serve: "Short",
      servePlacement: "Wide",
      receive: "Push",
      receivePlacement: "Middle",
      pointWon: "Yes",
    },
    {
      point: 2,
      serve: "Fast",
      servePlacement: "Body",
      receive: "Flick",
      receivePlacement: "Wide",
      pointWon: "No",
    },
    {
      point: 3,
      serve: "Topspin",
      servePlacement: "Corner",
      receive: "Block",
      receivePlacement: "Body",
      pointWon: "Yes",
    },
    {
      point: 4,
      serve: "Short",
      servePlacement: "Middle",
      receive: "Chop",
      receivePlacement: "Corner",
      pointWon: "No",
    },
    {
      point: 5,
      serve: "Fast",
      servePlacement: "Wide",
      receive: "Drive",
      receivePlacement: "Wide",
      pointWon: "Yes",
    },
    {
      point: 6,
      serve: "Short",
      servePlacement: "Corner",
      receive: "Topspin",
      receivePlacement: "Body",
      pointWon: "No",
    },
    {
      point: 7,
      serve: "Topspin",
      servePlacement: "Wide",
      receive: "Chop",
      receivePlacement: "Corner",
      pointWon: "Yes",
    },
    {
      point: 8,
      serve: "Short",
      servePlacement: "Body",
      receive: "Drive",
      receivePlacement: "Middle",
      pointWon: "No",
    },
    {
      point: 9,
      serve: "Fast",
      servePlacement: "Corner",
      receive: "Block",
      receivePlacement: "Wide",
      pointWon: "Yes",
    },
    {
      point: 10,
      serve: "Short",
      servePlacement: "Wide",
      receive: "Flick",
      receivePlacement: "Middle",
      pointWon: "No",
    },
    {
      point: 11,
      serve: "Topspin",
      servePlacement: "Middle",
      receive: "Chop",
      receivePlacement: "Wide",
      pointWon: "Yes",
    },
    {
      point: 12,
      serve: "Short",
      servePlacement: "Body",
      receive: "Push",
      receivePlacement: "Corner",
      pointWon: "No",
    },
    {
      point: 13,
      serve: "Fast",
      servePlacement: "Wide",
      receive: "Drive",
      receivePlacement: "Body",
      pointWon: "Yes",
    },
    {
      point: 14,
      serve: "Short",
      servePlacement: "Corner",
      receive: "Topspin",
      receivePlacement: "Middle",
      pointWon: "No",
    },
    {
      point: 15,
      serve: "Topspin",
      servePlacement: "Wide",
      receive: "Block",
      receivePlacement: "Corner",
      pointWon: "Yes",
    },
    {
      point: 16,
      serve: "Short",
      servePlacement: "Middle",
      receive: "Chop",
      receivePlacement: "Wide",
      pointWon: "No",
    },
    {
      point: 17,
      serve: "Fast",
      servePlacement: "Corner",
      receive: "Push",
      receivePlacement: "Body",
      pointWon: "Yes",
    },
    {
      point: 18,
      serve: "Short",
      servePlacement: "Body",
      receive: "Flick",
      receivePlacement: "Middle",
      pointWon: "No",
    },
    {
      point: 19,
      serve: "Topspin",
      servePlacement: "Wide",
      receive: "Drive",
      receivePlacement: "Corner",
      pointWon: "Yes",
    },
    {
      point: 20,
      serve: "Fast",
      servePlacement: "Corner",
      receive: "Chop",
      receivePlacement: "Middle",
      pointWon: "No",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-black via-[#1E1E2E] to-[#0A0F1F] text-white py-10 px-6">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-6">Match Log (Set 1)</h1>

      {/* Table */}
      <div className="w-full max-w-4xl overflow-auto border border-gray-700 rounded-lg">
        <table className="w-full border-collapse">
          {/* Table Header */}
          <thead className="bg-blue-700">
            <tr>
              <th className="p-3 text-left">#</th>
              <th className="p-3 text-left">Serve</th>
              <th className="p-3 text-left">Serve Placement</th>
              <th className="p-3 text-left">Receive</th>
              <th className="p-3 text-left">Receive Placement</th>
              <th className="p-3 text-left">Won?</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {matchLog.map((log, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="p-3">{log.point}</td>
                <td className="p-3">{log.serve}</td>
                <td className="p-3">{log.servePlacement}</td>
                <td className="p-3">{log.receive}</td>
                <td className="p-3">{log.receivePlacement}</td>
                <td
                  className={`p-3 font-bold ${
                    log.pointWon === "Yes" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {log.pointWon}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Proceed Button */}
      <button
        onClick={handleProceed}
        className="mt-6 bg-red-600 flex items-center gap-3 py-4 px-8 rounded-2xl hover:bg-red-700 transition"
      >
        {loading ? (
          <span className="animate-spin w-5 h-5 border-4 border-white border-t-transparent rounded-full"></span>
        ) : (
          <ArrowRight size={22} />
        )}
        <span className="text-lg font-bold">
          {loading ? "Processing..." : "Proceed with Tree Ensemble"}
        </span>
      </button>
    </div>
  );
};

export default MatchLog;
