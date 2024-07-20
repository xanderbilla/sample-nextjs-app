import ProductSection from "@/components/Section/FeaturedSection";
import { products } from "@/static/data";
import React from "react";

type Props = {};

export default function Featured({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-4">
      <div className="text-4xl">Featured</div>

      {/*
       * If the product section is not featured, it will display all products.
       * To display only the first 6 products, set the isFeatured prop to true.
       */}

      <ProductSection data={products}/>
    </div>
  );
}
