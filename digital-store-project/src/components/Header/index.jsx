import Logo from "../Logo";
import { SidebarTrigger } from "../ui/sidebar";

const Header = () => {
  return (
    <div className="bg-slate-300 py-8">
      <div className="hidden md:flex items-center gap-2">
        <SidebarTrigger />
        <Logo />
        <h1>Título</h1>
        <h1>Menu de navegação</h1>
      </div>
      <div className="flex justify-between md:hidden items-center gap-2 bg-white w-full px-5 ">
        <SidebarTrigger />
        <Logo />
        <div className="flex gap-2">
          <img src="/Search.svg" alt="Carrinho de compras" />
          <img src="/Carbuy.svg" alt="Carrinho de compras" />
        </div>
      </div>
    </div>
  );
};

export default Header;
