import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Starter",
    price: 29,
    desc: "للشركات الصغيرة والـ Startups",
    features: ["1000 دقيقة شهرياً", "وكيل واحد", "تكامل WhatsApp", "دعم فني عبر الإيميل"],
  },
  {
    name: "Professional",
    price: 99,
    desc: "للشركات المتنامية",
    features: ["5000 دقيقة شهرياً", "3 وكلاء", "تكامل CRM + API", "دعم فني 24/7", "تقارير تحليلية"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: 299,
    desc: "للشركات الكبيرة",
    features: ["دقائق غير محدودة", "وكلاء غير محدودين", "تكامل مخصص", "Account Manager", "SLA مضمون"],
  },
];

export const AzPricing = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="text-secondary text-2xl mb-2">𓋹</div>
          <h2 className="text-3xl md:text-5xl font-black text-foreground">
            خطط <span className="text-secondary">الأسعار</span>
          </h2>
          <p className="text-muted-foreground mt-4">ابدأ مجاناً، ادفع لما تكبر</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative p-8 rounded-3xl bg-card border-2 ${
                t.popular ? "border-secondary shadow-2xl scale-105" : "border-border"
              } transition-all hover:-translate-y-1`}
            >
              {t.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-xs font-bold">
                  الأكثر طلباً
                </div>
              )}
              <h3 className="text-2xl font-bold text-foreground mb-1">{t.name}</h3>
              <p className="text-sm text-muted-foreground mb-5">{t.desc}</p>
              <div className="mb-6">
                <span className="text-5xl font-black text-foreground">${t.price}</span>
                <span className="text-muted-foreground">/شهرياً</span>
              </div>
              <ul className="space-y-3 mb-8">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full rounded-full font-bold ${
                  t.popular
                    ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    : "bg-foreground hover:bg-foreground/90 text-background"
                }`}
              >
                ابدأ الآن
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AzPricing;
