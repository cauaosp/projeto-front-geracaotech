import Gallery from "@/components/Gallery";
import Section from "@/components/Section";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { HomepageTenis } from "@/lib/datas";

const ProductViewPage = () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator children={"/"} />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Produtos</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator children={"/"} />
          <BreadcrumbItem>
            <BreadcrumbPage>Tênis</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator children={"/"} />
          <BreadcrumbItem>
            <BreadcrumbPage>Nike</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator children={"/"} />
          <BreadcrumbItem>
            <BreadcrumbPage>
              Tênis Nike Revolution 6 Next Nature Masculino
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Gallery
        images={HomepageTenis}
        showThumbnail={true}
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
    </>
  );
};

export default ProductViewPage;
