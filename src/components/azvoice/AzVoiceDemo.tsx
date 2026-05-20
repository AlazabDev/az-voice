import { useCallback, useState } from "react";
import { ConversationProvider, useConversation } from "@elevenlabs/react";
import { Mic, MicOff, Phone, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const AzVoiceDemoInner = () => {
  const [isConnecting, setIsConnecting] = useState(false);

  const conversation = useConversation({
    onConnect: () => toast.success("اتصلت بـ رع 🎙️"),
    onDisconnect: () => toast.info("انتهت المكالمة"),
    onError: (e: any) => {
      console.error("ElevenLabs error:", e);
      toast.error("في مشكلة في الاتصال، حاول تاني");
    },
  });

  const connected = conversation.status === "connected";
  const speaking = conversation.isSpeaking;

  const start = useCallback(async () => {
    setIsConnecting(true);

    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });

      const { data, error } = await supabase.functions.invoke("elevenlabs-token");

      if (error || !data?.token) {
        throw new Error(error?.message || "فشل الحصول على التوكن");
      }

      await conversation.startSession({
        conversationToken: data.token,
        connectionType: "webrtc",
      });
    } catch (e: any) {
      console.error(e);
      toast.error(e?.message || "تعذّر بدء المحادثة");
    } finally {
      setIsConnecting(false);
    }
  }, [conversation]);

  const stop = useCallback(async () => {
    await conversation.endSession();
  }, [conversation]);

  return (
    <section id="demo" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-secondary text-2xl mb-2">𓋹</div>

          <h2 className="text-3xl md:text-5xl font-black text-foreground">
            اتكلم مع <span className="text-secondary">رع</span> دلوقتي
          </h2>

          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            وكيل صوتي حي بشخصية فرعونية. اضغط الزرار، اتكلم، وهيرد عليك بصوته.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="relative rounded-3xl bg-card border-2 border-border p-8 md:p-10 text-center">
            <div className="relative w-40 h-40 mx-auto mb-6 flex items-center justify-center">
              <div
                className={`absolute inset-0 rounded-full bg-secondary/20 ${
                  connected ? (speaking ? "animate-ping" : "animate-pulse") : ""
                }`}
              />

              <div
                className={`absolute inset-4 rounded-full bg-secondary/30 ${
                  speaking ? "animate-pulse" : ""
                }`}
              />

              <div className="relative w-24 h-24 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground text-5xl shadow-xl">
                𓃥
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-1">رع</h3>

            <p className="text-secondary font-semibold mb-1">
              {connected ? (speaking ? "بيتكلم..." : "بيسمعك...") : "أهلاً يا باشا"}
            </p>

            <p className="text-xs text-muted-foreground mb-8">
              الحالة: {connected ? "متصل" : "غير متصل"}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {!connected ? (
                <Button
                  size="lg"
                  onClick={start}
                  disabled={isConnecting}
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold rounded-full px-6"
                >
                  {isConnecting ? (
                    <Loader2 className="ml-2 h-5 w-5 animate-spin" />
                  ) : (
                    <Mic className="ml-2 h-5 w-5" />
                  )}

                  {isConnecting ? "بيتصل..." : "اضغط وتكلم"}
                </Button>
              ) : (
                <Button
                  size="lg"
                  onClick={stop}
                  variant="destructive"
                  className="rounded-full px-6 font-bold"
                >
                  <MicOff className="ml-2 h-5 w-5" />
                  إنهاء المكالمة
                </Button>
              )}

              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-6 font-bold border-2"
                asChild
              >
                <a href="tel:+201004006620">
                  <Phone className="ml-2 h-5 w-5" />
                  اتصل بنا
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const AzVoiceDemo = () => {
  return (
    <ConversationProvider>
      <AzVoiceDemoInner />
    </ConversationProvider>
  );
};

export default AzVoiceDemo;
