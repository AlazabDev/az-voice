import { Languages, Clock, Plug } from "lucide-react";

const features = [
  {
    icon: Languages,
    title: "يتكلم مصري بطلاقة",
    desc: "وكيل مدرب على اللهجة المصرية الأصيلة، يفهم العميل ويرد بثقة وبشكل طبيعي.",
  },
  {
    icon: Clock,
    title: "24/7/365 شغّال دايماً",
    desc: "ما يناموش ولا يتأخر. خدمة عملاء بدون انقطاع، طول السنة، على مدار الساعة.",
  },
  {
    icon: Plug,
    title: "متكامل مع أنظمتك",
    desc: "يربط مع CRM، WhatsApp، تليفون، موقعك، وأي API تحتاجه — بدون تعقيد.",
  },
];

export const AzFeatures = () => {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="text-secondary text-2xl mb-2">𓋹</div>
          <h2 className="text-3xl md:text-5xl font-black text-foreground">
            ليه <span className="text-secondary">AzVoice</span>؟
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-secondary/50 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-5 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                <f.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AzFeatures;
