import { ProductProps } from "@/data/types/product";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function ProductCard({slug, image, title, price, isHighlighted}: ProductProps) {

  const cardStyle = isHighlighted ? 'col-span-6 row-span-6' : 'col-span-3 row-span-3';
  const priceBoxStyle = isHighlighted ? 'bottom-28 right-28' : 'bottom-10 right-10';

  return (
    <Link
      href={slug}
      className={twMerge("rounded-lg bg-zinc-900 overflow-hidden flex justify-center relative group", cardStyle)}
    >
      <Image
        className="group-hover:scale-105 transition-transform duration-500"
        src={image}
        width={920}
        height={920}
        quality={100}
        alt=""
      />

      <div className={twMerge("absolute h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5", priceBoxStyle)}>
        <span className="text-sm truncate">
          {title}
        </span>

        <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
          R${price}
        </span>
      </div>
    </Link>
  )
}