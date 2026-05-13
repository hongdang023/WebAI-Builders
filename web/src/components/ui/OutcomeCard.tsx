import { Card } from "./core";
import { MoveRight } from "lucide-react";

interface OutcomeCardProps {
  studentName: string;
  projectTitle: string;
  beforeLabel?: string;
  afterLabel: string;
  beforeImg?: string;
  afterImg?: string;
}

export function OutcomeCard({
  studentName,
  projectTitle,
  afterLabel,
  beforeImg,
  afterImg,
}: OutcomeCardProps) {
  return (
    <Card className="overflow-hidden p-0 group">
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-primary font-bold">
            STUDENT SHOWCASE
          </span>
          <span className="text-xs font-medium opacity-40">{studentName}</span>
        </div>
        <h3 className="text-xl font-extrabold leading-tight">{projectTitle}</h3>
      </div>

      <div className="grid grid-cols-2 bg-soft border-y border-line divide-x divide-line h-48 overflow-hidden relative">
        <div className="flex flex-col relative overflow-hidden">
          {beforeImg ? (
            <img src={beforeImg} alt="Before" className="w-full h-full object-cover grayscale opacity-50 transition-all group-hover:grayscale-0 group-hover:opacity-100" />
          ) : (
            <div className="w-full h-full bg-line/20 flex items-center justify-center p-4 text-center">
              <span className="text-[10px] font-mono opacity-30 uppercase">No Image</span>
            </div>
          )}
          <div className="absolute bottom-2 left-2 bg-white/80 backdrop-blur px-2 py-0.5 rounded text-[10px] font-bold">
            BEFORE
          </div>
        </div>
        
        <div className="flex flex-col relative overflow-hidden">
           {afterImg ? (
            <img src={afterImg} alt="After" className="w-full h-full object-cover transition-all group-hover:scale-105" />
          ) : (
            <div className="w-full h-full bg-primary/5 flex items-center justify-center p-4 text-center">
              <span className="text-[10px] font-mono text-primary/30 uppercase italic">Transformation in progress</span>
            </div>
          )}
          <div className="absolute bottom-2 left-2 bg-primary text-white px-2 py-0.5 rounded text-[10px] font-bold">
            AFTER
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-8 h-8 bg-white border border-line rounded-full flex items-center justify-center shadow-md">
            <MoveRight className="w-4 h-4 text-primary" />
          </div>
        </div>
      </div>

      <div className="p-6 pt-4 space-y-3">
        <div className="flex flex-col space-y-1">
          <span className="text-[10px] font-bold opacity-40 uppercase">Key Change</span>
          <p className="text-xs line-clamp-2 italic text-foreground/70">
            &quot;{afterLabel}&quot;
          </p>
        </div>
        
        <button className="text-xs font-bold text-primary flex items-center space-x-1 hover:space-x-2 transition-all">
          <span>Xem chi tiết hành trình</span>
          <MoveRight className="w-3 h-3" />
        </button>
      </div>
    </Card>
  );
}
