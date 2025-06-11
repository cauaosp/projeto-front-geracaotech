import Gallery from "@/components/Gallery";
import ProductList from "@/components/ProductListing";
import Section from "@/components/Section";
import { productsData } from "@/lib/datas";

const HomePage = () => {
  return (
    <div className="w-full bg-neutral-100">
      <Gallery
        images={[
          {
            src: "/air-jordan.png",
          },
          {
            src: "/red-tenis.png",
          },
          {
            src: "/tenis-2.png",
          },
          {
            src: "/tenis-horizontal.png",
          },
        ]}
      />

      <ProductList
        products={productsData}
        top={
          <div className="flex justify-between px-2 mb-4">
            <div className="text-zinc-700 font-bold">Produtos em alta</div>
            <a
              href="/productlist"
              className="flex items-center gap-3 text-primary"
            >
              <div>Ver todos</div>
              <img
                src="/right-purple.png"
                alt="link para ver mais"
                className="h-6"
              />
            </a>
          </div>
        }
      />

      <div className="text-center text-primary text-7xl bg-black p-4">
        Hello World!
      </div>
      <Section
        title={
          <>
            <div className="lg:text-primary text-amber-500 text-xl">
              Oferta especial
            </div>
            <div className="lg:text-7xl">Air Jordan edição de colecionador</div>
          </>
        }
        link={{ text: "Ver oferta", href: "/productlist" }}
        image={
          <div className="relative flex w-full items-center justify-center h-80 md:min-h-96 md:w-1/2">
            <img
              src="eclipse-roxa.png"
              alt="fundo da imagem do sapato"
              className="absolute z-10 w-80 -mb-8 lg:w-[450px] lg:-mb-40"
            />
            <img
              src="air-jordan.png"
              alt="sapato em promocao"
              className="relative z-20 w-96 lg:w-[500px] lg:-mb-12"
            />
          </div>
        }
        className="py-8 bg-white"
      >
        <div className="text-lg mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip
        </div>
      </Section>
    </div>
  );
};

export default HomePage;
