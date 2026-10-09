import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import logo from "@/assets/azvoice-logo.png";

const Auth = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => { if (user) navigate("/app", { replace: true }); }, [user, navigate]);

  const signIn = async (e: React.FormEvent) => {
    e.preventDefault(); setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) toast.error("بيانات الدخول غير صحيحة");
  };

  const signUp = async (e: React.FormEvent) => {
    e.preventDefault(); setBusy(true);
    const { error } = await supabase.auth.signUp({
      email, password,
      options: { emailRedirectTo: window.location.origin + "/app", data: { full_name: name } },
    });
    setBusy(false);
    if (error) toast.error(error.message);
    else toast.success("تم إنشاء الحساب — تحقق من بريدك لتأكيد التسجيل");
  };

  const google = async () => {
    const res = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin + "/auth" });
    if (res.error) toast.error("تعذّر الدخول عبر Google");
  };

  return (
    <div dir="rtl" className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-xl">
        <Link to="/" className="flex items-center justify-center gap-2 mb-6">
          <img src={logo} alt="AzVoico" className="h-10 w-10 object-contain" />
          <span className="text-2xl font-bold text-foreground">AzVoico</span>
        </Link>
        <Tabs defaultValue="in">
          <TabsList className="grid grid-cols-2 w-full mb-6">
            <TabsTrigger value="in">تسجيل الدخول</TabsTrigger>
            <TabsTrigger value="up">حساب جديد</TabsTrigger>
          </TabsList>
          <TabsContent value="in">
            <form onSubmit={signIn} className="space-y-4">
              <div><Label>البريد الإلكتروني</Label><Input type="email" required value={email} onChange={e => setEmail(e.target.value)} /></div>
              <div><Label>كلمة المرور</Label><Input type="password" required value={password} onChange={e => setPassword(e.target.value)} /></div>
              <Button disabled={busy} className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">دخول</Button>
            </form>
          </TabsContent>
          <TabsContent value="up">
            <form onSubmit={signUp} className="space-y-4">
              <div><Label>الاسم</Label><Input required value={name} onChange={e => setName(e.target.value)} /></div>
              <div><Label>البريد الإلكتروني</Label><Input type="email" required value={email} onChange={e => setEmail(e.target.value)} /></div>
              <div><Label>كلمة المرور</Label><Input type="password" minLength={6} required value={password} onChange={e => setPassword(e.target.value)} /></div>
              <Button disabled={busy} className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">إنشاء الحساب</Button>
            </form>
          </TabsContent>
        </Tabs>
        <div className="my-5 text-center text-xs text-muted-foreground">أو</div>
        <Button variant="outline" className="w-full" onClick={google}>المتابعة باستخدام Google</Button>
      </div>
    </div>
  );
};
export default Auth;
