import { cn } from "@/lib/utils";

const Footer = ({ className }) => {
  return (
    <div className={cn("bg-stone-900 p-5 text-white", className)}>
      <div className="flex flex-col md:flex-row gap-8 md:mx-16 border-b pb-10 mb-10">
        <div className="flex flex-col gap-8">
          <div className="flex gap-2">
            <img
              src="/white-logo.svg"
              alt="logo branca"
              className="max-w-6 md:max-w-8"
            />
            <div className="text-white text-2xl font-medium md:text-4xl">
              Digital Store
            </div>
          </div>
          <div className="w-5/6 text-sm -mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </div>
          <div className="flex gap-10">
            <img
              src="/facebook-white-logo.svg"
              alt="logo do facebook branca"
              className="max-w-6"
            />
            <img
              src="/instagram-white-logo.svg"
              alt="logo do instagram branca"
              className="max-w-6"
            />
            <img
              src="/twitter-white-logo.svg"
              alt="logo do twitter branca"
              className="max-w-6"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <div className="font-bold">Informação</div>
            <ul className="flex flex-col gap-1 mt-2 font-light">
              <li>Sobre Drip Store</li>
              <li>Segurança</li>
              <li>Wishlist</li>
              <li>Blog</li>
              <li>Trabalhe Conosco</li>
              <li>Meus Pedidos</li>
            </ul>
          </div>
          <div>
            <div className="font-bold">Informação</div>
            <ul className="flex flex-col gap-1 mt-2 font-light">
              <li>Camisetas</li>
              <li>Calças</li>
              <li>Bonés</li>
              <li>Headphones</li>
              <li>Tênis</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 max-md:max-w-96">
            <div className="font-bold">Contato</div>
            <div className="flex flex-col gap-5 font-light">
              <div>
                Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
                60150-161
              </div>
              <div>(85) 3051-3411</div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">@ 2022 Digital College</div>
    </div>
  );
};

export default Footer;
