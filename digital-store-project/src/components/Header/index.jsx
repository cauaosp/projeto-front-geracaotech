import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import Logo from "../Logo";
import CarBuy from "./CarBuy";
import SiteNavigation from "./SiteNavigation";

const Header = ({ className }) => {
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

  const currentPath = useLocation().pathname;

  return (
    <div className={cn("max-md:sticky max-md:top-0 z-50", className)}>
      <div className="hidden md:block items-center py-8 px-14">
        <div className="flex justify-between items-center mb-5">
          <Logo />
          <div className="relative flex items-center">
            <Input
              className="md:w-60 lg:w-96 bg-stone-50"
              placeholder="Pesquisar o produto..."
            />
            <img src="/Search.svg" alt="Lupa" className="absolute right-8" />
          </div>
          <div className="underline text-zinc-700">Cadastre-se</div>
          <Button>Entrar</Button>
          <CarBuy />
        </div>
        <SiteNavigation />
      </div>
      <div className="flex justify-between md:hidden items-center gap-2 bg-white w-full p-4 pr-2">
        <Sheet className="bg-red-200 p-5 order-2">
          <SheetTrigger>
            <img src="/Menu.svg" alt="Lupa" className="h-7" />
          </SheetTrigger>
          <SheetContent
            className="bg-white w-3/4 min-w-40 flex flex-col gap-2 text-zinc-700 px-8 pb-8"
            side="left"
          >
            <div className="text-lg font-bold text-zinc-700 mt-5">Páginas</div>
            {items.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "text-sm transition-colors hover:text-primary font-medium",
                  currentPath === item.url
                    ? "text-primary underline underline-offset-4 decoration-2 font-bold"
                    : "text-muted-foreground"
                )}
              >
                <a href={item.url}>
                  <span>{item.title}</span>
                </a>
              </div>
            ))}
            <div className="mt-auto flex flex-col justify-center items-center mb-5 gap-3 border-t pt-4">
              <Button className="bg-primary rounded-md w-3/4 font-medium cursor-pointer">
                Entrar
              </Button>
              <div className="underline cursor-pointer">Cadastre-se</div>
            </div>
          </SheetContent>
        </Sheet>
        <Logo />
        <div className="flex gap-4">
          <img src="/Search.svg" alt="Lupa" />
          <CarBuy />
        </div>
      </div>
    </div>
  );
};

export default Header;
