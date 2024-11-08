import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    title: "Transactions",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Schedules",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Users",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="bg-blue-500">
        <SidebarGroup>
          <SidebarGroupLabel className="font-bold text-4xl text-white px-4 py-14">
            Board.
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="text-white">
              {items.map((item) => (
                <SidebarMenuItem className="p-2" key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
