const ProductListingPage = () => {
  return (
    <div className="px-4 md:px-14">
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
      <div className="w-full flex h-screen justify-between">
        <div className="bg-purple-200 w-1/4">a</div>
        <div className="bg-purple-600 w-1/2">b</div>
      </div>
    </div>
  );
};

export default ProductListingPage;
