import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Wrench, HelpCircle } from "lucide-react";

const FAQ = () => {
  const customerFAQs = [
    {
      question: "كيف يمكنني طلب خدمة صيانة؟",
      answer: "يمكنك طلب خدمة صيانة بسهولة من خلال زيارة موقعنا uberfix.shop واختيار نوع الخدمة المطلوبة، أو الاتصال بنا مباشرة على رقم خدمة العملاء."
    },
    {
      question: "ما هي أوقات العمل المتاحة؟",
      answer: "نعمل على مدار الساعة طوال أيام الأسبوع لخدمتك. يمكنك حجز موعد في أي وقت يناسبك، وسنرسل فنيًا متخصصًا في الوقت المحدد."
    },
    {
      question: "هل الفنيون معتمدون ومؤهلون؟",
      answer: "نعم، جميع الفنيين لدينا معتمدون ومدربون تدريبًا عاليًا في مجالاتهم. نحن نجري فحوصات شاملة للخلفية ونوفر التدريب المستمر لضمان أعلى جودة خدمة."
    },
    {
      question: "ما هي تكلفة الخدمة؟",
      answer: "تختلف تكلفة الخدمة حسب نوع الصيانة المطلوبة وحجم العمل. نقدم تقديرًا واضحًا للتكلفة قبل بدء العمل، بدون رسوم خفية."
    },
    {
      question: "هل تقدمون ضمانًا على الخدمات؟",
      answer: "نعم، نقدم ضمانًا على جميع خدماتنا. مدة الضمان تختلف حسب نوع الخدمة، ويتم توضيح تفاصيل الضمان في عقد الخدمة."
    },
    {
      question: "كيف يمكنني الدفع مقابل الخدمة؟",
      answer: "نقبل جميع طرق الدفع: النقد، بطاقات الائتمان، التحويل البنكي، والدفع الإلكتروني. الدفع يتم بعد إتمام العمل والتأكد من رضاك عن الخدمة."
    },
    {
      question: "ماذا لو لم أكن راضيًا عن الخدمة؟",
      answer: "رضاك هو أولويتنا. إذا لم تكن راضيًا عن الخدمة المقدمة، يرجى الاتصال بنا فورًا وسنعمل على حل المشكلة دون أي تكلفة إضافية."
    },
    {
      question: "هل يمكنني إلغاء أو تعديل موعد الخدمة؟",
      answer: "نعم، يمكنك إلغاء أو تعديل موعد الخدمة حتى 24 ساعة قبل الموعد المحدد دون أي رسوم إضافية. بعد ذلك قد تطبق رسوم إلغاء."
    },
    {
      question: "ما هي المناطق التي تغطونها؟",
      answer: "نغطي جميع مناطق المملكة العربية السعودية مع أكثر من 50 فرعًا في المدن الرئيسية. يمكنك التحقق من توفر الخدمة في منطقتك من خلال موقعنا."
    },
    {
      question: "هل تقدمون خدمات صيانة طارئة؟",
      answer: "نعم، نقدم خدمات صيانة طارئة على مدار الساعة للحالات العاجلة مثل تسربات المياه، الأعطال الكهربائية الخطرة، وغيرها."
    }
  ];

  const technicianFAQs = [
    {
      question: "كيف يمكنني الانضمام إلى UberFix كفني؟",
      answer: "يمكنك التسجيل من خلال موقعنا الإلكتروني uberfix.shop في قسم 'انضم كفني'. ستحتاج إلى تقديم معلوماتك الشخصية، خبراتك، والشهادات المهنية."
    },
    {
      question: "ما هي المؤهلات المطلوبة للانضمام؟",
      answer: "نبحث عن فنيين ذوي خبرة لا تقل عن سنتين في مجال التخصص، شهادات معتمدة، وسجل عمل نظيف. كما نقدم تدريبًا إضافيًا لجميع الفنيين الجدد."
    },
    {
      question: "كيف يتم تحديد أجر الفني؟",
      answer: "يحصل الفني على نسبة من قيمة كل خدمة يقوم بها، بالإضافة إلى مكافآت على الأداء المتميز والتقييمات الإيجابية من العملاء. النظام شفاف وعادل."
    },
    {
      question: "هل يوفر UberFix تأمينًا صحيًا للفنيين؟",
      answer: "نعم، نوفر تأمينًا صحيًا شاملًا لجميع الفنيين المسجلين بدوام كامل، بالإضافة إلى تأمين ضد الحوادث أثناء العمل."
    },
    {
      question: "كيف يتم تلقي طلبات الخدمة؟",
      answer: "يتلقى الفنيون طلبات الخدمة عبر تطبيق UberFix الخاص. يمكنك قبول أو رفض الطلبات بناءً على توفرك وموقعك."
    },
    {
      question: "هل يمكنني العمل بدوام جزئي؟",
      answer: "نعم، نقدم مرونة كاملة في ساعات العمل. يمكنك تحديد أوقات توفرك والعمل حسب جدولك الخاص، سواء بدوام كامل أو جزئي."
    },
    {
      question: "كيف يتم الدفع للفنيين؟",
      answer: "يتم الدفع أسبوعيًا عبر تحويل بنكي مباشر. يمكنك متابعة أرباحك والطلبات المنجزة عبر لوحة التحكم الخاصة بك في التطبيق."
    },
    {
      question: "ما هي سياسة التقييمات والشكاوى؟",
      answer: "نأخذ تقييمات العملاء بجدية. التقييمات الإيجابية تؤدي إلى مكافآت، بينما نعمل مع الفنيين على تحسين أي نقاط ضعف. نحن داعمون ونوفر التدريب المستمر."
    },
    {
      question: "هل يوفر UberFix أدوات ومعدات العمل؟",
      answer: "يجب على الفني توفير أدواته الأساسية. ومع ذلك، نوفر بعض المعدات المتخصصة والمواد الاستهلاكية للمشاريع الكبيرة عند الحاجة."
    },
    {
      question: "كيف يتم التعامل مع النزاعات مع العملاء؟",
      answer: "لدينا فريق دعم متخصص للتعامل مع أي نزاعات. نحن نقف إلى جانب الفنيين ونوفر الحماية القانونية والدعم عند الحاجة."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/10 p-4 rounded-full">
              <HelpCircle className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            الأسئلة الشائعة
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            إجابات على الأسئلة الأكثر شيوعًا حول خدماتنا للعملاء والفنيين
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Tabs defaultValue="customers" className="w-full" dir="rtl">
            <TabsList className="grid w-full grid-cols-2 mb-12 h-auto p-1">
              <TabsTrigger 
                value="customers" 
                className="flex items-center gap-2 py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Users className="w-5 h-5" />
                <span>أسئلة العملاء</span>
              </TabsTrigger>
              <TabsTrigger 
                value="technicians" 
                className="flex items-center gap-2 py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Wrench className="w-5 h-5" />
                <span>أسئلة الفنيين</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="customers" className="mt-0">
              <div className="bg-card rounded-xl p-6 md:p-8 shadow-lg border border-border">
                <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <Users className="w-7 h-7 text-primary" />
                  أسئلة العملاء
                </h2>
                <Accordion type="single" collapsible className="w-full space-y-2">
                  {customerFAQs.map((faq, index) => (
                    <AccordionItem 
                      key={`customer-${index}`} 
                      value={`customer-${index}`}
                      className="bg-secondary/20 rounded-lg px-4 border border-border/50 hover:border-primary/50 transition-colors"
                    >
                      <AccordionTrigger className="text-right hover:no-underline py-4 text-foreground font-semibold">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-right text-muted-foreground pb-4 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>

            <TabsContent value="technicians" className="mt-0">
              <div className="bg-card rounded-xl p-6 md:p-8 shadow-lg border border-border">
                <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <Wrench className="w-7 h-7 text-primary" />
                  أسئلة الفنيين
                </h2>
                <Accordion type="single" collapsible className="w-full space-y-2">
                  {technicianFAQs.map((faq, index) => (
                    <AccordionItem 
                      key={`tech-${index}`} 
                      value={`tech-${index}`}
                      className="bg-secondary/20 rounded-lg px-4 border border-border/50 hover:border-primary/50 transition-colors"
                    >
                      <AccordionTrigger className="text-right hover:no-underline py-4 text-foreground font-semibold">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-right text-muted-foreground pb-4 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>
          </Tabs>

          {/* Contact CTA */}
          <div className="mt-12 text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-bold mb-3 text-foreground">لم تجد إجابة لسؤالك؟</h3>
            <p className="text-muted-foreground mb-6">
              فريقنا جاهز لمساعدتك على مدار الساعة
            </p>
            <a 
              href="https://uberfix.shop" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105"
            >
              تواصل معنا الآن
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;