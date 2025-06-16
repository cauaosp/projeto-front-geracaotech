import { cn } from "@/lib/utils";
import ProductCard from "../ProductCard";

const ProductList = ({ products = [], top, ...props }) => {
  return (
    <div className={cn("px-10 py-6", props.className)}>
      {top}
      <div
        className={cn(
          "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-between",
          props.customMap
        )}
      >
        {products.map((product, index) => {
          return <ProductCard product={product} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
