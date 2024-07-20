"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  data: {
    id: number;
    img: string;
    name: string;
    price: number;
    category: string;
    onSale?: boolean;
  };
};

export default function ProductCard({ data }: Props) {
  return (
    <Link
      href={`/products/${data.category.toLowerCase()}/${data.id}`}
      rel="noopener noreferrer"
    >
      <div className="min-h-auto flex justify-center items-center">
        <div className="container flex justify-center">
          <div className="max-w-sm">
            <div
              className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 
            rounded-lg"
            >
              <div
                className="h-64 lg:h-64 w-72 lg:w-72 margin-auto flex flex-col items-center 
              justify-center gap-4 p-4 bg-gray-100 rounded-lg"
              >
                <Image
                  className="h-64 w-auto rounded-t-lg object-contain"
                  src={`/products/${data.category.toLowerCase()}${data.img}`}
                  alt={data.name}
                  width={200}
                  height={200}
                />
              </div>
              <div className="p-4 rounded-lg bg-white">
                <h1
                  className="text-gray-700 font-bold text-xl mb-3 hover:text-gray-900 
                hover:cursor-pointer"
                >
                  {data.name}
                </h1>
                {/* <button
                                    className={`mt-6 py-2 px-4 bg-black text-base text-white font-medium rounded-lg shadow-md 
                                    hover:shadow-lg transition duration-300 ${isProductInCart ? 'cursor-not-allowed bg-gray-800/50' : 'hover:bg-gray-800'}`}
                                    onClick={() => addToCart(data)}
                                    disabled={isProductInCart}
                                >
                                    {isProductInCart ? 'Added' : 'Add to cart'}
                                </button> */}
                <button
                  className={`py-2 px-4 bg-black text-white font-medium rounded-lg 
                  shadow-md hover:shadow-lg transition duration-300 hover:bg-gray-800'}`}
                >
                  Add to cart
                </button>
              </div>
              <div className="absolute top-2 right-2 flex items-center gap-2">
                {data.onSale ? (
                  <span className="text-md py-2 px-4 rounded-lg shadow-md bg-gray-600 font-medium text-white">
                    SALE
                  </span>
                ) : null}
                <span className="text-md py-2 px-4 bg-white rounded-lg shadow-md">
                  &#8377;{data.price}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
