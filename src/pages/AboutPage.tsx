import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Building, Target, Award, Users } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-20 bg-gradient-hero" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6">
              <Building className="w-4 h-4" />
              <span className="text-sm font-medium">من نحن</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              شركة <span className="text-secondary">العزب المعمارية</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              رائدة في مجال التصميم المعماري والداخلي وتنفيذ المشاريع والخدمات التشغيلية
            </p>
          </div>

          {/* Company Overview */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="p-8 animate-scale-in">
              <h2 className="text-3xl font-bold mb-6 text-center">عن الشركة</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  شركة العزب المعمارية هي شركة رسمية مسجلة تعمل في مجال التصميم المعماري
                  والداخلي وتنفيذ المشاريع والخدمات التشغيلية. تأسست الشركة بهدف تقديم
                  حلول متكاملة ومبتكرة في قطاع البناء والصيانة.
                </p>
                <p>
                  <strong className="text-foreground">رقم التسجيل الدولي:</strong> D-U-N-S No.: 849203826
                </p>
                <p>
                  نفخر بتقديم خدماتنا لكبرى الشركات في مصر، حيث يمثل عميلنا الرئيسي
                  "أبو عوف" أكثر من 70% من حجم أعمالنا، وهو ما يعكس الثقة والجودة
                  التي نقدمها.
                </p>
              </div>
            </Card>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 animate-slide-up">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Target className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">رؤيتنا</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                أن نكون الشركة الرائدة في مجال الصيانة والتشغيل في مصر والشرق الأوسط،
                من خلال تقديم خدمات متميزة تعتمد على أحدث التقنيات وأفضل الممارسات
                العالمية.
              </p>
            </Card>

            <Card className="p-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Award className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">مهمتنا</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                تقديم حلول صيانة وتشغيل احترافية ومتكاملة تساعد عملاءنا على إدارة
                منشآتهم بكفاءة عالية، مع ضمان أعلى معايير الجودة والسلامة.
              </p>
            </Card>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="p-6 text-center animate-scale-in">
              <div className="text-4xl font-bold text-secondary mb-2">15+</div>
              <div className="text-muted-foreground">سنوات الخبرة</div>
            </Card>
            <Card className="p-6 text-center animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl font-bold text-secondary mb-2">500+</div>
              <div className="text-muted-foreground">مشروع منفذ</div>
            </Card>
            <Card className="p-6 text-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold text-secondary mb-2">50+</div>
              <div className="text-muted-foreground">عميل راضٍ</div>
            </Card>
            <Card className="p-6 text-center animate-scale-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-4xl font-bold text-secondary mb-2">100+</div>
              <div className="text-muted-foreground">فني محترف</div>
            </Card>
          </div>

          {/* Main Client */}
          <Card className="p-12 text-center bg-gradient-secondary animate-fade-in">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Users className="w-8 h-8 text-secondary-foreground" />
              <h3 className="text-3xl font-bold text-secondary-foreground">عملاؤنا الرئيسيون</h3>
            </div>
            <p className="text-xl text-secondary-foreground/90 mb-8">
              نفخر بشراكتنا مع كبرى الشركات والمؤسسات في مصر
            </p>
            <div className="inline-block bg-white px-12 py-6 rounded-2xl">
              <div className="text-4xl font-bold text-primary">أبو عوف</div>
              <div className="text-muted-foreground mt-2">70% من حجم أعمالنا</div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
