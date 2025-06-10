import ProductCard from "../ProductCard";

const ProductList = ({ products = [], top }) => {
  return (
    <div className="px-10 py-6">
      {top}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-between">
        {products.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
