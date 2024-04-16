import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  href: string;
  src: string;
  name: string;
  price: string;
  isHighlighted?: boolean;
}

export default function ProductCard({href, src, name, price, isHighlighted}: ProductCardProps) {

  const cardStyle = `
    ${isHighlighted ? 'col-span-6 row-span-6' : 'col-span-3 row-span-3'} 
    rounded-lg bg-zinc-900 overflow-hidden flex justify-center relative group
  `;

  const priceBoxStyle = ` 
    ${isHighlighted ? 'bottom-28 right-28' : 'bottom-10 right-10'}
    absolute h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5
  `

  return (
    <Link
      href={href}
      className={cardStyle}
    >
      <Image
        className="group-hover:scale-105 transition-transform duration-500"
        src={src}
        width={920}
        height={920}
        quality={100}
        alt=""
      />

      <div className={priceBoxStyle}>
        <span className="text-sm truncate">
          {name}
        </span>

        <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
          R${price}
        </span>
      </div>
    </Link>
  )
}