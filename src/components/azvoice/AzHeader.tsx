import { Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

export const AzHeader = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground shadow-md">
            <Mic className="h-5 w-5" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-foreground">
              AzVoice <span className="text-secondary">𓋹</span>
            </span>
            <span className="text-[10px] text-muted-foreground hidden sm:block">
              من قلب الأهرامات.. صوت للحضارة
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="text-foreground/80 hover:text-secondary transition-colors">المميزات</a>
          <a href="#demo" className="text-foreground/80 hover:text-secondary transition-colors">الديمو</a>
          <a href="#use-cases" className="text-foreground/80 hover:text-secondary transition-colors">الاستخدامات</a>
          <a href="#pricing" className="text-foreground/80 hover:text-secondary transition-colors">الأسعار</a>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button size="sm" className="hidden sm:flex bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold">
            ابدأ مجاناً
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AzHeader;
