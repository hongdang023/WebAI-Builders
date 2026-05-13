"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown, Play } from "lucide-react";
import { Unit } from "@/data/syllabus";

interface SyllabusUnitProps {
  unit: Unit;
  isFirst?: boolean;
}

export function SyllabusUnit({ unit, isFirst = false }: SyllabusUnitProps) {
  const [isOpen, setIsOpen] = useState(isFirst);

  return (
    <div className="bg-white border border-line rounded-2xl p-3 md:p-4 shadow-sm overflow-hidden transition-all duration-500">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-3">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <div className="bg-soft px-3 py-1 rounded-full">
              <span className="text-[10px] font-bold font-mono text-foreground/40 uppercase tracking-wider">
                UNIT {unit.id}
              </span>
            </div>
            <div className="bg-primary/5 border border-primary/10 px-3 py-1 rounded-full">
              <span className="text-[10px] font-bold font-mono text-primary/40 uppercase tracking-wider">
                FRAMEWORK: {unit.keyConcepts}
              </span>
            </div>
          </div>
          
          <div className="space-y-1">
            <h2 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
              {unit.title}
            </h2>
            <div className="flex flex-col gap-0.5">
              <span className="text-[9px] font-bold uppercase text-foreground/20 tracking-widest">Learning Outcome</span>
              <p className="text-[13px] text-foreground/50 font-medium leading-relaxed max-w-2xl">
                {unit.outcome}
              </p>
            </div>
          </div>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 rounded-full bg-soft flex items-center justify-center text-foreground/40 hover:bg-line transition-colors self-end md:self-start shrink-0"
        >
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="space-y-2 pt-3 border-t border-line/50">
              {unit.lessons.map((lesson) => (
                <div 
                  key={lesson.id}
                  className="bg-soft/40 border border-line/30 rounded-xl p-3 flex items-start gap-4 hover:bg-soft transition-colors group"
                >
                  <div className="text-[10px] font-bold font-mono text-foreground/20 pt-1">
                    {lesson.id}
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-[15px] font-bold text-foreground group-hover:text-primary transition-colors tracking-tight">
                      {lesson.title}
                    </h4>
                    <p className="text-[13px] text-foreground/40 leading-relaxed font-medium">
                      {lesson.description}
                    </p>
                  </div>
                </div>
              ))}

              <div className="mt-6 pt-2">
               <div className="bg-soft/20 border border-dashed border-line px-4 py-3 rounded-xl w-full">
                   <span className="text-[9px] font-bold uppercase text-foreground/20 tracking-widest block mb-1">Performance Task</span>
                   <p className="text-[13px] text-foreground/60 leading-relaxed italic font-medium">
                     &quot;{unit.performanceTask}&quot;
                   </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
