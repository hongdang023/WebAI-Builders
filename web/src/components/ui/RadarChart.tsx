"use client";

import React from "react";

interface CompetencyData {
  name: string;
  score: number; // 1-5
}

interface RadarChartProps {
  data: CompetencyData[];
  size?: number;
  maxScore?: number;
  color?: string;
}

export function RadarChart({
  data,
  size = 300,
  maxScore = 5,
}: RadarChartProps) {
  const center = size / 2;
  const radius = (size / 2) * 0.55; // Reduced radius further to prevent label clipping on sides
  const angleStep = (Math.PI * 2) / data.length;

  // Generate grid circles
  const gridLevels = Array.from({ length: maxScore }, (_, i) => i + 1);
  
  const getCoordinates = (index: number, score: number, offset = 0) => {
    const angle = index * angleStep - Math.PI / 2;
    const distance = (score / maxScore) * radius + offset;
    return {
      x: center + distance * Math.cos(angle),
      y: center + distance * Math.sin(angle)
    };
  };

  // Generate the polygon points for the scores
  const points = data.map((d, i) => {
    const { x, y } = getCoordinates(i, d.score);
    return `${x},${y}`;
  }).join(" ");

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} className="overflow-visible">
        {/* Outer Circle Backdrop */}
        <circle 
          cx={center} 
          cy={center} 
          r={radius} 
          className="fill-soft/10 stroke-line stroke-[0.5]" 
        />

        {/* Grid lines */}
        {gridLevels.map((level) => (
          <polygon
            key={level}
            points={data.map((_, i) => {
              const { x, y } = getCoordinates(i, level);
              return `${x},${y}`;
            }).join(" ")}
            className="fill-none stroke-line stroke-[1]"
          />
        ))}

        {/* Axis lines */}
        {data.map((_, i) => {
          const { x, y } = getCoordinates(i, maxScore);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              className="stroke-line stroke-[1]"
            />
          );
        })}

        {/* Score Polygon */}
        <polygon
          points={points}
          className="fill-primary/20 stroke-primary stroke-[1.5]"
          style={{ transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)" }}
        />

        {/* Labels */}
        {data.map((d, i) => {
          const { x, y } = getCoordinates(i, maxScore, 25);
          
          let textAnchor: "start" | "middle" | "end" = "middle";
          if (x < center - 10) textAnchor = "end";
          if (x > center + 10) textAnchor = "start";

          const words = d.name.split(" ");
          // Group words into lines (max 2-3 words per line)
          const lines: string[] = [];
          if (words.length > 3) {
            lines.push(words.slice(0, Math.ceil(words.length / 2)).join(" "));
            lines.push(words.slice(Math.ceil(words.length / 2)).join(" "));
          } else {
            lines.push(d.name);
          }

          return (
            <text
              key={i}
              x={x}
              y={y}
              textAnchor={textAnchor}
              className="text-[9px] font-bold font-mono fill-foreground/70 tracking-tight"
            >
              {lines.map((line, li) => (
                <tspan 
                  key={li} 
                  x={x} 
                  dy={li === 0 ? 0 : "1.2em"}
                  dominantBaseline="middle"
                >
                  {line}
                </tspan>
              ))}
            </text>
          );
        })}

        {/* Data points */}
        {data.map((d, i) => {
          if (d.score === 0) return null;
          const { x, y } = getCoordinates(i, d.score);
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="2.5"
              className="fill-primary stroke-white stroke-1"
              style={{ transition: "all 0.5s ease" }}
            />
          );
        })}
      </svg>
    </div>
  );
}
