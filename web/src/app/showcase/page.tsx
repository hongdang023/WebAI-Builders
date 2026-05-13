import { Button, Card } from "@/components/ui/core";
import { OutcomeCard } from "@/components/ui/OutcomeCard";
import { Upload, Globe, MessageSquare, ArrowUpRight } from "lucide-react";

const MOCK_SHOWCASE = [
  {
    studentName: "Minh Anh",
    projectTitle: "Tiệm Gốm Thủ Công",
    afterLabel: "Website AI tự động, tối giản, tích hợp thanh toán và Chatbot tư vấn.",
    beforeImg: "https://images.unsplash.com/photo-1581456495147-237998740f8b?q=80&w=800&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop",
  },
  {
    studentName: "Hoàng Long",
    projectTitle: "Portfolio Nhiếp Ảnh",
    afterLabel: "Showcase chuyên nghiệp, tốc độ load ảnh 0.5s, nhận job tự động.",
    beforeImg: "https://images.unsplash.com/photo-1452784444945-3f422708fe5e?q=80&w=800&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
  },
  {
    studentName: "Thanh Trúc",
    projectTitle: "Khóa học Yoga Online",
    afterLabel: "Hệ thống LMS tự động, học viên tự đăng nhập và xem bài giảng.",
    beforeImg: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?q=80&w=800&auto=format&fit=crop",
  }
];

export default function ShowcasePage() {
  return (
    <main className="flex-1 bg-background">
      {/* Hero Section */}
      <section className="pt-16 pb-12 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-primary font-mono text-[9px] font-bold tracking-[0.1em] uppercase opacity-70">
            <Globe className="w-3 h-3" />
            <span>Transformation Gallery</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter uppercase">
            The <span className="text-primary">Showcase</span>
          </h1>
          <p className="text-sm md:text-base text-foreground/40 font-medium max-w-xl mx-auto leading-relaxed">
            Chiêm ngưỡng hành trình lột xác từ website "số 0" đến những cỗ máy bán hàng chuyên nghiệp được build bởi Non-tech Builders.
          </p>
        </div>
      </section>


      {/* Showcase Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_SHOWCASE.map((item, index) => (
            <OutcomeCard key={index} {...item} />
          ))}
        </div>
      </section>

      {/* Upload Portal Section */}
      <section className="py-24 px-6 bg-soft/30 border-t border-line mt-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
                  SẴN SÀNG ĐỂ TRỞ THÀNH <br />
                  <span className="text-primary">CA CẢM HỨNG TIẾP THEO?</span>
                </h2>
                <p className="text-lg text-foreground/60 font-medium leading-relaxed">
                  Đừng ngần ngại bắt đầu từ những bước đi thô sơ nhất. Chúng tôi giúp bạn ghi lại hành trình biến đổi để nhìn thấy sự tăng trưởng của chính mình.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: <Upload className="w-5 h-5" />, text: "Upload trạng thái Before (Điểm A)" },
                  { icon: <MessageSquare className="w-5 h-5" />, text: "Viết Changelog cho quá trình học" },
                  { icon: <ArrowUpRight className="w-5 h-5" />, text: "Công bố Website After (Điểm B)" },
                ].map((step, i) => (
                  <div key={i} className="flex items-center space-x-4 bg-white/50 p-4 rounded-xl border border-line/50">
                    <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center text-primary">
                      {step.icon}
                    </div>
                    <span className="font-bold text-foreground/80">{step.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-8 md:p-10 border-dashed border-primary/20 bg-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10 space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold">Gửi sản phẩm của bạn</h3>
                  <p className="text-xs text-foreground/40 font-medium uppercase tracking-widest">Student Upload Portal</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Dự án của bạn</label>
                    <input type="text" placeholder="Tên website/dự án..." className="w-full p-4 bg-soft/50 border border-line rounded-xl focus:outline-none focus:border-primary/30 font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Link Website (After)</label>
                    <input type="text" placeholder="https://..." className="w-full p-4 bg-soft/50 border border-line rounded-xl focus:outline-none focus:border-primary/30 font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Changelog nhanh</label>
                    <textarea placeholder="Bạn đã thay đổi điều gì lớn nhất?..." className="w-full p-4 bg-soft/50 border border-line rounded-xl focus:outline-none focus:border-primary/30 font-medium h-32" />
                  </div>
                  <Button className="w-full py-7 text-base font-bold shadow-lg shadow-primary/20">
                    Công bố hành trình biến đổi
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
