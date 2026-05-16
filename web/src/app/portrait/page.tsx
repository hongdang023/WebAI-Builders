"use client";

import { useState, useMemo } from "react";
import { Button, Card } from "@/components/ui/core";
import { RadarChart } from "@/components/ui/RadarChart";
import { COMPETENCY_DATA, CATEGORIES } from "@/data/competency";
import { 
  CheckCircle2, 
  RefreshCw, 
  Layout, 
  UserCircle,
  ChevronDown,
  ChevronUp,
  Info,
  ArrowRight,
  Copy,
  Star,
  Check
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PortraitReport } from "@/components/portrait/PortraitReport";
import { generateCompetencyPDF } from "@/lib/pdf";


export default function PortraitPage() {
  const [step, setStep] = useState<"intro" | "test" | "result">("intro");
  const [scores, setScores] = useState<Record<string, number>>({});
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [expandedIds, setExpandedIds] = useState<string[]>([]);
  const [isDownloading, setIsDownloading] = useState(false);


  // Group data by category
  const groupedCompetencies = useMemo(() => {
    return CATEGORIES.map(cat => ({
      name: cat,
      items: COMPETENCY_DATA.filter(c => c.category === cat)
    }));
  }, []);

  const currentCategory = groupedCompetencies[currentCategoryIndex];
  const currentItems = currentCategory?.items || [];
  
  const totalQuestions = COMPETENCY_DATA.length;

  const startTest = () => {
    setStep("test");
    setCurrentCategoryIndex(0);
    setScores({});
    setExpandedIds([]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScore = (id: string, score: number) => {
    setScores(prev => ({ ...prev, [id]: score }));
  };

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const nextStep = () => {
    const allInCategoryScored = currentItems.every(item => !!scores[item.id]);
    
    if (allInCategoryScored) {
      if (currentCategoryIndex < CATEGORIES.length - 1) {
        setCurrentCategoryIndex(currentCategoryIndex + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setStep("result");
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const isCategoryComplete = currentItems.every(item => !!scores[item.id]);

  // Calculate results
  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
  const maxPossibleScore = totalQuestions * 5;
  
  const categoryResults = CATEGORIES.map(cat => {
    const catItems = COMPETENCY_DATA.filter(c => c.category === cat);
    const score = catItems.reduce((acc, item) => acc + (scores[item.id] || 0), 0);
    const max = catItems.length * 5;
    return { name: cat, score, max };
  });

  const LEVEL_LABELS: Record<number, string> = {
    1: "Novice (Người mới)",
    2: "Advanced Beginner (Bắt đầu)",
    3: "Competent (Có năng lực)",
    4: "Proficient (Thành thạo)",
    5: "Expert (Chuyên gia)"
  };

  const getExpertiseLevel = (score: number) => {
    const percentage = (score / maxPossibleScore) * 100;
    if (percentage < 30) return { title: "Novice Architect", status: "NGƯỜI MỚI", desc: "Bạn đang ở những bước đầu tiên. Đây là thời điểm tốt nhất để xây dựng nền tảng vững chắc." };
    if (percentage < 50) return { title: "Advanced Builder", status: "BẮT ĐẦU", desc: "Bạn đã có kiến thức cơ bản và bắt đầu biết cách vận dụng công cụ vào thực tế." };
    if (percentage < 70) return { title: "Competent Builder", status: "CÓ NĂNG LỰC", desc: "Bạn có khả năng giải quyết vấn đề và xây dựng sản phẩm hoàn chỉnh ổn định." };
    if (percentage < 90) return { title: "Proficient Architect", status: "THÀNH THẠO", desc: "Bạn có năng lực tốt và tư duy hệ thống, tối ưu hóa các quy trình đạt hiệu suất cao." };
    return { title: "WebAI Expert", status: "CHUYÊN GIA", desc: "Bạn làm chủ các công cụ và có tư duy chiến lược xuất sắc, dẫn dắt xu hướng công nghệ." };
  };

  const expertise = getExpertiseLevel(totalScore);

  const radarData = COMPETENCY_DATA.map(c => ({
    name: c.name,
    score: scores[c.id] || 0
  }));

  const handleDownloadPDF = async () => {
    try {
      setIsDownloading(true);
      const timestamp = new Date().getTime();
      await generateCompetencyPDF("portrait-report-template", `Ket-qua-AI-Competency-${timestamp}.pdf`);
    } catch (error: any) {
      console.error("PDF Export failed:", error);
      alert(`Có lỗi xảy ra: ${error.message}\n\nVui lòng thử lại hoặc liên hệ hỗ trợ nếu vấn đề tiếp diễn.`);
    } finally {
      setIsDownloading(false);
    }
  };


  return (
    <main className="flex-1 bg-background pb-32 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatePresence mode="wait">
          {step === "intro" && (
            <motion.section 
              key="intro"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="pt-16 space-y-8 text-center"
            >
              <div className="space-y-3">
                <div className="inline-flex items-center space-x-2 text-primary font-mono text-[9px] font-bold tracking-[0.1em] uppercase opacity-70">
                  <UserCircle className="w-3 h-3" />
                  <span>Dreyfus Assessment</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter uppercase">STUDENT <span className="text-primary">PORTRAIT</span></h1>
                <p className="text-sm md:text-base text-foreground/40 font-medium max-w-xl mx-auto leading-relaxed">
                  Xác định &quot;Điểm A&quot; của bạn trong hành trình trở thành Web AI Builder. 
                  Bài test giúp bạn nhận diện lỗ hổng và tối ưu lộ trình học tập.
                </p>
              </div>
2
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                {[
                  { title: "Đánh giá Năng lực", desc: "11 chỉ số KSA quan trọng trong kỷ nguyên AI.", icon: "1" },
                  { title: "Nhận diện Lỗ hổng", desc: "Biết rõ mình đang ở đâu trên bản đồ kỹ năng.", icon: "2" },
                  { title: "Lộ trình Riêng biệt", desc: "Tập trung 80% nỗ lực vào những gì còn thiếu.", icon: "3" }
                ].map((item, i) => (
                  <Card key={i} className="p-4 border-line bg-soft/20 space-y-3">
                    <div className="w-7 h-7 rounded-full bg-white border border-line flex items-center justify-center font-bold text-primary text-[11px]">
                      {item.icon}
                    </div>
                    <div className="space-y-0.5">
                      <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                      <p className="text-[11px] text-foreground/50 leading-snug">{item.desc}</p>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="pt-4">
                <Button onClick={startTest} className="px-10 py-5 text-base font-bold rounded-xl shadow-lg shadow-primary/5 transition-all hover:scale-[1.02] active:scale-95">
                  Bắt đầu đánh giá ngay
                </Button>
                <p className="mt-3 text-[9px] font-bold text-foreground/20 uppercase tracking-widest font-mono">Thời gian hoàn thành: ~3 phút</p>
              </div>
            </motion.section>
          )}

          {step === "test" && (
            <motion.section 
              key="test"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pt-4 space-y-4"
            >
              {/* Segmented Progress Bar */}
              <div className="flex gap-1.5">
                {CATEGORIES.map((cat, i) => (
                  <div key={cat} className="flex-1 space-y-1.5">
                    <div className={`h-1 rounded-full transition-all duration-500 ${
                      i < currentCategoryIndex ? "bg-primary" : 
                      i === currentCategoryIndex ? "bg-primary/30" : "bg-line"
                    }`}>
                      {i === currentCategoryIndex && (
                        <motion.div 
                          className="h-full bg-primary"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.5 }}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Category Header Card */}
              <Card className="p-4 border-line bg-soft/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Star className="w-16 h-16 text-primary" />
                </div>
                <div className="space-y-1 relative z-10">
                  <div className="text-[9px] font-bold text-primary uppercase tracking-[0.15em] font-mono opacity-60">
                    NHÓM {currentCategoryIndex + 1}
                  </div>
                  <h2 className="text-xl font-extrabold text-foreground tracking-tight uppercase">{currentCategory.name}</h2>
                  <p className="text-xs text-foreground/50 font-medium max-w-xl leading-relaxed">
                    {currentCategoryIndex === 0 
                      ? "Những gì bạn cần hiểu rõ về khách hàng, sản phẩm và công nghệ để đặt nền móng vững chắc." 
                      : currentCategoryIndex === 1 
                      ? "Khả năng thực thi, xử lý vấn đề và vận hành các công cụ AI trong thực tế." 
                      : "Tư duy và phong cách làm việc quyết định sự bền bỉ trong hành trình Builder."}
                  </p>
                </div>
                <div className="mt-2 flex items-center justify-between text-[10px] font-bold font-mono">
                  <span className="text-primary/30 uppercase tracking-wider">Tiến độ nhóm:</span>
                  <span className="text-primary">
                    {currentItems.filter(item => !!scores[item.id]).length}/{currentItems.length}
                  </span>
                </div>
              </Card>

              {/* Level Legend */}
              <div className="flex items-center justify-between px-2 py-1 bg-soft/30 rounded-lg border border-line/50 overflow-x-auto no-scrollbar">
                {[1, 2, 3, 4, 5].map((s) => (
                  <div key={s} className="flex items-center gap-1 shrink-0 px-2 first:pl-0 last:pr-0">
                    <span className="text-[10px] font-bold text-primary font-mono">{s}</span>
                    <span className="text-[9px] font-bold text-foreground/30 uppercase tracking-tighter whitespace-nowrap">
                      {LEVEL_LABELS[s as 1|2|3|4|5].split(" (")[0]}
                    </span>
                  </div>
                ))}
              </div>

              {/* Questions List */}
              <div className="space-y-4">
                {currentItems.map((item, idx) => (
                  <div key={item.id} className="space-y-2 scroll-mt-24">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="px-2 py-0.5 bg-primary/10 text-primary text-[9px] font-bold rounded border border-primary/20 font-mono">
                          KỸ NĂNG {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                        </div>
                        <h3 className="text-sm font-bold flex items-center gap-1.5 tracking-tight">
                          {item.name}
                          <Info className="w-3.5 h-3.5 text-foreground/20 cursor-help" />
                        </h3>
                      </div>
                      {scores[item.id] && (
                        <div className="w-6 h-6 rounded-full bg-green-50 text-green-600 flex items-center justify-center border border-green-100 animate-in zoom-in duration-300">
                          <Check className="w-3 h-3" />
                        </div>
                      )}
                    </div>

                    {/* Score Selector (1-5 Buttons) */}
                    <div className="grid grid-cols-5 gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <button
                          key={s}
                          onClick={() => handleScore(item.id, s)}
                          className={`py-1.5 rounded-lg border font-bold text-base transition-all ${
                            scores[item.id] === s
                              ? "border-primary bg-primary text-white shadow-md shadow-primary/10 scale-[1.01]"
                              : "border-line bg-white text-foreground/20 hover:border-primary/30 hover:text-primary/30"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>

                    {/* Description Toggle & Content */}
                    <div className="border border-line/50 rounded-lg overflow-hidden bg-white/50">
                      <button 
                        onClick={() => toggleExpand(item.id)}
                        className="w-full px-4 py-1 flex items-center justify-between hover:bg-soft/20 transition-colors"
                      >
                        <span className="text-[10px] font-bold text-primary/40 uppercase tracking-wider">
                          {expandedIds.includes(item.id) ? "THU GỌN MÔ TẢ" : "XEM MÔ TẢ TỪNG MỨC"}
                        </span>
                        {expandedIds.includes(item.id) ? <ChevronUp className="w-3.5 h-3.5 text-primary/30" /> : <ChevronDown className="w-3.5 h-3.5 text-primary/30" />}
                      </button>
                      
                      <AnimatePresence>
                        {expandedIds.includes(item.id) && (
                          <motion.div 
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            className="overflow-hidden border-t border-line/50"
                          >
                            <div className="grid grid-cols-1 md:grid-cols-5 gap-0 divide-y md:divide-y-0 md:divide-x divide-line/50">
                              {[1, 2, 3, 4, 5].map((s) => (
                                <div 
                                  key={s} 
                                  className={`p-2 space-y-1.5 transition-colors cursor-pointer ${scores[item.id] === s ? "bg-primary/5" : "hover:bg-soft/10"}`}
                                  onClick={() => handleScore(item.id, s)}
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-bold text-foreground/30 font-mono italic">{LEVEL_LABELS[s as 1|2|3|4|5]}</span>
                                    {scores[item.id] === s && <CheckCircle2 className="w-3 h-3 text-primary" />}
                                  </div>
                                  <p className={`text-[10px] leading-snug font-medium ${scores[item.id] === s ? "text-primary" : "text-foreground/40"}`}>
                                    {item.levels[s as 1|2|3|4|5]}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sticky Footer */}
              <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-line p-3 z-50">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                  <div className="hidden md:block">
                    <p className="text-[10px] font-bold text-foreground/30 uppercase tracking-[0.1em] font-mono flex items-center gap-1.5">
                      {isCategoryComplete ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                          <span className="text-green-600/70">Đã chấm điểm tất cả kỹ năng trong nhóm này.</span>
                        </>
                      ) : (
                        "Vui lòng chấm điểm tất cả kỹ năng để tiếp tục."
                      )}
                    </p>
                  </div>
                  <Button 
                    disabled={!isCategoryComplete}
                    onClick={nextStep}
                    className="w-full md:w-auto px-10 py-3.5 text-sm font-bold flex items-center gap-2 group rounded-xl"
                  >
                    {currentCategoryIndex === CATEGORIES.length - 1 ? "Xem kết quả toàn diện" : `Tiếp tục sang Nhóm ${currentCategoryIndex + 2}`}
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.section>
          )}

          {step === "result" && (
            <motion.section 
              key="result"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="pt-8 space-y-8"
            >
              <div className="flex items-center justify-between border-b border-line pb-4">
                <div className="space-y-0.5">
                  <h2 className="text-xl font-bold flex items-center gap-2 tracking-tight">
                    Kết quả của <span className="text-primary italic">BẠN</span>
                  </h2>
                  <p className="text-[9px] font-bold text-foreground/20 uppercase tracking-widest font-mono">
                    {new Date().toLocaleDateString('vi-VN', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 border border-line rounded-lg hover:bg-soft transition-colors text-foreground/30 hover:text-primary"><Copy className="w-4 h-4" /></button>
                </div>
              </div>

              {/* Visual Results Layout */}
              <div className="flex flex-col lg:flex-row items-stretch gap-6">
                {/* Left: Expertise Summary Card */}
                <div className="flex-1">
                  <Card className="h-full p-8 md:p-10 border-line bg-white relative overflow-hidden flex flex-col justify-between shadow-sm">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
                    
                    <div className="relative z-10 space-y-6">
                      <div className="inline-flex px-3 py-1 bg-soft rounded-full text-[10px] font-bold tracking-widest text-primary border border-primary/10">
                        {expertise.status}
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground uppercase leading-[0.9]">
                          {expertise.title.split(' ')[0]} <br />
                          <span className="text-primary">{expertise.title.split(' ')[1]}</span>
                        </h3>
                        <p className="text-foreground/60 text-sm leading-relaxed max-w-sm font-medium">
                          {expertise.desc}
                        </p>
                      </div>
                    </div>

                    <div className="relative z-10 mt-8 pt-8 border-t border-line/50">
                      <div className="flex items-baseline gap-2">
                        <span className="text-6xl font-black tracking-tighter text-primary">{totalScore}</span>
                        <span className="text-2xl text-foreground/20 font-bold">/ {maxPossibleScore}</span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/30 font-mono">TỔNG ĐIỂM NĂNG LỰC</span>
                    </div>
                  </Card>
                </div>

                {/* Right: Radar Chart Card */}
                <div className="lg:w-[420px] shrink-0">
                  <Card className="h-full p-8 border-line bg-white flex flex-col items-center justify-center shadow-sm relative overflow-hidden">
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[9px] font-bold text-foreground/20 uppercase tracking-[0.25em] font-mono whitespace-nowrap">
                      BIỂU ĐỒ NĂNG LỰC
                    </div>
                    <RadarChart data={radarData} size={380} />
                  </Card>
                </div>
              </div>

              {/* Group Scores Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {categoryResults.map((cat, i) => (
                  <Card key={cat.name} className="p-4 border-line bg-soft/10 space-y-3">
                    <div className="text-[9px] font-bold text-foreground/40 uppercase tracking-widest font-mono">{cat.name}</div>
                    <div className="flex items-baseline justify-between">
                      <div className="text-2xl font-black text-primary tracking-tighter">
                        {cat.score} <span className="text-xs text-foreground/20 font-bold tracking-normal">/ {cat.max}</span>
                      </div>
                    </div>
                    <div className="h-1.5 w-full bg-line rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${(cat.score / cat.max) * 100}%` }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                        className="h-full bg-primary" 
                      />
                    </div>
                  </Card>
                ))}
              </div>

              {/* Detailed Skills List */}
              <div className="space-y-12">
                <div className="flex justify-between items-center border-b border-line pb-2.5">
                  <h3 className="text-[9px] font-bold text-foreground/40 uppercase tracking-[0.2em] font-mono">
                    CHI TIẾT TỪNG KỸ NĂNG
                  </h3>
                  <span className="text-[9px] font-bold text-foreground/20 uppercase tracking-widest font-mono">THANG ĐIỂM 5</span>
                </div>
                
                <div className="grid grid-cols-1 gap-10">
                  {groupedCompetencies.map((cat, groupIndex) => (
                    <div key={cat.name} className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-lg bg-soft border border-line flex items-center justify-center text-[10px] font-black text-primary">
                          {groupIndex + 1}
                        </div>
                        <h4 className="text-[11px] font-black uppercase tracking-[0.15em] text-foreground/40">
                          {cat.name}
                        </h4>
                      </div>
                      
                      <div className="space-y-4">
                        {cat.items.map((c, i) => (
                          <div key={c.id} className="flex items-center gap-4 group">
                            <span className="text-[9px] font-bold text-foreground/20 font-mono w-4 shrink-0">
                              {i + 1 < 10 ? `0${i + 1}` : i + 1}
                            </span>
                            <div className="flex-1 space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-[11px] font-semibold text-foreground/70 group-hover:text-primary transition-colors tracking-tight">{c.name}</span>
                                <div className="flex items-center gap-1.5">
                                  <div className="flex gap-0.5">
                                    {[1, 2, 3, 4, 5].map(s => (
                                      <div key={s} className={`w-1.5 h-1.5 rounded-full ${s <= scores[c.id] ? "bg-primary" : "bg-line"}`} />
                                    ))}
                                  </div>
                                  <span className="text-[11px] font-bold text-primary ml-1.5">{scores[c.id]}</span>
                                </div>
                              </div>
                              <div className="h-1 w-full bg-soft rounded-full overflow-hidden">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  animate={{ width: `${(scores[c.id] / 5) * 100}%` }}
                                  transition={{ duration: 1, delay: i * 0.05 }}
                                  className={`h-full ${scores[c.id] <= 2 ? "bg-primary/50" : "bg-primary"}`} 
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Priorities & Suggestions */}
              <Card className="p-6 border-line bg-soft/20 space-y-6 border-dashed">
                <h3 className="text-xs font-bold text-foreground uppercase tracking-widest flex items-center gap-2">
                  <Star className="w-3.5 h-3.5 text-primary fill-primary" />
                  ƯU TIÊN TẬP TRUNG
                </h3>
                <div className="space-y-4">
                  {[
                    "Nhìn vào nhóm có điểm thấp nhất — dành 80% effort vào đó trong 4 tuần tới để cân bằng radar.",
                    "Ghi âm và phân tích lại các buổi học, so sánh cách bạn dùng Prompt với logic của chuyên gia.",
                    "Đặt mục tiêu cụ thể: Xây dựng ít nhất 1 MVP hoàn chỉnh trong khóa học này để tối ưu điểm 'Hiện thực hóa'."
                  ].map((tip, i) => (
                    <div key={i} className="flex items-start gap-3 group">
                      <div className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0 group-hover:scale-150 transition-transform" />
                      <p className="text-sm font-medium text-foreground/60 leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Call to Action */}
              <div className="space-y-4 pt-8 pb-16 text-center">
                <Link href="/syllabus" className="block">
                  <Button className="w-full py-4 text-base font-bold rounded-xl flex items-center justify-center gap-3 shadow-lg shadow-primary/5 transition-all hover:scale-[1.005] active:scale-[0.99]">
                    XEM LỘ TRÌNH HÀNH ĐỘNG
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="secondary" onClick={startTest} className="py-3.5 flex items-center justify-center gap-2 border-line bg-white rounded-xl text-sm">
                    <RefreshCw className="w-4 h-4 text-primary" />
                    Đánh giá lại
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={handleDownloadPDF}
                    disabled={isDownloading}
                    className="py-3.5 flex items-center justify-center gap-2 border-line bg-transparent rounded-xl text-sm"
                  >
                    <Layout className="w-4 h-4" />
                    {isDownloading ? "Đang xử lý..." : "Tải kết quả PDF"}
                  </Button>
                </div>
              </div>

              {/* Hidden Report Template for PDF Generation */}
              <PortraitReport 
                scores={scores}
                expertise={expertise}
                totalScore={totalScore}
                maxPossibleScore={maxPossibleScore}
                date={new Date().toLocaleDateString('vi-VN', { day: 'numeric', month: 'long', year: 'numeric' })}
              />
            </motion.section>

          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
