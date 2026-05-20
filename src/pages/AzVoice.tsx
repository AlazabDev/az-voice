import { useEffect } from "react";
import AzHeader from "@/components/azvoice/AzHeader";
import AzHero from "@/components/azvoice/AzHero";
import AzFeatures from "@/components/azvoice/AzFeatures";
import AzVoiceDemo from "@/components/azvoice/AzVoiceDemo";
import AzUseCases from "@/components/azvoice/AzUseCases";
import AzPricing from "@/components/azvoice/AzPricing";
import AzFooter from "@/components/azvoice/AzFooter";

const AzVoice = () => {
  useEffect(() => {
    // Initialize theme on first paint
    const stored = localStorage.getItem("azvoice-theme");
    const prefersDark =
      stored === "dark" ||
      (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", prefersDark);
    document.title = "AzVoice — صوت مصر .. حضارة تتكلم";
  }, []);

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <AzHeader />
      <main>
        <AzHero />
        <AzFeatures />
        <AzVoiceDemo />
        <AzUseCases />
        <AzPricing />
      </main>
      <AzFooter />
    </div>
  );
};

export default AzVoice;
