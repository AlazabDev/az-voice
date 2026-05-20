import { Link } from "react-router-dom";
import { Phone, Headphones, Sparkles, Globe2, Clock, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedAgentLogo from "./AnimatedAgentLogo";

const features = [
  { icon: Mic, title: "صوت طبيعي 100%", desc: "وكلاء يتكلمون باللهجة المصرية بصوت بشري" },
  { icon: Clock, title: "متاح 24/7", desc: "يرد على كل مكالمة فوراً بدون انتظار" },
  { icon: Globe2, title: "متعدد اللغات", desc: "عربي، إنجليزي وأكثر من 29 لغة" },
  { icon: Headphones, title: "تكامل كامل", desc: "يتصل بـ CRM والأنظمة الموجودة عندك" },
];

const VoiceAgentShowcase = () => {
  return (
    <section
      id="voice-agents"
      className="relative py-24 bg-background overflow-hidden"
      dir="rtl"
    >
      {/* subtle grid backdrop (no gradients) */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT — Mascot */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 -m-8 rounded-full bg-secondary/10 animate-pulse" />
              <div className="relative bg-card border-2 border-border rounded-[2.5rem] p-10 md:p-14 shadow-xl">
                <AnimatedAgentLogo size={260} />
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground font-bold text-sm">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    وكيلك الصوتي جاهز
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="order-1 lg:order-2 text-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary font-bold text-sm">
                خدمتنا الاحترافية الجديدة
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-foreground leading-tight mb-6">
              وكلاء صوتيون بالذكاء الاصطناعي
              <br />
              <span className="text-secondary">يردون على عملاءك</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              ننشئ لك وكلاء دعم صوتيين بالذكاء الاصطناعي يتعاملون مع مكالمات
              عملائك بصوت بشري طبيعي. حجوزات، استفسارات، شكاوى — كله بدون
              انتظار ولا تكلفة بشرية إضافية.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex gap-3 p-4 rounded-2xl bg-card border border-border hover:border-secondary transition-colors"
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm mb-1">
                      {f.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-snug">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold rounded-full px-8 h-14 text-base"
              >
                <Link to="/azvoice">
                  <Mic className="ml-2 h-5 w-5" />
                  جرّب وكيل صوتي مجاناً
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-14 text-base border-2 font-bold"
              >
                <a href="tel:+201004006620">
                  <Phone className="ml-2 h-5 w-5" />
                  اتصل بنا
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceAgentShowcase;