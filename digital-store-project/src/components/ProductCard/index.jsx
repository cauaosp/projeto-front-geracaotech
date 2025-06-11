import { cn } from "@/lib/utils";

const ProductCard = ({ product = {}, ...props }) => {
  return (
    <div
      className={cn(
        "mx-auto h-fit rounded-lg overflow-hidden w-full cursor-pointer hover:bg-slate-200/20 hover:shadow-md",
        props.className
      )}
    >
      <div className="bg-white h-60 flex items-center justify-center relative shadow-md">
        {product.discount && (
          <div className="left-4 top-4 absolute bg-lime-200 text-zinc-700 text-sm font-bold py-2 px-4 rounded-full">
            {product.discount}% OFF
          </div>
        )}
        <img src={product.image} alt="foto do produto" className="h-44" />
      </div>
      <div className="flex flex-col py-4">
        <div className="text-xs font-bold text-neutral-400">{product.type}</div>
        <div className="text-zinc-700">{product.name}</div>
        <div className="flex font-bold text-sm gap-2">
          <div className="text-neutral-400 line-through">{product.price}</div>
          <div>{product.priceDiscount}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
