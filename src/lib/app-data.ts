import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export type Agent = Tables<"agents">;
export type KnowledgeItem = Tables<"knowledge_items">;
export type Conversation = Tables<"agent_conversations">;

export const fetchAgents = async () => {
  const { data, error } = await supabase.from("agents").select("*").order("created_at", { ascending: false });
  if (error) throw error;
  return data;
};

export const statusLabel: Record<string, string> = { draft: "مسودة", active: "نشط", paused: "متوقف" };
export const convStatusLabel: Record<string, string> = { open: "مفتوحة", resolved: "تم الحل", handoff: "تحويل لموظف" };
export const channelLabel: Record<string, string> = { voice: "مكالمة صوتية", whatsapp: "واتساب", web: "الموقع" };
