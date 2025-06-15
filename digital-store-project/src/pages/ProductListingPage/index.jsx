import ProductList from "@/components/ProductListing";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { productsListData } from "@/lib/datas";

const ProductListingPage = () => {
  const marca = ["Adiddas", "Calenciaga", "K-Swiss", "Nike", "Puma"];
  const categoria = ["Esporte e lazer", "Casual", "Utilitário", "Corrida"];
  const genero = ["Masculino", "Feminino", "Unisex"];
  const estado = ["Novo", "Usado"];

  return (
    <div className="px-4 md:px-14 py-4">
      <div className="flex flex-col justify-between text-zinc-700 my-4 max-md:text-sm items-center md:flex-row-reverse">
        <div className="flex justify-between w-full">
          <Select>
            <SelectTrigger className="flex justify-between border border-zinc-700 p-3 rounded-lg font-bold gap-2 items-center max-md:text-xs max-md:mr-auto md:ml-auto w-fit">
              <div>Ordernar por:</div>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevant">Mais relevantes</SelectItem>
              <SelectItem value="recent">Mais Recentes</SelectItem>
              <SelectItem value="old">Mais antigos</SelectItem>
              <SelectItem value="more">Mais comprados</SelectItem>
              <SelectItem value="less">Menos comprados</SelectItem>
            </SelectContent>
          </Select>

          <Sheet className="bg-red-200 p-5 order-2">
            <SheetTrigger>
              <img
                src="/funnel.png"
                alt="filtro de busca"
                className="h-12 bg-primary p-3 rounded-lg max-md:ml-auto md:hidden"
              />
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px]">
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        <div className="font-bold w-full">
          Resultados para “Tênis” -{" "}
          <span className="font-medium">
            {productsListData.length} produtos
          </span>
        </div>
      </div>
      <div className="flex justify-between max-h-screen gap-2">
        <div className="max-md:hidden bg-white h-fit w-1/4 min-w-40 flex flex-col gap-2 text-zinc-700 px-8 pb-8">
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
          className="py-0 overflow-auto w-full md:w-3/4 px-0"
          customMap="grid grid-cols-1 grid-cols-2 md:grid-cols-3"
        />
      </div>
    </div>
  );
};

export default ProductListingPage;
