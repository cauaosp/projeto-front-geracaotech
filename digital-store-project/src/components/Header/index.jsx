import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "../Logo";
import { SidebarTrigger } from "../ui/sidebar";
import SiteNavigation from "./SiteNavigation";

const Header = () => {
  return (
    <>
      <div className="hidden md:block items-center p-8 px-14">
        <div className="flex justify-between items-center mb-4">
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
          <img src="/Carbuy.svg" alt="Carrinho de compras" />
        </div>
        <SiteNavigation />
      </div>
      <div className="flex justify-between md:hidden items-center gap-2 bg-white w-full p-4 pr-2">
        <SidebarTrigger />
        <Logo />
        <div className="flex gap-4">
          <img src="/Search.svg" alt="Lupa" />
          <img src="/Carbuy.svg" alt="Carrinho de compras" />
        </div>
      </div>
    </>
  );
};

export default Header;
