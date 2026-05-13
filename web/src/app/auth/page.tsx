"use client";

import { Button, Card } from "@/components/ui/core";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const router = useRouter();

  return (
    <main className="flex-1 flex items-center justify-center p-6 bg-soft/30">
      <Card className="w-full max-w-md p-10 space-y-8 bg-white shadow-2xl">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-extrabold tracking-tight">Chào mừng Builder</h1>
          <p className="text-sm text-foreground/50">Đăng nhập để tiếp tục hành trình lột xác</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wider opacity-40">Email</label>
            <input 
              type="email" 
              placeholder="name@example.com"
              className="w-full p-3 rounded-xl border border-line focus:outline-none focus:border-primary transition-colors text-sm"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wider opacity-40">Mật khẩu</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full p-3 rounded-xl border border-line focus:outline-none focus:border-primary transition-colors text-sm"
            />
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <Button className="w-full" size="lg" onClick={() => router.push("/test")}>
            Đăng nhập ngay
          </Button>
          <div className="text-center">
            <span className="text-xs text-foreground/40">Chưa có tài khoản? </span>
            <button className="text-xs font-bold text-primary hover:underline">Đăng ký tham gia</button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-line"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-foreground/30 font-mono">Or continue with</span>
          </div>
        </div>

        <Button variant="secondary" className="w-full">
          <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4 mr-2" />
          Tiếp tục với Google
        </Button>
      </Card>
    </main>
  );
}
