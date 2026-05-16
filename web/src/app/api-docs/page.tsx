"use client";

import React from 'react';
import Link from 'next/link';

export default function ApiDocs() {
  const apiUrl = typeof window !== 'undefined' ? `${window.location.origin}/api/profile.json` : '/api/profile.json';

  return (
    <div className="min-h-screen bg-background text-foreground p-8 md:p-24 font-sans selection:bg-primary selection:text-white">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <div className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4">Developer Hub</div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-foreground tracking-tight">
            Public Profile API
          </h1>
          <p className="text-xl text-foreground/60 leading-relaxed max-w-2xl font-medium">
            Hệ thống cung cấp thông tin định danh chính thức của Hồng Đặng. Được thiết kế để tích hợp nhanh chóng cho các thành viên trong team và đối tác.
          </p>
        </header>

        <section className="mb-16 space-y-12">
          {/* Endpoint Card */}
          <div className="bg-soft/50 border border-line rounded-[24px] p-8 md:p-10 backdrop-blur-sm shadow-sm">
            <h2 className="text-2xl font-extrabold mb-6 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-primary rounded-full"></span>
              Endpoint
            </h2>
            <div className="flex flex-col md:flex-row gap-4 items-center bg-white p-5 rounded-2xl border border-line font-mono text-sm shadow-inner">
              <span className="bg-primary/10 text-primary px-3 py-1.5 rounded-lg font-bold text-[10px] uppercase tracking-wider">GET</span>
              <code className="flex-1 text-foreground/80 overflow-x-auto whitespace-nowrap scrollbar-hide font-semibold">
                {apiUrl}
              </code>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(apiUrl);
                  alert('Copied to clipboard!');
                }}
                className="btn-primary px-6 py-2.5 text-[11px] uppercase tracking-widest whitespace-nowrap"
              >
                Copy Link
              </button>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-line rounded-[24px] p-8 shadow-sm">
              <h3 className="text-[11px] font-bold mb-4 uppercase tracking-[0.2em] text-primary">Access Mode</h3>
              <p className="text-foreground/70 font-medium leading-relaxed">
                Public Access. Không yêu cầu API Key. CORS được cấu hình mở (<code className="bg-soft px-1 rounded">*</code>) để hỗ trợ tích hợp client-side.
              </p>
            </div>
            <div className="bg-white border border-line rounded-[24px] p-8 shadow-sm">
              <h3 className="text-[11px] font-bold mb-4 uppercase tracking-[0.2em] text-primary">Response Format</h3>
              <p className="text-foreground/70 font-medium leading-relaxed">
                JSON Standard. Dữ liệu được phục vụ trực tiếp từ <code className="bg-soft px-1 rounded">profile.json</code> với hiệu suất tối ưu.
              </p>
            </div>
          </div>

          {/* Code Preview */}
          <div className="bg-[#1D1D1F] rounded-[32px] overflow-hidden shadow-2xl">
            <div className="bg-white/5 px-8 py-5 border-b border-white/5 flex justify-between items-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">JSON Response Preview</span>
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
              </div>
            </div>
            <div className="p-8 md:p-10 overflow-x-auto bg-black/20">
              <pre className="text-sm font-mono leading-relaxed text-blue-300/90">
{`{
  "profile": {
    "name": "Hong Dang",
    "title": "The Learning Architect",
    "expertise": [
      "AI/Vibe Coding", 
      "Learning Science",
      "Product Mindset"
    ],
    "social": {
      "substack": "https://learningarchitect.substack.com",
      "facebook": "..."
    }
  }
}`}
              </pre>
            </div>
          </div>
        </section>

        <footer className="pt-12 border-t border-line flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-foreground/30 text-[10px] uppercase tracking-[0.2em] font-bold">
            &copy; 2026 THE LEARNING ARCHITECT
          </div>
          <Link href="/" className="text-primary font-bold text-[10px] uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">
            Back to Home
          </Link>
        </footer>
      </div>
    </div>
  );
}

