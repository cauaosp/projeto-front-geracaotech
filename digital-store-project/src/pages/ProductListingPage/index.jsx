import ProductList from "@/components/ProductListing";
import { productsListData } from "@/lib/datas";

const ProductListingPage = () => {
  return (
    <div className="px-4 md:px-14 py-4">
      <div className="flex justify-between text-zinc-700 my-4">
        <div className="font-bold">
          Resultados para “Tênis” -{" "}
          <span className="font-medium">389 produtos</span>
        </div>
        <div className="flex justify-between border border-zinc-700 p-3 rounded-lg font-bold w-fit gap-4 items-center max-md:text-sm">
          <div>
            Ordernar por: <span className="font-medium">mais relevantes</span>
          </div>
          <img src="/arrow-down.png" alt="seta" className="w-3" />
        </div>
      </div>
      <div className="flex justify-between max-h-screen">
        <div className="bg-purple-200 w-1/4">a</div>
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
