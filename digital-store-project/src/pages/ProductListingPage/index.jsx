import ProductList from "@/components/ProductListing";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { productsListData } from "@/lib/datas";

const ProductListingPage = () => {
  const marca = ["Adiddas", "Calenciaga", "K-Swiss", "Nike", "Puma"];
  const categoria = ["Esporte e lazer", "Casual", "Utilitário", "Corrida"];
  const genero = ["Masculino", "Feminino", "Unisex"];
  const estado = ["Novo", "Usado"];

  return (
    <div className="px-4 md:px-14 py-4">
      <div className="flex justify-between text-zinc-700 my-4 max-md:text-sm">
        <div className="font-bold">
          Resultados para “Tênis” -{" "}
          <span className="font-medium">
            {productsListData.length} produtos
          </span>
        </div>
        <div className="flex justify-between border border-zinc-700 p-3 rounded-lg font-bold w-fit gap-4 items-center max-md:text-xs">
          <div>
            Ordernar por: <span className="font-medium">mais relevantes</span>
          </div>
          <img src="/arrow-down.png" alt="seta" className="w-3" />
        </div>
      </div>
      <div className="flex justify-between max-h-screen">
        <div className="bg-white h-fit w-1/4 min-w-40 flex flex-col gap-2 text-zinc-700 px-8 pb-8">
          <div className="font-bold border-b border-stone-300 py-4">
            Filtrar por
          </div>
          <div className="font-bold mt-3 mb-1">Marca:</div>
          {marca.map((m, i) => (
            <div className="flex items-center gap-3" key={`marca-${i}`}>
              <Checkbox id={`marca-${i}`} className="shadow-none" />
              <Label htmlFor={`marca-${i}`} className="cursor-pointer">
                {m}
              </Label>
            </div>
          ))}
          <div className="font-bold mt-3 mb-1">Categoria:</div>
          {categoria.map((c, i) => (
            <div className="flex items-center gap-3" key={`categoria-${i}`}>
              <Checkbox id={`categoria-${i}`} className="shadow-none" />
              <Label htmlFor={`categoria-${i}`} className="cursor-pointer">
                {c}
              </Label>
            </div>
          ))}
          <div className="font-bold mt-3 mb-1">Gênero:</div>
          {genero.map((g, i) => (
            <div className="flex items-center gap-3" key={`genero-${i}`}>
              <Checkbox id={`genero-${i}`} className="shadow-none" />
              <Label htmlFor={`genero-${i}`} className="cursor-pointer">
                {g}
              </Label>
            </div>
          ))}
          <div className="font-bold mt-3 mb-1">Estado:</div>
          <RadioGroup defaultValue="Novo">
            {estado.map((e, i) => (
              <div className="flex items-center gap-3" key={`estado-${i}`}>
                <RadioGroupItem value={e} id={`estado-${i}`} />
                <Label htmlFor={`estado-${i}`} className="cursor-pointer">
                  {e}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        <ProductList
          products={productsListData}
          className="py-0 overflow-auto w-3/4"
          customMap="grid grid-cols-1 md:grid-cols-3"
        />
      </div>
    </div>
  );
};

export default ProductListingPage;
