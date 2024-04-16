import ProductCard from "@/components/productCard";

export default function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <ProductCard 
        name="Moletom Never Stop Learning"
        price="129"
        href="/"
        src="/moletom-learning.png"
        isHighlighted={true}
      />
      <ProductCard 
        name="Moletom Java"
        price="120"
        href="/"
        src="/moletom-java.png"
      />
      <ProductCard
        name="Camiseta DoWhile"
        price="59.90"
        href="/"
        src="/camiseta-dowhile.png"
      />
    </div>
  )
}
