import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Gem, Home, Paintbrush, Lightbulb, Sofa, Bath, 
  ChefHat, Trees, CheckCircle, ArrowLeft, Star, Phone 
} from "lucide-react";
import { Link } from "react-router-dom";

const LuxuryFinishing = () => {
  const services = [
    {
      icon: Paintbrush,
      title: "الدهانات الفاخرة",
      description: "دهانات عالمية من أرقى الماركات مع تشطيبات استثنائية",
      features: ["دهانات إيطالية", "تأثيرات ثلاثية الأبعاد", "ضمان 10 سنوات"]
    },
    {
      icon: Bath,
      title: "الحمامات الفاخرة",
      description: "تصميم وتنفيذ حمامات بمعايير عالمية",
      features: ["سيراميك إسباني", "أدوات صحية ألمانية", "تصميم مخصص"]
    },
    {
      icon: ChefHat,
      title: "المطابخ الحديثة",
      description: "مطابخ متكاملة بأحدث التصميمات العالمية",
      features: ["خشب طبيعي", "أجهزة مدمجة", "إضاءة ذكية"]
    },
    {
      icon: Lightbulb,
      title: "الإضاءة الذكية",
      description: "أنظمة إضاءة متطورة قابلة للتحكم",
      features: ["تحكم صوتي", "توفير طاقة", "مشاهد متعددة"]
    },
    {
      icon: Sofa,
      title: "التصميم الداخلي",
      description: "تصميمات داخلية فريدة تعكس ذوقك الرفيع",
      features: ["استشارات مجانية", "تصورات ثلاثية الأبعاد", "تنفيذ متكامل"]
    },
    {
      icon: Trees,
      title: "الحدائق والتراسات",
      description: "تنسيق مساحات خارجية بأسلوب عصري",
      features: ["نباتات مختارة", "أنظمة ري ذكية", "إضاءة خارجية"]
    }
  ];

  const projects = [
    { image: "/upload/projects01.jpg", title: "فيلا التجمع الخامس", type: "تشطيب كامل" },
    { image: "/upload/projects02.jpg", title: "شقة الشيخ زايد", type: "تجديد شامل" },
    { image: "/upload/projects03.jpg", title: "بنتهاوس المعادي", type: "تصميم فاخر" },
    { image: "/upload/projects04.jpg", title: "فيلا الساحل", type: "تشطيب بحري" }
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-amber-900/20 via-background to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Gem className="w-4 h-4" />
              B2C - العقارات السكنية
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              <span className="text-amber-500">Luxury</span> Finishing
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              نحول منزلك إلى تحفة فنية. تشطيبات فاخرة بمعايير عالمية تعكس ذوقك الرفيع وأسلوب حياتك المتميز.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white gap-2">
                  احصل على استشارة مجانية
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button size="lg" variant="outline">
                  شاهد أعمالنا
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">خدماتنا الفاخرة</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              نقدم حلول تشطيب متكاملة تجمع بين الجمال والجودة والاستدامة
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 border border-border hover:border-amber-500/50 hover:shadow-2xl transition-all duration-500 group interactive-card animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                  <service.icon className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-amber-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">من أعمالنا</h2>
            <p className="text-muted-foreground">مشاريع نفتخر بها</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="relative group overflow-hidden rounded-2xl animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-amber-400 text-sm mb-1">{project.type}</p>
                    <h3 className="text-white font-bold text-lg">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                لماذا <span className="text-amber-500">Luxury Finishing</span>؟
              </h2>
              <div className="space-y-4">
                {[
                  "فريق من أمهر المصممين والحرفيين المعتمدين",
                  "مواد بناء عالمية من أرقى الماركات",
                  "ضمان شامل يصل إلى 10 سنوات",
                  "إدارة مشاريع احترافية من البداية للنهاية",
                  "أسعار تنافسية مع جودة لا تقارن"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-amber-500" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-500/20 to-primary/10 rounded-3xl p-8 animate-fade-in">
              <div className="text-center">
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-4xl font-bold text-foreground mb-2">4.9/5</p>
                <p className="text-muted-foreground mb-6">تقييم العملاء</p>
                <div className="border-t border-border pt-6">
                  <p className="text-2xl font-bold text-amber-500 mb-1">+200</p>
                  <p className="text-muted-foreground">مشروع منجز بنجاح</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ابدأ رحلة تحويل منزلك اليوم
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            احصل على استشارة مجانية من خبرائنا واكتشف كيف يمكننا تحقيق رؤيتك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-amber-600 hover:bg-white/90">
                احجز استشارتك المجانية
              </Button>
            </Link>
            <a href="tel:19XXX">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Phone className="w-5 h-5 ml-2" />
                اتصل بنا الآن
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LuxuryFinishing;
