import { Button, Card } from "@/components/ui/core";
import { ArrowRight, Sparkles, AlertCircle, HelpCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1 bg-background">
      {/* Hero Section */}
      <section className="pt-16 pb-12 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-primary font-mono text-[9px] font-bold tracking-[0.1em] uppercase opacity-70">
              <Sparkles className="w-3 h-3" />
              <span>The Non-Tech Builder Movement</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter uppercase">
              WebAI <span className="text-primary">Builders</span>
            </h1>
            <p className="text-sm md:text-base text-foreground/40 font-medium max-w-xl mx-auto leading-relaxed">
              Làm chủ công nghệ Google Antigravity để tự tay xây dựng cỗ máy bán hàng tự động, 
              chuyên nghiệp và tối ưu tỷ lệ chốt đơn mà không tốn hàng chục triệu đồng thuê ngoài.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <Button className="px-10 py-5 text-base font-bold rounded-xl shadow-lg shadow-primary/5 transition-all hover:scale-[1.02] active:scale-95">
              Tôi muốn làm chủ Web AI ngay!
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>


      {/* Problem Agitation Section */}
      <section className="py-24 bg-soft/30 border-y border-line/50 px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
              Tại sao Website của bạn chưa ra đơn?
            </h2>
            <div className="w-20 h-1 bg-primary/20 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                question: "Bạn mệt mỏi vì mỗi lần sửa Website lại phải chờ đợi và \"xin xỏ\" đội kỹ thuật?",
                icon: <AlertCircle className="w-6 h-6 text-primary" />,
              },
              {
                question: "Bạn đã thử tự làm Web nhưng kết quả trông quá \"phèn\" và không ai mua hàng?",
                icon: <HelpCircle className="w-6 h-6 text-primary" />,
              },
              {
                question: "Bạn thấy AI đang bùng nổ nhưng không biết bắt đầu từ đâu để không bị tụt hậu?",
                icon: <Sparkles className="w-6 h-6 text-primary" />,
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-background p-8 rounded-2xl border border-dashed border-line hover:border-primary/30 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  {item.icon}
                </div>
                <div className="mb-6 bg-primary/5 w-12 h-12 rounded-xl flex items-center justify-center">
                  {item.icon}
                </div>
                <p className="text-lg font-bold text-foreground/80 leading-relaxed text-left">
                  {item.question}
                </p>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <Card className="bg-white/80 backdrop-blur-sm p-10 md:p-14 rounded-[2rem] border border-line/50 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-primary/10 transition-colors" />
            
            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-10">
              <p className="text-h3 md:text-h2 font-extrabold text-foreground leading-[1.3]">
                &quot;Website không chỉ là bộ mặt, nó phải là{" "}
                <span className="text-primary italic">nhân viên bán hàng xuất sắc nhất</span>
                {" "}của bạn.&quot;
              </p>
              
              <div className="flex flex-col items-center space-y-4">
                <div className="h-0.5 w-12 bg-primary/20 rounded-full" />
                <p className="text-xs md:text-sm text-foreground/40 font-bold uppercase tracking-[0.3em] leading-relaxed">
                  Nếu nó không ra đơn, đó là một chi phí gánh nặng.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}

