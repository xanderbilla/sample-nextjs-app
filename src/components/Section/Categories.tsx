import { categories } from "@/static/data";
import React from 'react'
import CategoryCard from "../Card/CategoryCard";

type Props = {}

export default function Categories({}: Props) {
  return (
    
    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map((category, index) => (
        <CategoryCard label={category.label} href={category.href} key={index} />
        ))}
    </div>
  )
}