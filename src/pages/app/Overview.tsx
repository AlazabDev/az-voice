import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Bot, MessagesSquare, BookOpen, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { channelLabel, convStatusLabel } from "@/lib/app-data";

const count = async (table: "agents" | "agent_conversations" | "knowledge_items", filter?: [string, string]) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let q: any = (supabase.from(table) as any).select("id", { count: "exact", head: true });
  if (filter) q = q.eq(filter[0], filter[1]);
  const { count } = await q;
  return count ?? 0;
};

const Overview = () => {
  const { data } = useQuery({
    queryKey: ["overview"],
    queryFn: async () => {
      const [agents, convs, resolved, kb, recent] = await Promise.all([
        count("agents"), count("agent_conversations"), count("agent_conversations", ["status", "resolved"]), count("knowledge_items"),
        supabase.from("agent_conversations").select("*").order("created_at", { ascending: false }).limit(5),
      ]);
      return { agents, convs, resolved, kb, recent: recent.data ?? [] };
    },
  });

  const stats = [
    { label: "الوكلاء", value: data?.agents ?? 0, icon: Bot },
    { label: "المحادثات", value: data?.convs ?? 0, icon: MessagesSquare },
    { label: "تم حلها", value: data?.resolved ?? 0, icon: CheckCircle2 },
    { label: "عناصر المعرفة", value: data?.kb ?? 0, icon: BookOpen },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">لوحة التحكم</h1>
          <p className="text-muted-foreground text-sm">نظرة سريعة على أداء وكلائك</p>
        </div>
        <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90"><Link to="/app/agents">+ وكيل جديد</Link></Button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <Card key={s.label}>
            <CardContent className="p-5 flex items-center gap-4">
              <div className="h-11 w-11 rounded-xl bg-secondary/15 flex items-center justify-center"><s.icon className="h-5 w-5 text-secondary" /></div>
              <div><div className="text-2xl font-bold">{s.value}</div><div className="text-xs text-muted-foreground">{s.label}</div></div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader><CardTitle className="text-lg">أحدث المحادثات</CardTitle></CardHeader>
        <CardContent>
          {data?.recent.length ? (
            <ul className="divide-y divide-border">
              {data.recent.map((c) => (
                <li key={c.id} className="py-3 flex justify-between text-sm">
                  <span>{c.customer_name || "عميل"} · {channelLabel[c.channel] ?? c.channel}</span>
                  <span className="text-muted-foreground">{convStatusLabel[c.status] ?? c.status}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">لا توجد محادثات بعد. أنشئ وكيلاً وابدأ استقبال العملاء.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
export default Overview;
