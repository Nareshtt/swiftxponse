"use client";
import {
  Trophy,
  Target,
  RefreshCw,
  Zap,
  XCircle,
  Dumbbell,
} from "lucide-react";
import { Line, Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  LineElement,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

const MatchReport = () => {
  const player1 = "Malong";
  const player2 = "Harimoto";
  const player1Stats = [12, 8, 14, 7, 6, 5, 10];

  // Chart Configurations
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } },
  };

  // Area Chart Data (Aggression Level)
  const areaData = {
    labels: ["Set 1", "Set 2", "Set 3"],
    datasets: [
      {
        data: [70, 80, 75],
        borderColor: "#FFD700",
        backgroundColor: "rgba(255, 215, 0, 0.3)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Pie Chart Data (Serve Effectiveness)
  const pieData = {
    labels: ["Short Spin", "Long Fast", "Deceptive"],
    datasets: [
      {
        data: [45, 30, 25],
        backgroundColor: ["#FFD700", "#1E90FF", "#DC2626"],
      },
    ],
  };

  // Bar Chart Data (3rd Ball Attack Success)
  const barData = {
    labels: ["Set 1", "Set 2", "Set 3"],
    datasets: [{ data: [75, 65, 80], backgroundColor: "#FF4500" }],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6 space-y-6 items-center flex flex-col">
      {/* Title */}
      <div className="flex items-center space-x-2 mb-8">
        <Trophy size={40} className="text-yellow-400" />
        <h1 className="text-4xl font-extrabold">Match Report</h1>
      </div>

      {/* Strategy & Tactics */}
      <div className="bg-gray-900 p-6 rounded-2xl shadow-lg w-full max-w-3xl">
        <div className="flex items-center mb-4">
          <Target size={28} className="text-blue-400" />
          <h2 className="text-blue-400 text-2xl font-semibold ml-2">
            Strategy & Tactics
          </h2>
        </div>
        <p className="text-gray-300 leading-6">
          {player1} focused on aggressive topspin rallies, while {player2}{" "}
          relied on counter-attacks and placement.
        </p>
        <div className="h-52 mt-4">
          <Line data={areaData} options={chartOptions} />
        </div>
      </div>

      {/* Service Plan */}
      <div className="bg-gray-900 p-6 rounded-2xl shadow-lg w-full max-w-3xl">
        <div className="flex items-center mb-4">
          <RefreshCw size={28} className="text-blue-400" />
          <h2 className="text-blue-400 text-2xl font-semibold ml-2">
            Service Plan
          </h2>
        </div>
        <p className="text-gray-300 leading-6">
          {player1} won {player1Stats[0]} points on serve, mainly using short
          spin variations.
        </p>
        <div className="h-52 mt-4">
          <Pie data={pieData} options={chartOptions} />
        </div>
      </div>

      {/* 3rd Ball Attack Plan */}
      <div className="bg-gray-900 p-6 rounded-2xl shadow-lg w-full max-w-3xl">
        <div className="flex items-center mb-4">
          <Zap size={28} className="text-blue-400" />
          <h2 className="text-blue-400 text-2xl font-semibold ml-2">
            3rd Ball Attack Plan
          </h2>
        </div>
        <p className="text-gray-300 leading-6">
          {player1} was effective in 3rd ball attacks ({player1Stats[2]}{" "}
          winners), but consistency dropped under pressure.
        </p>
        <div className="h-52 mt-4">
          <Bar data={barData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default MatchReport;
