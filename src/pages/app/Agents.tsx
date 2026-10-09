import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Bot, Trash2, GraduationCap } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { fetchAgents, statusLabel } from "@/lib/app-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const Agents = () => {
  const { user } = useAuth();
  const qc = useQueryClient();
  const { data: agents = [], isLoading } = useQuery({ queryKey: ["agents"], queryFn: fetchAgents });
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", description: "", language: "ar", voice: "female" });

  const create = useMutation({
    mutationFn: async () => {
      const { error } = await supabase.from("agents").insert({ ...form, user_id: user!.id });
      if (error) throw error;
    },
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["agents"] }); setOpen(false); setForm({ name: "", description: "", language: "ar", voice: "female" }); toast.success("تم إنشاء الوكيل"); },
    onError: () => toast.error("تعذّر إنشاء الوكيل"),
  });

  const remove = useMutation({
    mutationFn: async (id: string) => { const { error } = await supabase.from("agents").delete().eq("id", id); if (error) throw error; },
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["agents"] }); toast.success("تم الحذف"); },
  });

  const toggle = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      const { error } = await supabase.from("agents").update({ status }).eq("id", id); if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["agents"] }),
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div><h1 className="text-2xl font-bold">الوكلاء</h1><p className="text-sm text-muted-foreground">أنشئ وكلاء دعم صوتي لشركتك</p></div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild><Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">+ وكيل جديد</Button></DialogTrigger>
          <DialogContent dir="rtl">
            <DialogHeader><DialogTitle>وكيل جديد</DialogTitle></DialogHeader>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); create.mutate(); }}>
              <div><Label>اسم الوكيل</Label><Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="مثال: سارة - خدمة العملاء" /></div>
              <div><Label>الوصف</Label><Textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="ما الذي يقوم به هذا الوكيل؟" /></div>
              <div className="grid grid-cols-2 gap-3">
                <div><Label>اللغة</Label>
                  <Select value={form.language} onValueChange={(v) => setForm({ ...form, language: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent><SelectItem value="ar">العربية</SelectItem><SelectItem value="en">English</SelectItem><SelectItem value="both">الاثنين</SelectItem></SelectContent>
                  </Select>
                </div>
                <div><Label>الصوت</Label>
                  <Select value={form.voice} onValueChange={(v) => setForm({ ...form, voice: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent><SelectItem value="female">نسائي</SelectItem><SelectItem value="male">رجالي</SelectItem></SelectContent>
                  </Select>
                </div>
              </div>
              <Button disabled={create.isPending} className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">إنشاء</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {isLoading ? <p className="text-muted-foreground">جاري التحميل...</p> : agents.length === 0 ? (
        <Card><CardContent className="p-10 text-center space-y-3">
          <Bot className="h-10 w-10 mx-auto text-secondary" />
          <p className="font-semibold">لا يوجد وكلاء بعد</p>
          <p className="text-sm text-muted-foreground">ابدأ بإنشاء أول وكيل دعم لشركتك.</p>
        </CardContent></Card>
      ) : (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {agents.map((a) => (
            <Card key={a.id}>
              <CardContent className="p-5 space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-secondary/15 flex items-center justify-center"><Bot className="h-5 w-5 text-secondary" /></div>
                    <div><div className="font-semibold">{a.name}</div><div className="text-xs text-muted-foreground">{a.language === "en" ? "English" : a.language === "both" ? "عربي / English" : "العربية"} · {a.voice === "male" ? "رجالي" : "نسائي"}</div></div>
                  </div>
                  <Badge variant={a.status === "active" ? "default" : "secondary"}>{statusLabel[a.status] ?? a.status}</Badge>
                </div>
                {a.description && <p className="text-sm text-muted-foreground line-clamp-2">{a.description}</p>}
                <div className="flex gap-2">
                  <Button asChild size="sm" variant="outline" className="flex-1"><Link to={`/app/training/${a.id}`}><GraduationCap className="h-4 w-4 me-1" />تدريب</Link></Button>
                  <Button size="sm" variant="outline" onClick={() => toggle.mutate({ id: a.id, status: a.status === "active" ? "paused" : "active" })}>
                    {a.status === "active" ? "إيقاف" : "تفعيل"}
                  </Button>
                  <Button size="icon" variant="ghost" aria-label="حذف" onClick={() => confirm("حذف هذا الوكيل؟") && remove.mutate(a.id)}><Trash2 className="h-4 w-4" /></Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
export default Agents;
