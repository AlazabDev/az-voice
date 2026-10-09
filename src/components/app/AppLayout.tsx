import { Navigate, NavLink, Outlet, useLocation } from "react-router-dom";
import { LayoutDashboard, Bot, MessagesSquare, BookOpen, GraduationCap, Settings, LogOut } from "lucide-react";
import {
  Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger,
} from "@/components/ui/sidebar";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import logo from "@/assets/azvoice-logo.png";

const items = [
  { to: "/app", label: "لوحة التحكم", icon: LayoutDashboard, end: true },
  { to: "/app/agents", label: "الوكلاء", icon: Bot },
  { to: "/app/training", label: "تدريب الوكلاء", icon: GraduationCap },
  { to: "/app/conversations", label: "المحادثات", icon: MessagesSquare },
  { to: "/app/knowledge", label: "قاعدة المعرفة", icon: BookOpen },
  { to: "/app/settings", label: "الإعدادات", icon: Settings },
];

const AppLayout = () => {
  const { user, loading, signOut } = useAuth();
  const loc = useLocation();
  if (loading) return <div className="min-h-screen flex items-center justify-center text-muted-foreground">جاري التحميل...</div>;
  if (!user) return <Navigate to="/auth" replace state={{ from: loc.pathname }} />;

  return (
    <SidebarProvider>
      <div dir="rtl" className="min-h-screen flex w-full bg-background">
        <Sidebar side="right" collapsible="icon">
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2 py-2">
              <img src={logo} alt="AzVoico" className="h-8 w-8 object-contain" />
              <span className="font-bold text-lg group-data-[collapsible=icon]:hidden">AzVoico</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>النظام</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((it) => (
                    <SidebarMenuItem key={it.to}>
                      <SidebarMenuButton asChild tooltip={it.label}>
                        <NavLink
                          to={it.to}
                          end={it.end}
                          className={({ isActive }) => (isActive ? "bg-sidebar-accent text-secondary font-semibold" : "")}
                        >
                          <it.icon className="h-4 w-4" />
                          <span>{it.label}</span>
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <div className="px-2 text-xs text-muted-foreground truncate group-data-[collapsible=icon]:hidden">{user.email}</div>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={signOut} tooltip="تسجيل الخروج">
                  <LogOut className="h-4 w-4" /><span>تسجيل الخروج</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-14 flex items-center gap-3 border-b border-border px-4 sticky top-0 bg-background/95 backdrop-blur z-10">
            <SidebarTrigger />
            <span className="text-sm text-muted-foreground">مساحة العمل</span>
            <div className="ms-auto"><Button asChild size="sm" variant="ghost"><a href="/">الموقع</a></Button></div>
          </header>
          <main className="flex-1 p-4 md:p-8"><Outlet /></main>
        </div>
      </div>
    </SidebarProvider>
  );
};
export default AppLayout;
