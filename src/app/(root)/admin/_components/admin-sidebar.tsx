import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { routes } from "@/shared/routes";
import React from "react";
import StoreToggle from "./store-toggle";

function AdminSidebar() {
  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader>
        <StoreToggle />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {routes.map((route) => (
            <div key={route.key}>
              <SidebarGroupLabel>{route.label}</SidebarGroupLabel>
              <SidebarContent>
                <SidebarMenu>
                  {route.routeGroup.map((item) => (
                    <SidebarMenuItem key={item.key}>
                      <SidebarMenuButton asChild>
                        <a href={item.url}>
                          <item.icon className="mr-2 h-4 w-4" />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                      {item.children && (
                        <SidebarMenuSub>
                          <div className="flex flex-col gap-y-1 py-2">
                            {item.childrenRoutes?.map((child) => (
                              <SidebarMenuSubItem key={child.title}>
                                <SidebarMenuSubButton asChild>
                                  <a href={child.url}>
                                    {child.title}
                                    <child.icon className="mr-2 h-4 w-4" />
                                  </a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </div>
                        </SidebarMenuSub>
                      )}
                      {/* <SidebarMenuBadge>2</SidebarMenuBadge> */}
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarContent>
            </div>
          ))}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

export default AdminSidebar;
