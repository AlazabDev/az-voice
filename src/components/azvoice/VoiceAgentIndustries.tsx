import {
  Utensils,
  Stethoscope,
  Wrench,
  Truck,
  Building2,
  GraduationCap,
  ShoppingBag,
  Plane,
} from "lucide-react";

const industries = [
  { icon: Utensils, title: "المطاعم والكافيهات", desc: "حجوزات وطلبات ديليفري بدون موظف استقبال" },
  { icon: Stethoscope, title: "العيادات والمستشفيات", desc: "حجز مواعيد وتذكير ومتابعة المرضى" },
  { icon: Wrench, title: "شركات الصيانة", desc: "استقبال طلبات الصيانة وجدولة الفنيين" },
  { icon: Truck, title: "الشحن والتوصيل", desc: "تتبع الشحنات وتأكيد الطلبات للعملاء" },
  { icon: Building2, title: "العقارات", desc: "الرد على استفسارات العملاء وحجز معاينات" },
  { icon: GraduationCap, title: "التعليم والكورسات", desc: "تسجيل الطلاب والرد على الاستفسارات" },
  { icon: ShoppingBag, title: "التجارة الإلكترونية", desc: "متابعة الأوردرات والمرتجعات والشكاوى" },
  { icon: Plane, title: "السياحة والطيران", desc: "حجوزات وتأكيدات بأكثر من لغة" },
];

const VoiceAgentIndustries = () => {
  return (
    <section className="py-24 bg-background" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/15 border border-secondary/30 mb-6">
            <span className="text-secondary-foreground font-bold text-sm">
              قطاعات نخدمها
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            وكلاء صوتيون لكل{" "}
            <span className="text-secondary">المجالات</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            مهما كان نشاط شركتك، عندنا حل صوتي مخصص ليك
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {industries.map((it) => (
            <div
              key={it.title}
              className="group p-6 rounded-3xl bg-card border-2 border-border hover:border-primary hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <it.icon className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {it.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoiceAgentIndustries;