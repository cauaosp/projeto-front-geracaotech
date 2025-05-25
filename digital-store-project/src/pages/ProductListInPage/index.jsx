const ProductListInPage = () => {
  return (
    <>
      <div className="space-y-4 p-6">
        {/* Primary Colors */}
        <div className="bg-[rgb(var(--color-primary))] p-4 rounded text-white">
          Primary Background (#C92071)
        </div>
        <div className="bg-[rgb(var(--color-secondary))] p-4 rounded text-gray-900">
          Secondary Background (#B5B6F2)
        </div>
        <div className="bg-[rgb(var(--color-tertiary))] p-4 rounded text-white">
          Tertiary Background (#991956)
        </div>

        {/* Status Colors */}
        <div className="bg-[rgb(var(--color-error))] p-4 rounded text-white">
          Error Background (#EE4266)
        </div>
        <div className="bg-[rgb(var(--color-success))] p-4 rounded text-gray-900">
          Success Background (#52CA76)
        </div>
        <div className="bg-[rgb(var(--color-warning))] p-4 rounded text-gray-900">
          Warning Background (#F6AA1C)
        </div>

        {/* Grayscale Colors */}
        <div className="bg-[rgb(var(--color-dark-gray))] p-4 rounded text-white">
          Dark Gray (#1F1F1F)
        </div>
        <div className="bg-[rgb(var(--color-dark-gray-2))] p-4 rounded text-white">
          Dark Gray 2 (#474747)
        </div>
        <div className="bg-[rgb(var(--color-dark-gray-3))] p-4 rounded text-white">
          Dark Gray 3 (#666666)
        </div>
        <div className="bg-[rgb(var(--color-light-gray))] p-4 rounded text-white">
          Light Gray (#8F8F8F)
        </div>
        <div className="bg-[rgb(var(--color-light-gray-2))] p-4 rounded text-gray-900">
          Light Gray 2 (#CCCCCC)
        </div>
        <div className="bg-[rgb(var(--color-light-gray-3))] p-4 rounded text-gray-900 border border-gray-200">
          Light Gray 3 (#F5F5F5)
        </div>
        <div className="bg-[rgb(var(--color-white))] p-4 rounded text-gray-900 border border-gray-200">
          White (#FFFFFF)
        </div>

        {/* Chart Colors */}
        <div className="bg-[hsl(var(--chart-1))] p-4 rounded text-white">
          Chart 1 (hsl(12 76% 61%))
        </div>
        <div className="bg-[hsl(var(--chart-2))] p-4 rounded text-white">
          Chart 2 (hsl(173 58% 39%))
        </div>
        <div className="bg-[hsl(var(--chart-3))] p-4 rounded text-white">
          Chart 3 (hsl(197 37% 24%))
        </div>
        <div className="bg-[hsl(var(--chart-4))] p-4 rounded text-gray-900">
          Chart 4 (hsl(43 74% 66%))
        </div>
        <div className="bg-[hsl(var(--chart-5))] p-4 rounded text-gray-900">
          Chart 5 (hsl(27 87% 67%))
        </div>

        {/* Sidebar Colors */}
        <div className="bg-[hsl(var(--sidebar-background))] p-4 rounded text-gray-900 border border-gray-200">
          Sidebar Background (hsl(0 0% 98%))
        </div>
        <div className="bg-[hsl(var(--sidebar-primary))] p-4 rounded text-white">
          Sidebar Primary (hsl(240 5.9% 10%))
        </div>
      </div>{" "}
    </>
  );
};

export default ProductListInPage;
