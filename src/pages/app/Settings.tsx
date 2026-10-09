import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Settings = () => {
  const { user } = useAuth();
  const [form, setForm] = useState({ full_name: "", company_name: "", phone: "" });
  const [saving, setSaving] = useState(false);
  const { data } = useQuery({
    queryKey: ["profile", user?.id], enabled: !!user,
    queryFn: async () => (await supabase.from("profiles").select("*").eq("id", user!.id).maybeSingle()).data,
  });
  useEffect(() => { if (data) setForm({ full_name: data.full_name ?? "", company_name: data.company_name ?? "", phone: data.phone ?? "" }); }, [data]);

  const save = async (e: React.FormEvent) => {
    e.preventDefault(); setSaving(true);
    const { error } = await supabase.from("profiles").upsert({ id: user!.id, ...form });
    setSaving(false);
    error ? toast.error("تعذّر الحفظ") : toast.success("تم حفظ الإعدادات");
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <div><h1 className="text-2xl font-bold">الإعدادات</h1><p className="text-sm text-muted-foreground">بيانات حسابك وشركتك</p></div>
      <Card>
        <CardHeader><CardTitle className="text-lg">الملف الشخصي والشركة</CardTitle></CardHeader>
        <CardContent>
          <form onSubmit={save} className="space-y-4">
            <div><Label>البريد الإلكتروني</Label><Input value={user?.email ?? ""} disabled /></div>
            <div><Label>الاسم</Label><Input value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} /></div>
            <div><Label>اسم الشركة</Label><Input value={form.company_name} onChange={(e) => setForm({ ...form, company_name: e.target.value })} /></div>
            <div><Label>رقم الهاتف</Label><Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></div>
            <Button disabled={saving} className="bg-secondary text-secondary-foreground hover:bg-secondary/90">حفظ</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
export default Settings;
