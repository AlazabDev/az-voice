import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Package, Truck, Factory, Warehouse, ShieldCheck, 
  Clock, CheckCircle, ArrowLeft, Phone, Building, Boxes 
} from "lucide-react";
import { Link } from "react-router-dom";

const LabnElAsfor = () => {
  const categories = [
    {
      icon: Factory,
      title: "مواد البناء",
      items: ["أسمنت", "حديد تسليح", "طوب", "رمل", "زلط"]
    },
    {
      icon: Boxes,
      title: "التشطيبات",
      items: ["سيراميك", "بورسلين", "رخام", "جرانيت", "باركيه"]
    },
    {
      icon: Package,
      title: "الأدوات الصحية",
      items: ["أحواض", "مراحيض", "خلاطات", "بانيوهات", "اكسسوارات"]
    },
    {
      icon: Building,
      title: "الكهرباء",
      items: ["أسلاك", "مفاتيح", "لوحات", "إضاءة", "تكييفات"]
    }
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: "جودة مضمونة",
      description: "منتجات أصلية من أفضل المصانع المحلية والعالمية"
    },
    {
      icon: Truck,
      title: "توصيل سريع",
      description: "توصيل لجميع المواقع خلال 24-48 ساعة"
    },
    {
      icon: Clock,
      title: "دعم متواصل",
      description: "فريق مبيعات متخصص متاح على مدار الساعة"
    },
    {
      icon: Warehouse,
      title: "مخزون كبير",
      description: "مخازن ضخمة لضمان توفر جميع المنتجات"
    }
  ];

  const stats = [
    { value: "+5000", label: "منتج متوفر" },
    { value: "+200", label: "مصنع شريك" },
    { value: "+1000", label: "عميل سعيد" },
    { value: "24/7", label: "خدمة عملاء" }
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-emerald-900/20 via-background to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Package className="w-4 h-4" />
              B2B - التوريدات
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              <span className="text-emerald-500">لبن</span> العصفور
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              شريكك الموثوق في توريد مواد البناء والتشطيبات. جودة عالية، أسعار تنافسية، وخدمة لا مثيل لها.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white gap-2">
                  اطلب عرض سعر
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:19XXX">
                <Button size="lg" variant="outline" className="gap-2">
                  <Phone className="w-5 h-5" />
                  تواصل مباشر
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-emerald-500">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-white animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-emerald-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">منتجاتنا</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              تشكيلة واسعة من مواد البناء والتشطيبات من أفضل المصادر
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-6 border border-border hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 group interactive-card animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-emerald-500/20 transition-colors">
                  <category.icon className="w-7 h-7 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">لماذا نحن؟</h2>
            <p className="text-muted-foreground">مميزات تجعلنا الخيار الأول</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">كيف تطلب؟</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "أرسل طلبك", description: "أرسل قائمة المواد المطلوبة عبر الواتساب أو الموقع" },
                { step: "2", title: "استلم العرض", description: "نرسل لك عرض سعر تفصيلي خلال ساعات" },
                { step: "3", title: "التوصيل", description: "نوصل طلبك للموقع في الموعد المحدد" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-8 text-center border border-border animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground mb-8">شركاؤنا من أفضل المصانع</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {["مصنع 1", "مصنع 2", "مصنع 3", "مصنع 4", "مصنع 5"].map((partner, index) => (
              <div key={index} className="bg-card px-8 py-4 rounded-lg border border-border">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            جاهز للطلب؟
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            تواصل معنا الآن للحصول على أفضل الأسعار وأسرع توصيل
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/20XXXXXXXXXX">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-white/90">
                واتساب مباشر
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                نموذج الطلب
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LabnElAsfor;
