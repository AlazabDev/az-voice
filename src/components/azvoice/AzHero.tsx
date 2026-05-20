import { Mic } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AzHero = () => {
  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-background">
      {/* Hieroglyph background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none select-none flex items-center justify-center text-[20rem] md:text-[30rem] font-bold text-secondary">
        𓋹
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-6">
          <span>𓋹</span>
          <span>وكيل الذكاء الاصطناعي للشركات المصرية</span>
        </div>

        <h1 className="text-4xl md:text-7xl font-black text-foreground mb-6 leading-tight">
          صوتك قوة
          <span className="block text-secondary mt-2">.. زي ما كان أجدادك</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          AzVoice — وكيل ذكي بيتكلم مصري، يرد على عملاءك 24/7،
          ويتكامل مع كل أنظمتك. حضارة بتتكلم بصوتك.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={scrollToDemo}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-base px-8 py-6 rounded-full shadow-lg"
          >
            <Mic className="ml-2 h-5 w-5" />
            جرب الـ Agent المجاني
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-foreground/20 hover:border-secondary text-foreground font-bold text-base px-8 py-6 rounded-full"
          >
            شاهد كيف يعمل
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AzHero;
