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
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";

const items = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Produtos",
    url: "/productlist",
  },
  {
    title: "Categorias",
    url: "#",
  },
  {
    title: "Meus Pedidos",
    url: "#",
  },
];

const AppSidebar = () => {
  const currentPath = useLocation().pathname;
  // console.log(currentPath);

  return (
    <Sidebar>
      <SidebarContent className="relative">
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-bold text-zinc-700 mt-5">
            Páginas
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className={cn(
                    "text-sm transition-colors hover:text-primary font-medium",
                    currentPath === item.url
                      ? "text-primary underline underline-offset-4 decoration-2 font-bold"
                      : "text-muted-foreground"
                  )}
                >
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <div className="absolute bottom-0 bg-blue-200 w-full flex flex-col justify-center items-center">
          <hr className="border w-40 border-red-600 mb-3"/>
          <div className="bg-red-200 w-fit m-auto">dasdasdl</div>
          <div className="bg-red-200 w-fit m-auto">dasdasdl</div>
          <div className="bg-red-200 w-fit m-auto">dasdasdl</div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
