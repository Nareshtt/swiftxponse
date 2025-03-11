"use client";

import { useState, useEffect } from "react";
import CourtDiagram from "@/components/court";
import MatchReport from "@/components/matchReport";
import { Bar } from "react-chartjs-2";

const generateRandomStat = (): number => Math.floor(Math.random() * 10) + 1;

const errorData = {
  player1: [5, 8, 3, 7, 4],
  player2: [6, 4, 9, 5, 3],
};

interface SwitchProps {
  checked: boolean;
  onChange: () => void;
}

const Switch: React.FC<SwitchProps> = ({ checked, onChange }) => {
  return (
    <div
      className={`w-12 h-6 flex items-center bg-gray-700 rounded-full p-1 cursor-pointer transition ${
        checked ? "bg-blue-500" : "bg-gray-700"
      }`}
      onClick={onChange}
    >
      <div
        className={`w-5 h-5 bg-white rounded-full shadow-md transform transition ${
          checked ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </div>
  );
};

const labels = ["Service", "Receive", "3rd Ball", "Counters", "Others"];

const contactDataMap: Record<string, number[]> = {
  Service: [5, 3, 1, 10, 7, 2, 2, 15, 6, 8, 5, 12, 1, 4, 9, 2, 2, 7],
  Receive: [2, 4, 3, 8, 10, 5, 6, 14, 9, 3, 5, 11, 4, 3, 6, 1, 2, 5],
  "3rd Ball": [1, 3, 2, 5, 9, 4, 7, 12, 8, 6, 7, 10, 2, 5, 7, 2, 3, 4],
  Counters: [3, 6, 2, 9, 11, 7, 8, 13, 9, 4, 6, 11, 2, 4, 8, 1, 2, 6],
  Others: [1, 2, 3, 4, 6, 5, 7, 8, 6, 5, 7, 9, 3, 5, 6, 2, 1, 4],
};

const stats = [
  "Total Serve Wins",
  "Serve Return Wins",
  "Wins on 3rd Ball",
  "Game Points Saved",
  "Total Serve Errors",
  "Serve Return Errors",
  "Errors on 3rd Ball",
];

const AnalysisScreen: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Service");
  const [showPlayer1, setShowPlayer1] = useState<boolean>(true);
  const [player1Stats, setPlayer1Stats] = useState<number[]>([]);
  const [player2Stats, setPlayer2Stats] = useState<number[]>([]);
  const player1 = "Malong";
  const player2 = "Harimoto";
  const setsWonPlayer1 = 2;
  const setsWonPlayer2 = 1;

  useEffect(() => {
    setPlayer1Stats(stats.map(() => generateRandomStat()));
    setPlayer2Stats(stats.map(() => generateRandomStat()));
  }, []);

  const chartData = {
    labels,
    datasets: [
      {
        label: showPlayer1 ? player1 : player2,
        data: showPlayer1 ? errorData.player1 : errorData.player2,
        backgroundColor: showPlayer1
          ? "rgba(0, 122, 255, 0.6)"
          : "rgba(255, 59, 48, 0.6)",
        borderColor: showPlayer1
          ? "rgba(0, 122, 255, 1)"
          : "rgba(255, 59, 48, 1)",
        borderWidth: 2,
        borderRadius: 5,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6 space-y-6">
      <h1 className="text-4xl font-extrabold text-center text-blue-400 drop-shadow-md">
        Match Analysis
      </h1>

      <div className="bg-gray-800 p-6 rounded-2xl shadow-2xl text-center border border-blue-500">
        <h2 className="text-xl font-bold text-red-400">
          {player1} vs {player2}
        </h2>
        <p className="text-5xl font-extrabold text-blue-300">
          {setsWonPlayer1} - {setsWonPlayer2}
        </p>
      </div>

      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-blue-400 mb-4">
          Match Statistics
        </h2>
        <div className="grid grid-cols-3 gap-4 text-center">
          {player1Stats.length > 0 &&
            stats.map((stat, index) => (
              <div key={stat} className="py-2 border-b border-gray-700 text-lg">
                <p className="text-blue-300">{player1Stats[index]}</p>
                <p className="text-sm text-gray-400">{stat}</p>
                <p className="text-red-300">{player2Stats[index]}</p>
              </div>
            ))}
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center">
        <h2 className="text-xl font-semibold text-center text-blue-400 mb-4">
          Shot Placement Diagram
        </h2>
        <CourtDiagram contactData={contactDataMap[selectedCategory]} />
      </div>

      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center">
        <h2 className="text-2xl font-bold text-center text-red-400">
          Errors on Ball Contacts
        </h2>
        <Switch
          checked={!showPlayer1}
          onChange={() => setShowPlayer1(!showPlayer1)}
        />
        <div className="relative w-full h-[300px] overflow-hidden">
          <Bar
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </div>
      </div>

      <MatchReport />
    </div>
  );
};

export default AnalysisScreen;
