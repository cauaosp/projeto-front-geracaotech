import { Button } from "@/components/ui/button";
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
  },
  {
    title: "Meus Pedidos",
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
              {items.map((item, index) => (
                <SidebarMenuItem
                  key={index}
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
        <div className="absolute bottom-0 w-full flex flex-col justify-center items-center mb-5 gap-2">
          <hr className="border w-3/4 border-stone-300 rounded-full" />
          <Button className="bg-primary rounded-md w-3/4 font-medium cursor-pointer">
            Entrar
          </Button>
          <div className="underline cursor-pointer">Cadastre-se</div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
