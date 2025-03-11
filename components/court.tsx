import React from "react";

interface CourtDiagramProps {
  contactData: number[];
}

const CourtDiagram: React.FC<CourtDiagramProps> = ({ contactData }) => {
  const numCols = 3;
  const numRows = 6;
  const segmentWidth = 120; // Adjusted for Next.js (Total Width: 360px)
  const segmentHeight = 67; // Adjusted for Next.js (Total Height: 400px)
  const totalSegments = numCols * numRows;

  // Ensure provided data matches the grid, otherwise fill with zeroes
  const normalizedData: number[] =
    contactData?.length === totalSegments
      ? contactData
      : new Array(totalSegments).fill(0);

  return (
    <div className="relative w-[360px] h-[400px] bg-blue-500 border-2 border-white grid grid-cols-3 grid-rows-6 self-center">
      {/* Grid Segments with Data */}
      {normalizedData.map((count, index) => (
        <div
          key={index}
          className="flex items-center justify-center border border-white text-black font-medium text-xl"
          style={{ width: segmentWidth, height: segmentHeight }}
        >
          {count > 0 && <span>{count}</span>}
        </div>
      ))}

      {/* Horizontal Lines */}
      {[...Array(numRows - 1)].map((_, index) => (
        <div
          key={`h-${index}`}
          className="absolute left-0 w-full bg-white opacity-60"
          style={{ top: segmentHeight * (index + 1), height: "2px" }}
        />
      ))}

      {/* Vertical Lines */}
      {[...Array(numCols - 1)].map((_, index) => (
        <div
          key={`v-${index}`}
          className="absolute top-0 h-full bg-white opacity-60"
          style={{ left: segmentWidth * (index + 1), width: "2px" }}
        />
      ))}

      {/* Center Cross (More Visible) */}
      <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white" />
    </div>
  );
};

export default CourtDiagram;
