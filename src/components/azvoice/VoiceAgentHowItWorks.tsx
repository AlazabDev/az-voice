import { PhoneCall, Brain, MessageSquare, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    num: "01",
    title: "العميل يتصل",
    desc: "المكالمة بترد عليها فوراً بدون انتظار، 24 ساعة في اليوم",
  },
  {
    icon: Brain,
    num: "02",
    title: "الوكيل بيفهم",
    desc: "ذكاء اصطناعي متطور يفهم اللهجة المصرية والسياق الكامل",
  },
  {
    icon: MessageSquare,
    num: "03",
    title: "حوار طبيعي",
    desc: "بيتكلم بصوت بشري طبيعي ويرد على كل الاستفسارات",
  },
  {
    icon: CheckCircle2,
    num: "04",
    title: "تنفيذ المهمة",
    desc: "بيحجز موعد، يسجل طلب، أو يحوّل المكالمة لموظف بشري",
  },
];

const VoiceAgentHowItWorks = () => {
  return (
    <section className="py-24 bg-muted/30" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-primary font-bold text-sm">آلية العمل</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            ازاي وكيلك الصوتي{" "}
            <span className="text-secondary">بيشتغل؟</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            من أول رنة تليفون لحد إنهاء المكالمة — كله أوتوماتيك واحترافي
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((s) => (
            <div
              key={s.num}
              className="relative p-6 rounded-3xl bg-card border-2 border-border hover:border-secondary transition-all hover:-translate-y-1"
            >
              <div className="absolute -top-4 right-6 px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-black text-sm">
                {s.num}
              </div>
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoiceAgentHowItWorks;