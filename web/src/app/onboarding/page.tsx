"use client";

import { motion } from "framer-motion";
import { 
  Camera, 
  Mic, 
  VolumeX, 
  Monitor, 
  PenTool, 
  MessageSquare, 
  CheckCircle2, 
  Download, 
  FolderPlus, 
  Globe 
} from "lucide-react";

const checklistItems = [
  {
    icon: <Camera className="w-6 h-6 text-primary" />,
    title: "Bật Camera",
    desc: "Giúp lớp học tương tác thật hơn. Không cần bối cảnh hoàn hảo, chúng tôi cần sự hiện diện của bạn.",
  },
  {
    icon: <Mic className="w-6 h-6 text-primary" />,
    title: "Micro rõ ràng",
    desc: "Đảm bảo âm thanh tốt (nên dùng tai nghe) để sẵn sàng thảo luận và Q&A.",
  },
  {
    icon: <VolumeX className="w-6 h-6 text-primary" />,
    title: "Không gian yên tĩnh",
    desc: "Tránh nơi ồn ào để tập trung sâu và suy nghĩ rành mạch hơn.",
  },
  {
    icon: <Monitor className="w-6 h-6 text-primary" />,
    title: "Dùng Máy Tính",
    desc: "Tránh dùng điện thoại. Bạn sẽ cần mở nhiều tab, ghi chép và thực hành.",
  },
  {
    icon: <PenTool className="w-6 h-6 text-primary" />,
    title: "Ghi chép chủ động",
    desc: "Mentor có thể hiểu cách tư duy của bạn thông qua cách bạn ghi chép.",
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-primary" />,
    title: "Tích cực tham gia",
    desc: "Lợi ích lớn nhất đến từ việc đặt câu hỏi và chia sẻ ý kiến.",
  },
];



export default function OnboardingPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-16 pb-12 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-primary font-mono text-[9px] font-bold tracking-[0.1em] uppercase opacity-70">
            <Monitor className="w-3 h-3" />
            <span>Platform Setup</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter uppercase">
            Onboarding <span className="text-primary">Set up nền tảng</span>
          </h1>
          <p className="text-sm md:text-base text-foreground/40 font-medium max-w-xl mx-auto leading-relaxed">
            Chào mừng bạn đến với khoá học. Để buổi học đạt hiệu quả cao nhất cho tất cả mọi người, 
            vui lòng chuẩn bị kỹ các checklist dưới đây trước khi tham gia.
          </p>
        </div>
      </section>


      {/* Preparation Guide */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-soft/30 border border-line rounded-xl p-8 md:p-12"
          >
            <div className="mb-12">
              <h3 className="text-h3 font-bold mb-4">Hướng Dẫn Chuẩn Bị</h3>
              <p className="text-body text-foreground/80">
                Workshop này được thiết kế chú trọng vào thảo luận và thực hành. Để lớp học đạt hiệu quả cao nhất, vui lòng dành 1 phút chuẩn bị:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {checklistItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm border border-line">
                    {item.icon}
                  </div>
                  <h4 className="text-h4 font-bold">{item.title}</h4>
                  <p className="text-small text-foreground/60 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>



      {/* First Task Section */}
      <section className="py-20 px-6 bg-soft/20 border-t border-line">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-h2 font-extrabold mb-4 uppercase tracking-tighter">
              First Learning Task
            </h2>
            <h3 className="text-h3 text-primary font-bold">
              2. Nhiệm vụ học tập đầu tiên
            </h3>
          </div>

          <div className="space-y-6">
            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-start gap-6 p-6 bg-white border border-line rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Download className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-h4 font-bold mb-2">Tải Antigravity</h4>
                <p className="text-body text-foreground/60">
                  Tải xuống và cài đặt Antigravity. Khuyến khích dùng bản trả phí có kèm Gemini Pro để đạt hiệu suất cao nhất.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-start gap-6 p-6 bg-white border border-line rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <FolderPlus className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-h4 font-bold mb-2">Tạo Workspace mới</h4>
                <p className="text-body text-foreground/60">
                  Tạo một folder mới trên máy tính để chọn làm workspace làm việc chính của bạn.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-start gap-6 p-6 bg-white border border-line rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-h4 font-bold mb-2">Clone Website đầu tiên</h4>
                <p className="text-body text-foreground/60">
                  Chat câu lệnh đầu tiên yêu cầu Antigravity clone một website bạn yêu thích để bắt đầu hành trình.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 text-center">
            <button className="bg-primary text-white px-10 py-4 rounded-full text-lg font-extrabold shadow-lg hover:scale-105 active:scale-95 transition-all">
              Bắt đầu ngay
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
