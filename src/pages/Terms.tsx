import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FileText, Shield, AlertCircle, CheckCircle, Scale, Clock } from "lucide-react";

const Terms = () => {
  const sections = [
    {
      icon: FileText,
      title: "مقدمة",
      content: "مرحباً بك في منصة UberFix. باستخدامك لخدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام. يرجى قراءتها بعناية قبل استخدام المنصة."
    },
    {
      icon: Shield,
      title: "الخدمات المقدمة",
      content: "توفر UberFix منصة لربط العملاء بفنيين محترفين لخدمات الصيانة والإصلاح. نحن نضمن جودة الخدمة من خلال معايير صارمة لاختيار الفنيين وتقييم أدائهم المستمر."
    },
    {
      icon: AlertCircle,
      title: "مسؤوليات المستخدم",
      content: "يلتزم المستخدم بتقديم معلومات دقيقة وصحيحة، والتعامل باحترام مع الفنيين، والدفع في الوقت المحدد، والإبلاغ عن أي مشاكل فوراً."
    },
    {
      icon: CheckCircle,
      title: "ضمان الجودة",
      content: "نقدم ضمان جودة على جميع الخدمات. في حالة عدم رضاك عن الخدمة، يمكنك التواصل معنا خلال 48 ساعة لإعادة الخدمة أو استرداد المبلغ."
    },
    {
      icon: Scale,
      title: "حل النزاعات",
      content: "في حالة وجود أي نزاع، نسعى لحله ودياً أولاً. إذا لم يتم التوصل لحل، يتم اللجوء للتحكيم وفقاً للقوانين المصرية المعمول بها."
    },
    {
      icon: Clock,
      title: "التعديلات",
      content: "نحتفظ بحق تعديل هذه الشروط في أي وقت. سيتم إخطارك بأي تغييرات جوهرية عبر البريد الإلكتروني أو إشعار على المنصة."
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
              <FileText className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              شروط الاستخدام
            </h1>
            <p className="text-xl text-muted-foreground">
              آخر تحديث: ديسمبر 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-3">{section.title}</h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">{section.content}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Additional Terms */}
            <div className="bg-muted/50 rounded-2xl p-8 mt-12">
              <h3 className="text-xl font-bold text-foreground mb-4">معلومات إضافية</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>جميع الأسعار المعروضة تشمل ضريبة القيمة المضافة</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>يمكن إلغاء الطلب قبل وصول الفني دون أي رسوم</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>نحترم خصوصيتك ولا نشارك بياناتك مع أطراف ثالثة</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>الدعم الفني متاح على مدار الساعة</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
