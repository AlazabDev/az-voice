import { TrendingUp, Users, Clock, DollarSign } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "+85%", label: "تحسن في رضا العملاء", desc: "بعد تركيب الوكيل الصوتي" },
  { icon: Clock, value: "<2 ث", label: "متوسط زمن الرد", desc: "بدون انتظار في الطابور" },
  { icon: DollarSign, value: "-70%", label: "تخفيض تكلفة الدعم", desc: "مقارنة بفريق بشري كامل" },
  { icon: Users, value: "∞", label: "مكالمات متزامنة", desc: "بدون حد أقصى للسعة" },
];

const VoiceAgentStats = () => {
  return (
    <section className="py-24 bg-primary" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl md:text-5xl font-black text-primary-foreground mb-4">
            نتائج <span className="text-secondary">حقيقية</span> لعملائنا
          </h2>
          <p className="text-lg text-primary-foreground/80">
            أرقام بتتكلم عن نفسها — وكلاؤنا الصوتيون بيوفرو وقت وفلوس
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-6 md:p-8 rounded-3xl bg-primary-foreground/5 backdrop-blur border border-primary-foreground/10 text-center hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="inline-flex w-14 h-14 rounded-2xl bg-secondary items-center justify-center mb-4">
                <s.icon className="w-7 h-7 text-secondary-foreground" />
              </div>
              <div className="text-4xl md:text-5xl font-black text-secondary mb-2">
                {s.value}
              </div>
              <div className="font-bold text-primary-foreground mb-1">
                {s.label}
              </div>
              <div className="text-sm text-primary-foreground/70">
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoiceAgentStats;