import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { BookOpen, Trash2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { fetchAgents } from "@/lib/app-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const categories: Record<string, string> = { general: "عام", services: "الخدمات", pricing: "الأسعار", faq: "أسئلة شائعة", policies: "السياسات" };
const empty = { title: "", content: "", category: "general", agent_id: "all" };

const Knowledge = () => {
  const { user } = useAuth();
  const qc = useQueryClient();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState(empty);
  const { data: agents = [] } = useQuery({ queryKey: ["agents"], queryFn: fetchAgents });
  const { data: items = [] } = useQuery({
    queryKey: ["knowledge"],
    queryFn: async () => { const { data, error } = await supabase.from("knowledge_items").select("*").order("created_at", { ascending: false }); if (error) throw error; return data; },
  });

  const add = useMutation({
    mutationFn: async () => {
      const { error } = await supabase.from("knowledge_items").insert({
        title: form.title, content: form.content, category: form.category,
        agent_id: form.agent_id === "all" ? null : form.agent_id, user_id: user!.id,
      });
      if (error) throw error;
    },
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["knowledge"] }); setOpen(false); setForm(empty); toast.success("تمت الإضافة"); },
    onError: () => toast.error("تعذّرت الإضافة"),
  });
  const remove = useMutation({
    mutationFn: async (id: string) => { const { error } = await supabase.from("knowledge_items").delete().eq("id", id); if (error) throw error; },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["knowledge"] }),
  });

  const filtered = items.filter((i) => (i.title + i.content).toLowerCase().includes(search.toLowerCase()));
  const agentName = (id: string | null) => (id ? agents.find((a) => a.id === id)?.name ?? "—" : "كل الوكلاء");

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div><h1 className="text-2xl font-bold">قاعدة المعرفة</h1><p className="text-sm text-muted-foreground">معلومات شركتك التي يعتمد عليها الوكيل في الرد</p></div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild><Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">+ إضافة معلومة</Button></DialogTrigger>
          <DialogContent dir="rtl" className="max-w-lg">
            <DialogHeader><DialogTitle>معلومة جديدة</DialogTitle></DialogHeader>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); add.mutate(); }}>
              <div><Label>العنوان</Label><Input required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="مثال: مواعيد العمل" /></div>
              <div><Label>المحتوى</Label><Textarea required rows={6} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} /></div>
              <div className="grid grid-cols-2 gap-3">
                <div><Label>التصنيف</Label>
                  <Select value={form.category} onValueChange={(v) => setForm({ ...form, category: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>{Object.entries(categories).map(([k, v]) => <SelectItem key={k} value={k}>{v}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div><Label>الوكيل</Label>
                  <Select value={form.agent_id} onValueChange={(v) => setForm({ ...form, agent_id: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent><SelectItem value="all">كل الوكلاء</SelectItem>{agents.map((a) => <SelectItem key={a.id} value={a.id}>{a.name}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
              </div>
              <Button disabled={add.isPending} className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">حفظ</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <Input placeholder="ابحث في قاعدة المعرفة..." value={search} onChange={(e) => setSearch(e.target.value)} className="max-w-sm" />
      {filtered.length === 0 ? (
        <Card><CardContent className="p-10 text-center space-y-2"><BookOpen className="h-10 w-10 mx-auto text-secondary" /><p className="text-sm text-muted-foreground">أضف مواعيد العمل، الخدمات، الأسعار، والأسئلة الشائعة.</p></CardContent></Card>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map((i) => (
            <Card key={i.id}><CardContent className="p-5 space-y-2">
              <div className="flex justify-between items-start gap-2">
                <div className="font-semibold">{i.title}</div>
                <Button size="icon" variant="ghost" aria-label="حذف" onClick={() => remove.mutate(i.id)}><Trash2 className="h-4 w-4" /></Button>
              </div>
              <p className="text-sm text-muted-foreground whitespace-pre-line line-clamp-4">{i.content}</p>
              <div className="flex gap-2"><Badge variant="secondary">{categories[i.category] ?? i.category}</Badge><Badge variant="outline">{agentName(i.agent_id)}</Badge></div>
            </CardContent></Card>
          ))}
        </div>
      )}
    </div>
  );
};
export default Knowledge;
