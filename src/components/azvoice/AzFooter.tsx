import { Facebook, Twitter, Instagram, Linkedin, Mic } from "lucide-react";

export const AzFooter = () => {
  return (
    <footer className="bg-muted/50 border-t border-border pt-14 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground">
                <Mic className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold text-foreground">
                AzVoice <span className="text-secondary">𓋹</span>
              </span>
            </div>
            <p className="text-secondary font-bold text-lg mb-2">
              صوت مصر .. حضارة تتكلم
            </p>
            <p className="text-muted-foreground text-sm max-w-md">
              من قلب الأهرامات.. صوت للحضارة. وكيل ذكاء اصطناعي مصمم خصيصاً
              للشركات العربية، يتكلم بلغتك ويفهم عملاءك.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">المنتج</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-secondary transition-colors">المميزات</a></li>
              <li><a href="#demo" className="hover:text-secondary transition-colors">جرب الديمو</a></li>
              <li><a href="#pricing" className="hover:text-secondary transition-colors">الأسعار</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">تواصل معنا</h4>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="w-10 h-10 rounded-full bg-card border border-border hover:bg-secondary hover:text-secondary-foreground hover:border-secondary flex items-center justify-center transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} AzVoice. حقوق الأجداد محفوظة 𓋹</p>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-secondary">سياسة الخصوصية</a>
            <a href="/terms" className="hover:text-secondary">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AzFooter;
