import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Building2, Palette, PenTool, Layout, FileImage, 
  Globe, Megaphone, CheckCircle, ArrowLeft, Briefcase 
} from "lucide-react";
import { Link } from "react-router-dom";

const BrandIdentity = () => {
  const services = [
    {
      icon: PenTool,
      title: "تصميم الشعارات",
      description: "شعارات فريدة تعكس هوية علامتك التجارية"
    },
    {
      icon: Palette,
      title: "الهوية البصرية",
      description: "منظومة بصرية متكاملة من الألوان والخطوط"
    },
    {
      icon: FileImage,
      title: "المطبوعات",
      description: "بطاقات أعمال، بروشورات، ومواد تسويقية"
    },
    {
      icon: Layout,
      title: "تصميم المكاتب",
      description: "لوحات وديكورات تعكس هوية الشركة"
    },
    {
      icon: Globe,
      title: "الهوية الرقمية",
      description: "تصميم مواقع وتطبيقات متوافقة مع الهوية"
    },
    {
      icon: Megaphone,
      title: "المواد التسويقية",
      description: "حملات إعلانية ومحتوى رقمي متميز"
    }
  ];

  const packages = [
    {
      name: "الأساسية",
      price: "25,000",
      features: [
        "تصميم شعار",
        "3 مقترحات",
        "دليل استخدام مبسط",
        "ملفات بصيغ متعددة"
      ]
    },
    {
      name: "المتقدمة",
      price: "50,000",
      popular: true,
      features: [
        "تصميم شعار",
        "هوية بصرية كاملة",
        "بطاقات أعمال",
        "أوراق رسمية",
        "دليل استخدام شامل"
      ]
    },
    {
      name: "الشاملة",
      price: "100,000",
      features: [
        "كل مميزات المتقدمة",
        "تصميم موقع",
        "مواد تسويقية",
        "تصميم مكتبي",
        "دعم لمدة سنة"
      ]
    }
  ];

  const clients = [
    "شركات عقارية كبرى",
    "مستشفيات ومراكز طبية",
    "فنادق ومنتجعات",
    "مطاعم ومقاهي",
    "شركات تقنية",
    "مؤسسات تعليمية"
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-violet-900/20 via-background to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-violet-500/10 text-violet-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              B2B - العقارات التجارية
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              <span className="text-violet-500">Brand</span> Identity
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              نبني هويات تجارية قوية ومتميزة. من الشعار إلى التجربة الكاملة، نصمم علامتك التجارية لتترك انطباعاً لا يُنسى.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-violet-500 hover:bg-violet-600 text-white gap-2">
                  احصل على عرض سعر
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">خدماتنا</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              حلول متكاملة لبناء وتطوير هويتك التجارية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 border border-border hover:border-violet-500/50 hover:shadow-xl transition-all duration-300 group interactive-card animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-violet-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-violet-500/20 transition-colors">
                  <service.icon className="w-7 h-7 text-violet-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">باقاتنا</h2>
            <p className="text-muted-foreground">اختر الباقة المناسبة لاحتياجاتك</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`bg-card rounded-2xl p-8 border relative animate-fade-in ${
                  pkg.popular 
                    ? 'border-violet-500 shadow-xl scale-105' 
                    : 'border-border'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-violet-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    الأكثر طلباً
                  </div>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-violet-500">{pkg.price}</span>
                  <span className="text-muted-foreground"> جنيه</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-violet-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${pkg.popular ? 'bg-violet-500 hover:bg-violet-600' : ''}`}
                  variant={pkg.popular ? 'default' : 'outline'}
                >
                  اختر هذه الباقة
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">عملاؤنا</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {clients.map((client, index) => (
                <div 
                  key={index}
                  className="bg-muted/50 px-6 py-3 rounded-full text-muted-foreground animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Briefcase className="w-4 h-4 inline ml-2" />
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-violet-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            جاهز لبناء هويتك التجارية؟
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            تواصل معنا اليوم للحصول على استشارة مجانية ومقترح مخصص
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-violet-600 hover:bg-white/90">
              تواصل معنا الآن
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrandIdentity;
