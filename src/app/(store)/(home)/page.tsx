import ProductCard from "@/components/productCard";
import { api } from "@/data/api";
import { ProductProps } from "@/data/types/product";

async function getFeaturedProducts(): Promise<ProductProps[]> {
  const response = await api("/products/featured", {
    next: {
      revalidate: 60 * 60,
    }
  });
  const products = await response.json();
  return products;
}

export default async function Home() {

  const products = await getFeaturedProducts();

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      {products.map((product: ProductProps) => 
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
