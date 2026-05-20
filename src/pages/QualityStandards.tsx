import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Award, CheckCircle, Shield, Users, Target, Zap, 
  Clock, Star, BadgeCheck, Gauge, FileCheck, Headphones 
} from "lucide-react";

const QualityStandards = () => {
  const standards = [
    {
      icon: BadgeCheck,
      title: "اعتماد الفنيين",
      description: "جميع الفنيين معتمدون ومرخصون مع خبرة لا تقل عن 3 سنوات",
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      icon: Shield,
      title: "ضمان الخدمة",
      description: "ضمان شامل على جميع الأعمال لمدة 30 يوم",
      color: "bg-green-500/10 text-green-500"
    },
    {
      icon: Clock,
      title: "الالتزام بالمواعيد",
      description: "نسبة التزام 98% بالمواعيد المحددة",
      color: "bg-orange-500/10 text-orange-500"
    },
    {
      icon: Star,
      title: "تقييم مستمر",
      description: "متوسط تقييم الفنيين 4.8/5 من العملاء",
      color: "bg-yellow-500/10 text-yellow-500"
    },
    {
      icon: FileCheck,
      title: "فحص الجودة",
      description: "فحص دوري لجودة الأدوات والمعدات المستخدمة",
      color: "bg-purple-500/10 text-purple-500"
    },
    {
      icon: Headphones,
      title: "دعم متواصل",
      description: "فريق دعم متخصص متاح على مدار الساعة",
      color: "bg-pink-500/10 text-pink-500"
    }
  ];

  const certifications = [
    { name: "ISO 9001", description: "نظام إدارة الجودة" },
    { name: "ISO 45001", description: "نظام إدارة الصحة والسلامة" },
    { name: "ISO 14001", description: "نظام الإدارة البيئية" }
  ];

  const process = [
    {
      step: "01",
      title: "فحص الطلب",
      description: "تحليل دقيق لمتطلبات العميل وتحديد نوع الخدمة المطلوبة"
    },
    {
      step: "02",
      title: "اختيار الفني",
      description: "تعيين أفضل فني متخصص بناءً على نوع الخدمة والموقع"
    },
    {
      step: "03",
      title: "تنفيذ العمل",
      description: "تنفيذ الخدمة وفق أعلى معايير الجودة والسلامة"
    },
    {
      step: "04",
      title: "المراجعة والتقييم",
      description: "فحص العمل وجمع تقييم العميل لضمان الرضا التام"
    }
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <Award className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              معايير الجودة
            </h1>
            <p className="text-xl text-muted-foreground">
              التزامنا بأعلى معايير الجودة والاحترافية في كل خدمة نقدمها
            </p>
          </div>
        </div>
      </section>

      {/* Standards Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">معاييرنا الأساسية</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {standards.map((standard, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-8 border border-border hover:shadow-xl transition-all duration-300 group interactive-card animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${standard.color} group-hover:scale-110 transition-transform`}>
                    <standard.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{standard.title}</h3>
                  <p className="text-muted-foreground">{standard.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-4">عملية ضمان الجودة</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              نتبع منهجية صارمة لضمان تقديم أفضل خدمة ممكنة
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <div 
                  key={index}
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="bg-card rounded-2xl p-6 border border-border h-full hover:shadow-lg transition-all duration-300 interactive-card">
                    <div className="text-5xl font-bold text-primary/20 mb-4">{item.step}</div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -left-3 transform -translate-y-1/2">
                      <div className="w-6 h-0.5 bg-primary/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "98%", label: "رضا العملاء" },
              { value: "4.8", label: "متوسط التقييم" },
              { value: "+500", label: "فني معتمد" },
              { value: "24/7", label: "دعم متواصل" }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">شهاداتنا واعتماداتنا</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QualityStandards;
