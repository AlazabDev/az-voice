const cases = [
  { icon: "🏪", title: "المطاعم", desc: "حجوزات وطلبات أوتوماتيك" },
  { icon: "🏥", title: "العيادات", desc: "مواعيد ومتابعة المرضى" },
  { icon: "🔧", title: "الصيانة", desc: "استقبال الطلبات وجدولة الفنيين" },
  { icon: "🚚", title: "الشحن", desc: "تتبع وتأكيد الطلبات" },
];

export const AzUseCases = () => {
  return (
    <section id="use-cases" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="text-secondary text-2xl mb-2">𓋹</div>
          <h2 className="text-3xl md:text-5xl font-black text-foreground">
            حالات <span className="text-secondary">الاستخدام</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {cases.map((c, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-card border border-border hover:border-secondary/50 hover:-translate-y-1 transition-all text-center"
            >
              <div className="text-5xl mb-3">{c.icon}</div>
              <h3 className="font-bold text-foreground mb-1">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AzUseCases;
