import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { MessagesSquare } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { fetchAgents, channelLabel, convStatusLabel, type Conversation } from "@/lib/app-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

type Line = { role: string; text: string };

const Conversations = () => {
  const qc = useQueryClient();
  const [status, setStatus] = useState("all");
  const [selected, setSelected] = useState<Conversation | null>(null);
  const { data: agents = [] } = useQuery({ queryKey: ["agents"], queryFn: fetchAgents });
  const { data: convs = [] } = useQuery({
    queryKey: ["conversations"],
    queryFn: async () => { const { data, error } = await supabase.from("agent_conversations").select("*").order("created_at", { ascending: false }); if (error) throw error; return data; },
  });

  const setConvStatus = useMutation({
    mutationFn: async ({ id, s }: { id: string; s: string }) => { const { error } = await supabase.from("agent_conversations").update({ status: s }).eq("id", id); if (error) throw error; },
    onSuccess: (_d, v) => { qc.invalidateQueries({ queryKey: ["conversations"] }); setSelected((c) => (c ? { ...c, status: v.s } : c)); },
  });

  const list = status === "all" ? convs : convs.filter((c) => c.status === status);
  const agentName = (id: string | null) => agents.find((a) => a.id === id)?.name ?? "—";

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div><h1 className="text-2xl font-bold">المحادثات</h1><p className="text-sm text-muted-foreground">كل المكالمات والمحادثات التي تعامل معها وكلاؤك</p></div>
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger className="w-44"><SelectValue /></SelectTrigger>
          <SelectContent><SelectItem value="all">الكل</SelectItem>{Object.entries(convStatusLabel).map(([k, v]) => <SelectItem key={k} value={k}>{v}</SelectItem>)}</SelectContent>
        </Select>
      </div>
      {list.length === 0 ? (
        <Card><CardContent className="p-10 text-center space-y-2"><MessagesSquare className="h-10 w-10 mx-auto text-secondary" /><p className="text-sm text-muted-foreground">ستظهر هنا المحادثات بمجرد أن يبدأ وكلاؤك في استقبال العملاء.</p></CardContent></Card>
      ) : (
        <Card><CardContent className="p-0 divide-y divide-border">
          {list.map((c) => (
            <button key={c.id} onClick={() => setSelected(c)} className="w-full text-start p-4 flex flex-wrap items-center justify-between gap-2 hover:bg-muted/50">
              <div>
                <div className="font-medium">{c.customer_name || "عميل"} <span className="text-xs text-muted-foreground">{c.customer_phone}</span></div>
                <div className="text-xs text-muted-foreground">{agentName(c.agent_id)} · {channelLabel[c.channel] ?? c.channel} · {new Date(c.created_at).toLocaleString("ar-EG")}</div>
              </div>
              <Badge variant={c.status === "resolved" ? "default" : "secondary"}>{convStatusLabel[c.status] ?? c.status}</Badge>
            </button>
          ))}
        </CardContent></Card>
      )}
      <Sheet open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <SheetContent side="left" dir="rtl" className="w-full sm:max-w-md overflow-y-auto">
          {selected && (<>
            <SheetHeader><SheetTitle>{selected.customer_name || "عميل"}</SheetTitle></SheetHeader>
            <div className="mt-4 space-y-4 text-sm">
              {selected.summary && <p className="rounded-lg bg-muted p-3">{selected.summary}</p>}
              <div className="space-y-2">
                {((selected.transcript as Line[]) ?? []).map((l, i) => (
                  <div key={i} className={`rounded-xl px-3 py-2 max-w-[85%] ${l.role === "agent" ? "bg-muted" : "bg-primary text-primary-foreground ms-auto"}`}>{l.text}</div>
                ))}
              </div>
              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline" onClick={() => setConvStatus.mutate({ id: selected.id, s: "resolved" })}>تم الحل</Button>
                <Button size="sm" variant="outline" onClick={() => setConvStatus.mutate({ id: selected.id, s: "handoff" })}>تحويل لموظف</Button>
              </div>
            </div>
          </>)}
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default Conversations;
