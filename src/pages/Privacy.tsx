import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, Eye, Lock, Database, UserCheck, Bell, Trash2, Globe } from "lucide-react";

const Privacy = () => {
  const sections = [
    {
      icon: Eye,
      title: "البيانات التي نجمعها",
      items: [
        "الاسم ومعلومات الاتصال (البريد الإلكتروني، رقم الهاتف)",
        "العنوان وموقع تقديم الخدمة",
        "سجل الطلبات والخدمات المستخدمة",
        "معلومات الدفع (مشفرة ومحمية)"
      ]
    },
    {
      icon: Database,
      title: "كيف نستخدم بياناتك",
      items: [
        "تقديم وتحسين خدماتنا",
        "التواصل معك بشأن طلباتك",
        "إرسال تحديثات وعروض (بموافقتك)",
        "تحليل الأداء وتطوير المنصة"
      ]
    },
    {
      icon: Lock,
      title: "حماية البيانات",
      items: [
        "تشفير SSL/TLS لجميع البيانات",
        "تخزين آمن على خوادم محمية",
        "وصول محدود للموظفين المصرح لهم فقط",
        "مراجعات أمنية دورية"
      ]
    },
    {
      icon: UserCheck,
      title: "حقوقك",
      items: [
        "الوصول إلى بياناتك الشخصية",
        "تصحيح أو تحديث معلوماتك",
        "طلب حذف بياناتك",
        "إلغاء الاشتراك في الرسائل التسويقية"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              سياسة الخصوصية
            </h1>
            <p className="text-xl text-muted-foreground">
              نحن ملتزمون بحماية خصوصيتك وبياناتك الشخصية
            </p>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 animate-fade-in interactive-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <section.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Info Cards */}
          <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-muted/50 rounded-xl p-6 text-center animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Bell className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">الإشعارات</h3>
              <p className="text-sm text-muted-foreground">يمكنك التحكم في إعدادات الإشعارات من حسابك</p>
            </div>
            <div className="bg-muted/50 rounded-xl p-6 text-center animate-fade-in" style={{ animationDelay: '500ms' }}>
              <Trash2 className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">حذف الحساب</h3>
              <p className="text-sm text-muted-foreground">يمكنك طلب حذف حسابك وجميع بياناتك في أي وقت</p>
            </div>
            <div className="bg-muted/50 rounded-xl p-6 text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
              <Globe className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">نطاق السياسة</h3>
              <p className="text-sm text-muted-foreground">تنطبق هذه السياسة على جميع خدمات UberFix</p>
            </div>
          </div>

          {/* Contact */}
          <div className="max-w-4xl mx-auto mt-12 bg-primary/5 rounded-2xl p-8 text-center animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-4">هل لديك أسئلة؟</h3>
            <p className="text-muted-foreground mb-6">
              إذا كان لديك أي استفسار حول سياسة الخصوصية، تواصل معنا
            </p>
            <a 
              href="mailto:privacy@uberfix.com" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              privacy@uberfix.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
