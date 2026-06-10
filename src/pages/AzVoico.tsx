import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import azvoiceLogo from "@/assets/azvoice-logo.png";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Bot,
  BookOpen,
  MessageSquare,
  ClipboardList,
  Users,
  LayoutDashboard,
  Layers,
  Plug,
  Check,
  Menu,
  X,
  Sparkles,
  Zap,
  Globe,
  ShieldCheck,
  ArrowRight,
  PlayCircle,
  Clock,
  Phone,
  Mail,
  Database,
  Workflow,
  Building2,
  Home,
  Stethoscope,
  ShoppingBag,
  GraduationCap,
  UtensilsCrossed,
  Wrench,
  Store,
} from "lucide-react";

// Brand accent — visible across CTAs, badges and key highlights
const GOLD = "#FFB900";

/* -----------------------------------------------------------
   AzVoico — Standalone landing page
   Design system is local to this page (dark SaaS aesthetic).
----------------------------------------------------------- */

const nav = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it works" },
  { href: "#use-cases", label: "Use Cases" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

const smoothScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  if (!href.startsWith("#")) return;
  const el = document.getElementById(href.slice(1));
  if (!el) return;
  e.preventDefault();
  const top = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top, behavior: "smooth" });
  history.replaceState(null, "", href);
};

const Logo = () => (
  <a
    href="#top"
    onClick={(e) => smoothScrollTo(e, "#top")}
    className="flex items-center gap-2 group"
  >
    <img
      src={azvoiceLogo}
      alt="AzVoico"
      className="w-9 h-9 rounded-xl object-contain"
    />
    <span className="text-xl font-bold text-white tracking-tight">
      Az<span className="text-[#FFB900]">Voico</span>
    </span>
  </a>
);

const Header = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("top");

  useEffect(() => {
    const ids = ["top", ...nav.map((n) => n.href.slice(1))];
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!targets.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-72px 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0F1115]/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => {
            const isActive = active === n.href.slice(1);
            return (
              <a
                key={n.href}
                href={n.href}
                onClick={(e) => smoothScrollTo(e, n.href)}
                className={`relative text-sm transition-colors ${
                  isActive ? "text-white" : "text-[#A1A1AA] hover:text-white"
                }`}
              >
                {n.label}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 rounded-full bg-[#030957] transition-all duration-300 ${
                    isActive ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
          <a
            href="#cta"
            onClick={(e) => smoothScrollTo(e, "#cta")}
            className="text-sm text-[#A1A1AA] hover:text-white transition-colors"
          >
            Book Demo
          </a>
          <Button className="bg-[#FFB900] hover:bg-[#FFC830] text-[#0F1115] font-semibold rounded-full px-5 border-0 shadow-[0_8px_24px_-8px_rgba(255,185,0,0.6)]">
            Start Free
          </Button>
        </div>
        <div className="md:hidden flex items-center gap-1">
          <LanguageSwitcher />
          <ThemeToggle />
          <button className="text-white" onClick={() => setOpen(!open)} aria-label="menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#0F1115] px-5 py-4 space-y-3">
          {nav.map((n) => {
            const isActive = active === n.href.slice(1);
            return (
              <a
                key={n.href}
                href={n.href}
                onClick={(e) => {
                  setOpen(false);
                  smoothScrollTo(e, n.href);
                }}
                className={`block text-sm ${
                  isActive ? "text-white font-semibold" : "text-[#A1A1AA] hover:text-white"
                }`}
              >
                {n.label}
              </a>
            );
          })}
          <Button className="w-full bg-[#FFB900] hover:bg-[#FFC830] text-[#0F1115] font-semibold rounded-full border-0">
            Start Free
          </Button>
        </div>
      )}
    </header>
  );
};

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FFB900]/30 bg-[#FFB900]/10 text-xs font-medium text-[#FFB900]">
    <Sparkles className="w-3.5 h-3.5" /> {children}
  </div>
);

const Hero = () => (
  <section id="top" className="relative overflow-hidden pt-16 md:pt-24 pb-16 md:pb-24">
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[#030957]/20 blur-[160px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#030957]/10 blur-[140px]" />
    </div>
    <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <SectionLabel>AI Customer Support, simplified</SectionLabel>
        <h1 className="mt-5 text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight">
          Build AI Customer Support{" "}
          <span className="text-[#FFB900]">Agents</span>{" "}
          for Your Business
        </h1>
        <p className="mt-6 text-lg text-[#A1A1AA] max-w-xl leading-relaxed">
          AzVoico helps small businesses create smart AI agents that answer customers, collect requests,
          organize conversations, and work 24/7 across your website, WhatsApp, and support channels.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg" className="bg-[#FFB900] hover:bg-[#FFC830] text-[#0F1115] font-semibold rounded-full px-6 h-12 shadow-[0_10px_30px_-10px_rgba(255,185,0,0.6)]">
            Create Your Agent <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10 rounded-full px-6 h-12">
            <PlayCircle className="mr-2 w-5 h-5" /> Watch Demo
          </Button>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl">
          {[
            { icon: Clock, label: "24/7 Support" },
            { icon: Zap, label: "No Code" },
            { icon: MessageSquare, label: "WhatsApp Ready" },
            { icon: BookOpen, label: "Trained on You" },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
              <b.icon className="w-4 h-4 text-[#FFB900]" />
              <span className="text-xs text-white/90">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
      <ChatMockup />
    </div>
  </section>
);

const ChatMockup = () => (
  <div className="relative">
    <div className="absolute -inset-4 bg-[#030957]/25 blur-2xl rounded-3xl" />
    <div className="relative rounded-2xl border border-white/10 bg-[#15171D]/90 backdrop-blur-xl shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#030957] flex items-center justify-center">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">AzVoico Agent</p>
            <p className="text-[10px] text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Online
            </p>
          </div>
        </div>
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </div>
      </div>
      <div className="p-5 space-y-4 min-h-[320px]">
        <Bubble side="left">Do you offer maintenance service?</Bubble>
        <Bubble side="right">
          Yes, we can help. Please share your location, service type, and preferred visit time.
        </Bubble>
        <Bubble side="left">Cairo · AC repair · Tomorrow 5 PM</Bubble>
        <Bubble side="right">
          Got it. Ticket <span className="text-[#FFB900]">#A2381</span> created and assigned to your area team.
        </Bubble>
        <div className="flex items-center gap-2 text-[#A1A1AA] text-xs">
          <span className="w-2 h-2 bg-[#030957] rounded-full animate-pulse" />
          Agent is typing…
        </div>
      </div>
    </div>
  </div>
);

const Bubble = ({ side, children }: { side: "left" | "right"; children: React.ReactNode }) => (
  <div className={`flex ${side === "right" ? "justify-end" : "justify-start"}`}>
    <div
      className={`max-w-[80%] text-sm px-4 py-2.5 rounded-2xl ${
        side === "right"
          ? "bg-[#F1F5F9] text-[#0F1115] rounded-br-sm"
          : "bg-white/5 text-white/90 border border-white/10 rounded-bl-sm"
      }`}
    >
      {children}
    </div>
  </div>
);

const Problem = () => (
  <section className="py-20 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">
      <div className="max-w-3xl">
        <SectionLabel>The problem</SectionLabel>
        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight">
          Small teams lose customers when support is slow.
        </h2>
        <p className="mt-5 text-lg text-[#A1A1AA]">
          Messages pile up across WhatsApp, email, and your website. Customers wait. Requests get
          forgotten. Hiring a full support team is expensive, and slow replies cost you real revenue.
        </p>
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { t: "Customers ask all day", d: "Inbound never stops." },
          { t: "Replies arrive late", d: "Trust drops by the minute." },
          { t: "Channels are scattered", d: "WhatsApp, mail, web — chaos." },
          { t: "Hiring is expensive", d: "Support payroll grows fast." },
        ].map((p) => (
          <div key={p.t} className="p-5 rounded-xl bg-white/5 border border-white/10">
            <p className="text-white font-semibold">{p.t}</p>
            <p className="mt-1 text-sm text-[#A1A1AA]">{p.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section className="py-20 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12">
      <div>
        <SectionLabel>The solution</SectionLabel>
        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight">
          AzVoico gives every small business its own AI support agent.
        </h2>
        <p className="mt-5 text-lg text-[#A1A1AA]">
          A dedicated, trained agent that understands your services, answers customers in seconds,
          and only hands off when human help is truly needed.
        </p>
      </div>
      <ul className="space-y-3">
        {[
          "Understands your services and policies",
          "Answers frequent questions instantly",
          "Collects customer details and requests",
          "Classifies request type and urgency",
          "Routes complex conversations to your team",
          "Works on your website, WhatsApp, and more",
          "Keeps a searchable conversation history",
          "Trains on documents, FAQs, and knowledge",
        ].map((s) => (
          <li key={s} className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
            <div className="w-6 h-6 rounded-full bg-[#030957] flex items-center justify-center flex-shrink-0">
              <Check className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-white/90 text-sm">{s}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const features = [
  { icon: Bot, title: "AI Support Agent Builder", desc: "Create and customize your support agent without writing a single line of code." },
  { icon: BookOpen, title: "Business Knowledge Training", desc: "Train your agent with services, FAQs, documents, and internal policies." },
  { icon: MessageSquare, title: "WhatsApp & Website Chat", desc: "Connect your agent to your website widget and WhatsApp Business." },
  { icon: ClipboardList, title: "Smart Request Collection", desc: "Capture name, phone, location, request type, and structured details." },
  { icon: Users, title: "Human Handoff", desc: "Seamlessly transfer complex conversations to your real support team." },
  { icon: LayoutDashboard, title: "Conversation Dashboard", desc: "Track every conversation, request, lead, and unresolved issue." },
  { icon: Layers, title: "Multi-Agent Workspace", desc: "Build different agents for sales, support, booking, maintenance, follow-up." },
  { icon: Plug, title: "API-First Integration", desc: "Connect AzVoico to your CRM, ERP, email, database, or custom system." },
];

const Features = () => (
  <section id="features" className="py-20 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">
      <div className="text-center max-w-2xl mx-auto">
        <SectionLabel>Features</SectionLabel>
        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight">
          Everything you need to support customers
        </h2>
        <p className="mt-4 text-[#A1A1AA]">
          A complete toolkit — from agent builder to integrations — designed for small teams.
        </p>
      </div>
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((f) => (
          <div key={f.title} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#030957]/40 transition-all hover:-translate-y-1">
            <div className="w-11 h-11 rounded-xl bg-[#030957]/20 border border-white/10 flex items-center justify-center mb-4">
              <f.icon className="w-5 h-5 text-[#FFB900]" />
            </div>
            <h3 className="text-white font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-[#A1A1AA] leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HowIt = () => (
  <section id="how" className="py-20 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">
      <div className="text-center max-w-2xl mx-auto">
        <SectionLabel>How it works</SectionLabel>
        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight">
          Launch your agent in 4 simple steps
        </h2>
      </div>
      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { n: "01", t: "Create Your Agent", d: "Name your agent and pick the type of service it will handle." },
          { n: "02", t: "Add Business Knowledge", d: "Upload services, FAQs, files, and links to train it on your business." },
          { n: "03", t: "Connect Channels", d: "Plug it into your website, WhatsApp, or any support channel." },
          { n: "04", t: "Start Supporting", d: "Receive conversations, organize requests, and respond in seconds." },
        ].map((s) => (
          <div key={s.n} className="relative p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-5xl font-bold text-[#FFB900]">
              {s.n}
            </div>
            <h3 className="mt-3 text-white font-semibold">{s.t}</h3>
            <p className="mt-2 text-sm text-[#A1A1AA]">{s.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const useCases = [
  { icon: Wrench, t: "Maintenance Companies", d: "Receive maintenance requests, collect location details, classify issues, and route them to your operations team." },
  { icon: Home, t: "Real Estate Offices", d: "Qualify leads, share listings, schedule viewings, and capture buyer requirements automatically." },
  { icon: Stethoscope, t: "Clinics", d: "Book appointments, answer common patient questions, and triage messages to the right specialist." },
  { icon: ShoppingBag, t: "E-commerce Stores", d: "Track orders, recover carts, answer product questions, and assist customers post-purchase." },
  { icon: GraduationCap, t: "Training Centers", d: "Inform about courses, capture enrollments, and follow up with prospective students." },
  { icon: UtensilsCrossed, t: "Restaurants", d: "Take reservations, share menus, manage delivery requests, and answer FAQs." },
  { icon: Building2, t: "Service Providers", d: "Qualify inbound leads, collect project briefs, and schedule discovery calls." },
  { icon: Store, t: "Local Shops", d: "Reply to product availability, store hours, directions, and special offers — 24/7." },
];

const UseCases = () => (
  <section id="use-cases" className="py-20 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">
      <div className="text-center max-w-2xl mx-auto">
        <SectionLabel>Use cases</SectionLabel>
        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight">
          Built for the businesses you run every day
        </h2>
      </div>
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {useCases.map((u) => (
          <div key={u.t} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#030957]/40 transition-all">
            <u.icon className="w-7 h-7 text-[#FFB900]" />
            <h3 className="mt-4 text-white font-semibold">{u.t}</h3>
            <p className="mt-2 text-sm text-[#A1A1AA] leading-relaxed">{u.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Preview = () => (
  <section className="py-20 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">
      <div className="text-center max-w-2xl mx-auto">
        <SectionLabel>Product preview</SectionLabel>
        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight">
          Your control center for AI support
        </h2>
      </div>
      <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-2 shadow-2xl">
        <div className="rounded-2xl bg-[#0B0D11] overflow-hidden">
          <div className="grid grid-cols-12 min-h-[420px]">
            {/* Sidebar */}
            <aside className="col-span-3 border-r border-white/5 p-4 hidden md:block">
              <Logo />
              <nav className="mt-6 space-y-1 text-sm">
                {[
                  { i: Bot, l: "Agents", active: true },
                  { i: MessageSquare, l: "Conversations" },
                  { i: ClipboardList, l: "Requests" },
                  { i: BookOpen, l: "Knowledge Base" },
                  { i: Plug, l: "Integrations" },
                  { i: LayoutDashboard, l: "Analytics" },
                ].map((m) => (
                  <div
                    key={m.l}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-lg ${
                      m.active ? "bg-white/10 text-white" : "text-[#A1A1AA] hover:text-white"
                    }`}
                  >
                    <m.i className="w-4 h-4" />
                    <span>{m.l}</span>
                  </div>
                ))}
              </nav>
            </aside>
            {/* Main */}
            <main className="col-span-12 md:col-span-9 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold">Dashboard</h3>
                <Button size="sm" className="bg-[#030957] text-white rounded-full">
                  + New Agent
                </Button>
              </div>
              <div className="mt-5 grid grid-cols-2 lg:grid-cols-5 gap-3">
                {[
                  { l: "Active Agents", v: "4" },
                  { l: "Conversations Today", v: "238" },
                  { l: "Pending Requests", v: "17" },
                  { l: "Human Handoffs", v: "5" },
                  { l: "CSAT", v: "96%" },
                ].map((s) => (
                  <div key={s.l} className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xs text-[#A1A1AA]">{s.l}</p>
                    <p className="mt-1 text-2xl font-bold text-white">{s.v}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid lg:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-sm text-white font-medium mb-3">Recent Conversations</p>
                  {["Sara — AC repair request", "Ahmed — Quote inquiry", "Layla — Booking update"].map((c) => (
                    <div key={c} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                      <span className="text-sm text-white/90">{c}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FFB900]/15 text-[#FFB900]">Active</span>
                    </div>
                  ))}
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-sm text-white font-medium mb-3">Top Request Categories</p>
                  {[
                    { l: "Maintenance", v: 64 },
                    { l: "Sales", v: 48 },
                    { l: "Booking", v: 32 },
                    { l: "Other", v: 12 },
                  ].map((b) => (
                    <div key={b.l} className="mb-2">
                      <div className="flex justify-between text-xs text-[#A1A1AA] mb-1">
                        <span>{b.l}</span>
                        <span>{b.v}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <div
                          className="h-full bg-[#030957]"
                          style={{ width: `${b.v}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const integrations = [
  { i: MessageSquare, l: "WhatsApp Business" },
  { i: Globe, l: "Website Widget" },
  { i: Mail, l: "Email" },
  { i: Users, l: "CRM" },
  { i: Workflow, l: "ERP" },
  { i: LayoutDashboard, l: "Google Sheets" },
  { i: Database, l: "Supabase" },
  { i: Database, l: "PostgreSQL" },
  { i: Plug, l: "Webhooks" },
  { i: Plug, l: "Custom APIs" },
];

const Integrations = () => (
  <section className="py-20 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionLabel>API & Integrations</SectionLabel>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight">
            Built to connect with your business tools.
          </h2>
          <p className="mt-5 text-lg text-[#A1A1AA]">
            AzVoico is API-first. It isn't just a chatbot — it's an intelligence layer you can wire
            into the systems your business already runs on.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["REST API", "Webhooks", "OAuth", "SDKs"].map((t) => (
              <span key={t} className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-white/90">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {integrations.map((it) => (
            <div
              key={it.l}
              className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#030957]/40 transition"
            >
              <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <it.i className="w-4 h-4 text-[#FFB900]" />
              </div>
              <span className="text-sm text-white/90">{it.l}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "free forever",
    desc: "For small teams starting with one AI agent.",
    features: ["1 AI Agent", "Website Chat", "Basic Knowledge Base", "500 conversations / month", "Email support"],
    cta: "Start Free",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$49",
    period: "/ month",
    desc: "For growing businesses that need WhatsApp and automation.",
    features: ["3 AI Agents", "Website + WhatsApp", "Advanced Knowledge Base", "3,000 conversations / month", "Human Handoff", "Basic API access"],
    cta: "Start Free Trial",
    highlight: true,
  },
  {
    name: "Business",
    price: "$149",
    period: "/ month",
    desc: "For companies that need full integration.",
    features: ["Unlimited Agents", "Full API Access", "CRM / ERP Integration", "Custom Workflows", "Advanced Analytics", "Priority Support"],
    cta: "Contact Sales",
    highlight: false,
  },
];

const Pricing = () => (
  <section id="pricing" className="py-20 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">
      <div className="text-center max-w-2xl mx-auto">
        <SectionLabel>Pricing</SectionLabel>
        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight">
          Simple plans that grow with you
        </h2>
        <p className="mt-4 text-[#A1A1AA]">Start free. Upgrade only when you need more.</p>
      </div>
      <div className="mt-14 grid md:grid-cols-3 gap-5">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative p-8 rounded-3xl border ${
              p.highlight
                ? "border-[#030957]/40 bg-gradient-to-b from-[#030957]/15 to-transparent"
                : "border-white/10 bg-white/5"
            }`}
          >
            {p.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium bg-[#030957] text-white">
                Most popular
              </span>
            )}
            <h3 className="text-white font-semibold text-lg">{p.name}</h3>
            <p className="mt-1 text-sm text-[#A1A1AA]">{p.desc}</p>
            <div className="mt-5 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-white">{p.price}</span>
              <span className="text-sm text-[#A1A1AA]">{p.period}</span>
            </div>
            <Button
              className={`mt-6 w-full rounded-full ${
                p.highlight
                  ? "bg-[#030957] text-white"
                  : "bg-white/10 hover:bg-white/15 text-white border border-white/10"
              }`}
            >
              {p.cta}
            </Button>
            <ul className="mt-6 space-y-2.5">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-white/85">
                  <Check className="w-4 h-4 text-[#FFB900] flex-shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Trust = () => (
  <section className="py-20 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">
      <div className="text-center max-w-2xl mx-auto">
        <SectionLabel>Trusted by design</SectionLabel>
        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight">
          Built with safety and control in mind
        </h2>
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { i: ShieldCheck, t: "Secure by design", d: "Encrypted data and isolated workspaces." },
          { i: Users, t: "Human approval when needed", d: "Sensitive actions can require human review." },
          { i: MessageSquare, t: "Conversation history", d: "Full audit trail for every customer interaction." },
          { i: BookOpen, t: "Business knowledge control", d: "You decide what your agent knows and shares." },
          { i: Sparkles, t: "Built for small businesses", d: "Simple to launch, no engineering team required." },
          { i: Workflow, t: "Scalable for growth", d: "Add agents, channels, and automations anytime." },
        ].map((c) => (
          <div key={c.t} className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <c.i className="w-6 h-6 text-[#FFB900]" />
            <h3 className="mt-3 text-white font-semibold">{c.t}</h3>
            <p className="mt-1 text-sm text-[#A1A1AA]">{c.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const demoScenarios = [
  {
    q: "What are your business hours?",
    a: "We're open daily from 9 AM to 9 PM. Need to schedule a visit outside these hours? I can request a special slot.",
  },
  {
    q: "Do you offer same-day delivery?",
    a: "Yes — orders placed before 3 PM ship today. Share your area and I'll confirm the exact ETA.",
  },
  {
    q: "I want to book an appointment",
    a: "Sure. Please share the service type, preferred day, and a phone number. I'll create the booking instantly.",
  },
  {
    q: "Can I speak to a human?",
    a: "Of course. I'm transferring you to our support team now — ticket #A2381 created with your conversation history.",
  },
];

const InteractiveDemo = () => {
  const [active, setActive] = useState(0);
  const [typing, setTyping] = useState(false);
  const scenario = demoScenarios[active];

  const pick = (i: number) => {
    if (i === active) return;
    setTyping(true);
    setActive(i);
    window.setTimeout(() => setTyping(false), 700);
  };

  return (
    <section id="demo" className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <SectionLabel>Try it live</SectionLabel>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight">
            Click a question — watch your agent reply
          </h2>
          <p className="mt-4 text-[#A1A1AA]">
            A glimpse of how AzVoico answers real customer questions in seconds.
          </p>
        </div>
        <div className="mt-12 grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-3">
            {demoScenarios.map((s, i) => (
              <button
                key={s.q}
                onClick={() => pick(i)}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  i === active
                    ? "border-[#FFB900] bg-[#FFB900]/10 text-white"
                    : "border-white/10 bg-white/5 text-white/80 hover:border-white/20 hover:bg-white/10"
                }`}
              >
                <span className="text-xs uppercase tracking-wider text-[#FFB900] font-semibold">
                  Prompt {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-1 text-sm">{s.q}</p>
              </button>
            ))}
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-[#FFB900]/10 blur-2xl rounded-3xl" />
            <div className="relative rounded-2xl border border-white/10 bg-[#15171D]/90 backdrop-blur-xl shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#FFB900] flex items-center justify-center">
                    <Bot className="w-4 h-4 text-[#0F1115]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">AzVoico Agent</p>
                    <p className="text-[10px] text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live demo
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-5 space-y-4 min-h-[260px]">
                <Bubble side="left">{scenario.q}</Bubble>
                {typing ? (
                  <div className="flex items-center gap-1.5 text-[#A1A1AA] text-xs">
                    <span className="w-2 h-2 bg-[#FFB900] rounded-full animate-pulse" />
                    <span className="w-2 h-2 bg-[#FFB900] rounded-full animate-pulse [animation-delay:120ms]" />
                    <span className="w-2 h-2 bg-[#FFB900] rounded-full animate-pulse [animation-delay:240ms]" />
                    <span className="ml-2">Agent is typing…</span>
                  </div>
                ) : (
                  <Bubble side="right">{scenario.a}</Bubble>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ROICalculator = () => {
  const [convos, setConvos] = useState(800);
  const [agentCost, setAgentCost] = useState(600);
  const [agents, setAgents] = useState(2);

  const numbers = useMemo(() => {
    const automated = Math.round(convos * 0.7);
    const teamCost = agents * agentCost;
    const azvoicoCost = 49;
    const saved = Math.max(teamCost - azvoicoCost, 0);
    const hours = Math.round(automated * 0.05);
    return { automated, saved, hours };
  }, [convos, agentCost, agents]);

  return (
    <section id="roi" className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionLabel>ROI calculator</SectionLabel>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight">
            See what AzVoico saves your team — instantly.
          </h2>
          <p className="mt-5 text-[#A1A1AA]">
            Move the sliders to match your business. The numbers update in real time.
          </p>
          <div className="mt-8 space-y-6">
            <SliderField
              label="Customer messages / month"
              value={convos}
              suffix=""
              min={100}
              max={10000}
              step={100}
              onChange={setConvos}
            />
            <SliderField
              label="Support agents on payroll"
              value={agents}
              suffix=""
              min={1}
              max={10}
              step={1}
              onChange={setAgents}
            />
            <SliderField
              label="Monthly cost per agent ($)"
              value={agentCost}
              suffix="$"
              min={200}
              max={3000}
              step={50}
              onChange={setAgentCost}
            />
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-[#FFB900]/10 blur-3xl rounded-3xl" />
          <div className="relative grid grid-cols-2 gap-4 p-6 rounded-3xl border border-white/10 bg-white/5">
            <StatCard label="Conversations automated" value={`${numbers.automated.toLocaleString()}`} />
            <StatCard label="Hours saved / month" value={`${numbers.hours.toLocaleString()}h`} />
            <div className="col-span-2 p-6 rounded-2xl bg-gradient-to-br from-[#FFB900]/20 to-transparent border border-[#FFB900]/30">
              <p className="text-xs text-[#FFB900] uppercase tracking-wider font-semibold">
                Estimated monthly savings
              </p>
              <p className="mt-2 text-4xl md:text-5xl font-bold text-white">
                ${numbers.saved.toLocaleString()}
              </p>
              <p className="mt-2 text-xs text-[#A1A1AA]">
                Compared to running a full human-only support team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SliderField = ({
  label,
  value,
  min,
  max,
  step,
  suffix,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  suffix: string;
  onChange: (v: number) => void;
}) => (
  <div>
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm text-[#A1A1AA]">{label}</span>
      <span className="text-sm font-semibold text-[#FFB900]">
        {suffix}
        {value.toLocaleString()}
      </span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full accent-[#FFB900]"
    />
  </div>
);

const StatCard = ({ label, value }: { label: string; value: string }) => (
  <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
    <p className="text-xs text-[#A1A1AA]">{label}</p>
    <p className="mt-2 text-2xl font-bold text-white">{value}</p>
  </div>
);

const FinalCTA = () => (
  <section id="cta" className="py-20 border-t border-white/5">
    <div className="max-w-5xl mx-auto px-5 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#030957] p-10 md:p-14 text-center">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#030957]/30 blur-3xl rounded-full" />
        <div className="relative">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Your first AI support agent is closer than you think.
          </h2>
          <p className="mt-5 text-[#A1A1AA] max-w-2xl mx-auto">
            Launch a smart customer support agent for your business and start responding faster,
            organizing requests better, and serving customers 24/7.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button size="lg" className="bg-[#FFB900] hover:bg-[#FFC830] text-[#0F1115] font-semibold rounded-full px-7 h-12 shadow-[0_10px_30px_-10px_rgba(255,185,0,0.6)]">
              Create Your Agent <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10 rounded-full px-7 h-12">
              <Phone className="mr-2 w-4 h-4" /> Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const faqs = [
  { q: "Do I need technical experience?", a: "No. AzVoico is designed for non-technical business owners. Anyone can create and train an agent in minutes." },
  { q: "Can I connect it to WhatsApp?", a: "Yes. AzVoico can be connected to WhatsApp Business and your website widget out of the box." },
  { q: "Can it be trained on my services?", a: "Yes. Upload FAQs, documents, service lists, and business policies — your agent learns from them." },
  { q: "Will it replace my support team?", a: "It handles common and structured requests, and transfers complex cases to your human team automatically." },
  { q: "Can I have multiple agents?", a: "Yes. Create dedicated agents for sales, support, booking, maintenance, and follow-up." },
  { q: "Is there an API?", a: "Yes. AzVoico is built API-first, so you can integrate it with any CRM, ERP, or custom internal tool." },
];

const FAQ = () => (
  <section id="faq" className="py-20 border-t border-white/5">
    <div className="max-w-3xl mx-auto px-5 lg:px-8">
      <div className="text-center">
        <SectionLabel>FAQ</SectionLabel>
        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight">
          Questions, answered.
        </h2>
      </div>
      <Accordion type="single" collapsible className="mt-10 space-y-2">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="border border-white/10 rounded-xl bg-white/5 px-5"
          >
            <AccordionTrigger className="text-white hover:no-underline text-left">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-[#A1A1AA]">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-white/5 py-12">
    <div className="max-w-7xl mx-auto px-5 lg:px-8 grid md:grid-cols-4 gap-8">
      <div className="md:col-span-2">
        <Logo />
        <p className="mt-3 text-sm text-[#A1A1AA] max-w-sm">
          AI Customer Support Agents for Small Businesses.
        </p>
      </div>
      {[
        { t: "Product", l: ["Features", "Pricing", "API"] },
        { t: "Company", l: ["Contact", "Privacy Policy", "Terms"] },
      ].map((c) => (
        <div key={c.t}>
          <p className="text-white text-sm font-semibold">{c.t}</p>
          <ul className="mt-3 space-y-2">
            {c.l.map((x) => (
              <li key={x}>
                <a href="#" className="text-sm text-[#A1A1AA] hover:text-white transition-colors">
                  {x}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <p className="mt-10 text-center text-xs text-[#A1A1AA]">
      © {new Date().getFullYear()} AzVoico. All rights reserved.
    </p>
  </footer>
);

const AzVoico = () => {
  useEffect(() => {
    document.title = "AzVoico — AI Customer Support Agents for Small Businesses";
  }, []);
  return (
    <div className="min-h-screen bg-[#0F1115] text-white antialiased" dir="ltr">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <HowIt />
        <InteractiveDemo />
        <UseCases />
        <Preview />
        <ROICalculator />
        <Integrations />
        <Pricing />
        <Trust />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default AzVoico;