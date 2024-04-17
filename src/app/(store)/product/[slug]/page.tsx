import { api } from "@/data/api";
import { ProductProps } from "@/data/types/product";
import Image from "next/image";

interface ProductPageProps {
  params: {
    slug: string
  }
}

async function getProduct(slug: string): Promise<ProductProps> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60,
    }
  });
  const products = await response.json();
  return products;
}


export default async function ProductPage({ params }: ProductPageProps) {

  const product = await getProduct(params.slug);

  return (
    <div className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image 
          src={product.image} 
          alt="" 
          width={1000} 
          height={1000} 
          quality={100}
        />
      </div>

      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">
          {product.title}
        </h1>

        <p className="mt-2 leading-relaxed text-zinc-400">
          {product.description}
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5">
            R$ {product.price}
          </span>
          <span className="text-zinc-400 text-sm">
            Em 12x de R$ {(product.price / 12)}
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>

          <div className="flex gap-2">
            <button 
              type="button" 
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              P
            </button>
            <button 
              type="button" 
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              M
            </button>
            <button 
              type="button" 
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              G
            </button>
            <button 
              type="button" 
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              GG
            </button>
          </div>
        </div>

        <button
          type="button"
          className="mt-8 h-12 flex items-center justify-center rounded-full bg-emerald-600 text-white font-semibold"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}