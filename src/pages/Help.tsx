import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  HelpCircle, Phone, Mail, MessageCircle, Clock, MapPin, 
  Wrench, CreditCard, Calendar, Star, AlertTriangle, CheckCircle 
} from "lucide-react";
import { Link } from "react-router-dom";

const Help = () => {
  const categories = [
    { icon: Wrench, title: "الخدمات", count: 8 },
    { icon: CreditCard, title: "الدفع", count: 5 },
    { icon: Calendar, title: "الحجوزات", count: 6 },
    { icon: Star, title: "التقييمات", count: 4 },
  ];

  const faqs = [
    {
      question: "كيف يمكنني حجز خدمة صيانة؟",
      answer: "يمكنك حجز خدمة بسهولة عبر التطبيق أو الموقع. اختر نوع الخدمة، حدد الموعد المناسب، وسنرسل لك فني متخصص في أقرب وقت."
    },
    {
      question: "ما هي طرق الدفع المتاحة؟",
      answer: "نقبل الدفع النقدي عند الانتهاء، البطاقات الائتمانية، المحافظ الإلكترونية (فودافون كاش، اتصالات كاش، أورانج كاش)، والتحويل البنكي."
    },
    {
      question: "هل يمكنني إلغاء الحجز؟",
      answer: "نعم، يمكنك إلغاء الحجز قبل وصول الفني دون أي رسوم. إذا تم الإلغاء بعد بدء العمل، قد تطبق رسوم جزئية."
    },
    {
      question: "كيف أضمن جودة الخدمة؟",
      answer: "جميع الفنيين لدينا معتمدون ومدربون. نقدم ضمان جودة على جميع الأعمال، ويمكنك تقييم الخدمة بعد الانتهاء."
    },
    {
      question: "ما هي مناطق التغطية؟",
      answer: "نغطي جميع مناطق القاهرة الكبرى، الجيزة، الإسكندرية، والمدن الجديدة. نعمل على التوسع لتغطية المزيد من المناطق."
    },
    {
      question: "كم تستغرق الاستجابة للطلب؟",
      answer: "في الحالات العادية، نستجيب خلال 2-4 ساعات. للحالات الطارئة، لدينا خدمة استجابة سريعة خلال ساعة واحدة."
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "اتصل بنا",
      value: "19XXX",
      description: "متاح 24/7",
      action: "tel:19XXX"
    },
    {
      icon: MessageCircle,
      title: "واتساب",
      value: "+20 XXX XXX XXXX",
      description: "رد فوري",
      action: "https://wa.me/20XXXXXXXXXX"
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      value: "support@uberfix.com",
      description: "رد خلال 24 ساعة",
      action: "mailto:support@uberfix.com"
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
              <HelpCircle className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              مركز المساعدة
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              كيف يمكننا مساعدتك اليوم؟
            </p>
            
            {/* Search */}
            <div className="max-w-xl mx-auto relative">
              <input 
                type="text" 
                placeholder="ابحث عن سؤالك..."
                className="w-full px-6 py-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 text-center border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer interactive-card animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <cat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-foreground">{cat.title}</h3>
                <p className="text-sm text-muted-foreground">{cat.count} مقالات</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">الأسئلة الشائعة</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border px-6 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <AccordionTrigger className="text-right hover:no-underline py-5">
                    <span className="font-semibold text-foreground">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-8">
              <Link to="/faq">
                <Button variant="outline" size="lg">
                  عرض جميع الأسئلة
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-4">تواصل معنا</h2>
            <p className="text-muted-foreground text-center mb-12">فريق الدعم جاهز لمساعدتك</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <a 
                  key={index}
                  href={method.action}
                  className="bg-card rounded-2xl p-8 text-center border border-border hover:border-primary hover:shadow-xl transition-all duration-300 group interactive-card animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <method.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{method.title}</h3>
                  <p className="text-primary font-semibold mb-1">{method.value}</p>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Clock className="w-12 h-12 text-primary" />
              <div>
                <h3 className="text-xl font-bold text-foreground">ساعات العمل</h3>
                <p className="text-muted-foreground">السبت - الخميس: 8 صباحاً - 10 مساءً</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-12 h-12 text-primary" />
              <div>
                <h3 className="text-xl font-bold text-foreground">الموقع</h3>
                <p className="text-muted-foreground">القاهرة، مصر</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Help;
