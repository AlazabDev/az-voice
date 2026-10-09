import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { fetchAgents } from "@/lib/app-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const Training = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const qc = useQueryClient();
  const { data: agents = [] } = useQuery({ queryKey: ["agents"], queryFn: fetchAgents });
  const agent = agents.find((a) => a.id === id);
  const [form, setForm] = useState({ name: "", greeting: "", instructions: "" });

  const { data: kb = [] } = useQuery({
    queryKey: ["kb", id], enabled: !!id,
    queryFn: async () => (await supabase.from("knowledge_items").select("id,title").eq("agent_id", id!)).data ?? [],
  });

  useEffect(() => {
    if (agent) setForm({ name: agent.name, greeting: agent.greeting ?? "", instructions: agent.instructions ?? "" });
  }, [agent]);

  useEffect(() => { if (!id && agents.length) navigate(`/app/training/${agents[0].id}`, { replace: true }); }, [id, agents, navigate]);

  const save = useMutation({
    mutationFn: async () => { const { error } = await supabase.from("agents").update(form).eq("id", id!); if (error) throw error; },
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["agents"] }); toast.success("تم حفظ التدريب"); },
    onError: () => toast.error("تعذّر الحفظ"),
  });

  if (!agents.length) return (
    <div className="space-y-4"><h1 className="text-2xl font-bold">تدريب الوكلاء</h1>
      <p className="text-muted-foreground">أنشئ وكيلاً أولاً لتتمكن من تدريبه.</p>
      <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90"><Link to="/app/agents">إنشاء وكيل</Link></Button>
    </div>
  );

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div><h1 className="text-2xl font-bold">تدريب الوكلاء</h1><p className="text-sm text-muted-foreground">علّم وكيلك كيف يتحدث ويتصرف مع عملائك</p></div>
        <Select value={id} onValueChange={(v) => navigate(`/app/training/${v}`)}>
          <SelectTrigger className="w-60"><SelectValue placeholder="اختر وكيلاً" /></SelectTrigger>
          <SelectContent>{agents.map((a) => <SelectItem key={a.id} value={a.id}>{a.name}</SelectItem>)}</SelectContent>
        </Select>
      </div>
      {agent && (
        <form onSubmit={(e) => { e.preventDefault(); save.mutate(); }} className="space-y-6">
          <Card>
            <CardHeader><CardTitle className="text-lg">الشخصية</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div><Label>اسم الوكيل</Label><Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
              <div><Label>رسالة الترحيب</Label><Textarea rows={2} value={form.greeting} onChange={(e) => setForm({ ...form, greeting: e.target.value })} placeholder="أهلاً بك في شركة ... معك سارة، كيف أقدر أساعدك؟" /></div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-lg">التعليمات والسلوك</CardTitle></CardHeader>
            <CardContent>
              <Textarea rows={10} value={form.instructions} onChange={(e) => setForm({ ...form, instructions: e.target.value })}
                placeholder={"- اسأل العميل عن اسمه ورقم هاتفه\n- اجمع نوع الخدمة والموقع والموعد المفضل\n- إذا طلب العميل التحدث مع موظف حوّل المكالمة\n- لا تذكر أسعاراً غير موجودة في قاعدة المعرفة"} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-lg">المعرفة المرتبطة</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {kb.length ? <ul className="text-sm list-disc ps-5 space-y-1">{kb.map((k) => <li key={k.id}>{k.title}</li>)}</ul>
                : <p className="text-sm text-muted-foreground">لا توجد معلومات مرتبطة بهذا الوكيل بعد.</p>}
              <Button asChild variant="outline" size="sm"><Link to="/app/knowledge">إدارة قاعدة المعرفة</Link></Button>
            </CardContent>
          </Card>
          <Button disabled={save.isPending} className="bg-secondary text-secondary-foreground hover:bg-secondary/90">حفظ التدريب</Button>
        </form>
      )}
    </div>
  );
};
export default Training;
