import { Button } from "@/components/ui/core";
import { SYLLABUS_DATA } from "@/data/syllabus";
import { BookOpen } from "lucide-react";
import { SyllabusUnit } from "./components/SyllabusUnit";

export default function SyllabusPage() {
  return (
    <main className="flex-1 bg-background">
      {/* Hero Section */}
      <section className="pt-6 pb-4 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-1">
          <div className="inline-flex items-center space-x-2 text-primary font-mono text-[9px] font-bold tracking-[0.1em] uppercase opacity-70">
            <BookOpen className="w-3 h-3" />
            <span>Full Curriculum</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
            Syllabus <span className="text-primary">WebAI Builders</span>
          </h1>
          <p className="text-sm md:text-base text-foreground/40 font-medium max-w-xl mx-auto leading-relaxed">
            Xây dựng website cá nhân/bán hàng cho dân non-tech từ con số 0. 
            Lộ trình thực chiến giúp bạn làm chủ tư duy sản phẩm và công nghệ AI.
          </p>
        </div>
      </section>


      {/* Detailed Course Outline Section */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {SYLLABUS_DATA.map((unit, index) => (
              <SyllabusUnit 
                key={unit.id} 
                unit={unit} 
                isFirst={index === 0} 
              />
            ))}
          </div>


        </div>
      </section>
    </main>
  );
}

