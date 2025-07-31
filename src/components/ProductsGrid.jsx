import ProductCard from "./ProductCard";

const ProductsGrid = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 xl:px-24 2xl:px-32 pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductCard key={index} selected={index === 2} />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
