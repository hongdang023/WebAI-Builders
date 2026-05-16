"use client";

import React from "react";
import { RadarChart } from "@/components/ui/RadarChart";
import { COMPETENCY_DATA, CATEGORIES } from "@/data/competency";

interface PortraitReportProps {
  scores: Record<string, number>;
  expertise: {
    title: string;
    status: string;
    desc: string;
  };
  totalScore: number;
  maxPossibleScore: number;
  date: string;
}

export function PortraitReport({
  scores,
  expertise,
  totalScore,
  maxPossibleScore,
  date
}: PortraitReportProps) {
  const radarData = COMPETENCY_DATA.map(c => ({
    name: c.name,
    score: scores[c.id] || 0
  }));

  const groupedCompetencies = CATEGORIES.map(cat => ({
    name: cat,
    items: COMPETENCY_DATA.filter(c => c.category === cat)
  }));

  return (
    <div 
      id="portrait-report-template" 
      className="fixed bg-white text-foreground p-10 w-[800px]" 
      style={{ left: "-9999px", top: 0, zIndex: -100 }}
    >
      {/* Header */}
      <div className="border-b-2 border-primary pb-6 mb-8 flex justify-between items-end">
        <div>
          <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Web AI Builders</div>
          <h1 className="text-3xl font-black tracking-tighter uppercase">AI COMPETENCY <span className="text-primary">REPORT</span></h1>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-bold text-foreground/40 uppercase font-mono">Ngày đánh giá</p>
          <p className="text-sm font-bold">{date}</p>
        </div>
      </div>

      {/* Level Summary */}
      <div className="grid grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
          <div className="inline-block px-3 py-1 bg-soft rounded-full text-[10px] font-bold tracking-widest text-primary border border-primary/10">
            {expertise.status}
          </div>
          <h2 className="text-4xl font-black tracking-tighter leading-none">
            {expertise.title.split(' ')[0]} <span className="text-primary">{expertise.title.split(' ')[1]}</span>
          </h2>
          <p className="text-sm text-foreground/60 leading-relaxed">
            {expertise.desc}
          </p>
          <div className="pt-4">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black text-primary">{totalScore}</span>
              <span className="text-xl text-foreground/20 font-bold">/ {maxPossibleScore}</span>
            </div>
            <span className="text-[9px] font-bold uppercase tracking-widest text-foreground/30 font-mono">TỔNG ĐIỂM NĂNG LỰC</span>
          </div>
        </div>
        <div className="flex justify-center items-center bg-soft/10 rounded-2xl border border-line p-4">
          <RadarChart data={radarData} size={300} />
        </div>
      </div>

      {/* Detailed Scores */}
      <div className="space-y-8 mb-12">
        <h3 className="text-xs font-bold text-foreground/40 uppercase tracking-[0.2em] font-mono border-b border-line pb-2">
          CHI TIẾT TỪNG KỸ NĂNG
        </h3>
        <div className="grid grid-cols-1 gap-6">
          {groupedCompetencies.map((cat, groupIndex) => (
            <div key={cat.name} className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-primary text-[10px] font-black text-white flex items-center justify-center">
                  {groupIndex + 1}
                </div>
                <h4 className="text-[11px] font-black uppercase tracking-widest">{cat.name}</h4>
              </div>
              <div className="grid grid-cols-1 gap-3 pl-7">
                {cat.items.map((c) => (
                  <div key={c.id} className="flex items-center justify-between">
                    <span className="text-xs font-medium text-foreground/70">{c.name}</span>
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map(s => (
                          <div key={s} className={`w-1.5 h-1.5 rounded-full ${s <= (scores[c.id] || 0) ? "bg-primary" : "bg-line"}`} />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-primary w-4 text-right">{scores[c.id] || 0}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Competency Framework Description */}
      <div className="page-break-before pt-12 border-t-2 border-line">
        <h3 className="text-xl font-black tracking-tighter uppercase mb-6">KHUNG NĂNG LỰC <span className="text-primary">CHI TIẾT</span></h3>
        
        <div className="space-y-8 text-sm">
          <section className="space-y-3">
            <h4 className="font-bold text-primary">Cấu trúc Khung Năng lực (KSA Model)</h4>
            <p className="text-foreground/70 leading-relaxed">
              Khung năng lực tập trung vào 3 nhóm chính: 
              <br />1. <strong>Knowledge (Kiến thức):</strong> Những gì bạn cần biết. 
              <br />2. <strong>Skills (Kỹ năng):</strong> Những gì bạn có thể thực hiện. 
              <br />3. <strong>Attitudes (Thái độ):</strong> Tư duy và cách tiếp cận vấn đề.
            </p>
          </section>

          <section className="space-y-4">
            <h4 className="font-bold text-primary">Bảng Tra cứu Năng lực</h4>
            
            <div className="space-y-6">
              {COMPETENCY_DATA.map((item) => (
                <div key={item.id} className="border border-line rounded-xl p-4 bg-soft/10">
                  <div className="flex justify-between items-center mb-3">
                    <h5 className="font-bold text-foreground">{item.name}</h5>
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest">{item.category}</span>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {Object.entries(item.levels).map(([level, desc]) => (
                      <div key={level} className="flex gap-3 text-[10px] leading-relaxed">
                        <span className="font-bold text-primary shrink-0 w-16">Cấp {level}:</span>
                        <span className="text-foreground/60">{desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-primary text-white p-6 rounded-2xl">
            <p className="italic font-medium text-center">
              &quot;Mọi chuyên gia đều từng là một người mới bắt đầu lóng ngóng. Quan trọng là bạn biết mình đang đứng đâu và cần đi về đâu.&quot;
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
