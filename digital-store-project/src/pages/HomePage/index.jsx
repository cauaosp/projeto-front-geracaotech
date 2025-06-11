import Gallery from "@/components/Gallery";
import ProductList from "@/components/ProductListing";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import {
  collectionCategories,
  featuredCollection,
  HomepageTenis,
  productsData,
} from "@/lib/datas";
import { cn } from "@/lib/utils";

const HomePage = () => {
  return (
    <div className="w-full bg-slate-50">
      <Gallery
        images={HomepageTenis}
        renderItem={(img) => (
          <Section
            title={
              <>
                <div className="md:text-amber-500 text-primary text-xl">
                  Melhores ofertas personalizadas
                </div>
                <div className="md:text-5xl lg:text-7xl text-stone-900">
                  Queima de stoque Nike 🔥
                </div>
              </>
            }
            link={{ text: "Ver ofertas", href: "/productlist" }}
            image={
              <div className="flex items-center justify-center h-72 md:w-1/2">
                <img
                  src={img.src}
                  alt="sapato em promocao"
                  className="w-96 lg:w-[400px] lg:-mb-12"
                />
              </div>
            }
            className="py-8 gap-4 md:flex-row-reverse"
          >
            <div className="text-lg mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </div>
          </Section>
        )}
      />

      <Section
        title={<div className="text-xl md:text-3xl">Coleções em destaque</div>}
        customTitle="w-full"
        className="py-5 overflow-x-auto"
        customChildren="flex flex-col md:flex-row justify-between p-5 bg-slate-50 gap-5"
      >
        {featuredCollection.map((product, i) => (
          <div
            className="relative h-52 w-80 md:w-96 bg-slate-200 p-5 mx-auto flex flex-col justify-between z-10 overflow-hidden cursor-pointer rounded-lg"
            key={i}
          >
            <div className="rounded-full px-2 py-1 bg-lime-200 text-zinc-700 w-24 font-bold text-center">
              {product.discount}% OFF
            </div>
            <div className="text-stone-900 text-2xl font-bold w-1/2">
              {product.title}
            </div>
            <Button className="py-2 px-4 bg-white text-primary w-36 z-30 hover:font-bold">
              Comprar
            </Button>
            <img
              src={product.src}
              alt="imagem do produto"
              className={cn("absolute z-20", product.customImg)}
            />
          </div>
        ))}
      </Section>

      <Section
        title={<div className="text-xl md:text-3xl">Coleções em destaque</div>}
        customTitle="w-full text-left md:text-center"
        className="py-5 "
        customChildren="py-4 flex gap-6 overflow-x-auto lg:w-2/3 mx-auto"
      >
        {collectionCategories.map((categorie) => (
          <div className="flex flex-col justify-center items-center gap-2 w-full cursor-pointer">
            <div className="flex justify-center items-center bg-white size-24 rounded-full shadow-md hover:shadow-inner">
              <img src={categorie.src} alt="icone" className="h-12" />
            </div>
            <div className="font-bold text-sm w-32 text-center">
              {categorie.name}
            </div>
          </div>
        ))}
      </Section>

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
        className="py-8 bg-white mt-4"
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
