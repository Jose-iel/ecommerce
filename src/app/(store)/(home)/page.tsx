import ProductCard, { ProductCardProps } from "@/components/productCard";

export default async function Home() {

  const products = await fetch("http://localhost:3000/api/products").then(res => res.json());

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      {products.map((product: ProductCardProps) => 
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          slug={product.slug}
          image={product.image}
          isHighlighted={product.isHighlighted}
        />
      )}
    </div>
  )
}
