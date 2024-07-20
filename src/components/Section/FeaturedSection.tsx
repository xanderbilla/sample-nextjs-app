import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  data: any[];
};

export default function FeaturedSection({ data }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {data.slice(0, 6).map((product: any) => (
        <div
          key={product.id}
          className="relative h-72 lg:h-80 w-72 lg:w-80 flex flex-col items-center justify-center gap-4 p-4 bg-gray-100 rounded-lg"
        >
          <Image
          className="h-64 w-auto rounded-t-lg object-contain"
            src={
              `/products/${product.category.toLowerCase()}${product.img}` ||
              "/placeholder/placeholder.svg"
            }
            alt={product.name}
            width={250}
            height={250}
          />
          <Link
            href={`/products/${product.category.toLowerCase()}/${product.id}`}
            className="absolute inset-0 p-2 bg-gray-200/30 rounded-lg hover:bg-gray-600/20 transition-all 
                duration-300 text-2xl text-white font-semibold flex items-center justify-center opacity-0 hover:opacity-100"
          >
            {product.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
