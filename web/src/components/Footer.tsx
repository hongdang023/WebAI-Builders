import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/30">
        <div>
          © 2026 THE LEARNING ARCHITECT
        </div>
        <div className="flex gap-8">
          <Link href="https://learningarchitect.substack.com" target="_blank" className="hover:text-primary transition-colors">SUBSTACK</Link>
          <Link href="https://facebook.com" target="_blank" className="hover:text-primary transition-colors">FACEBOOK</Link>
        </div>
      </div>
    </footer>
  );
}

