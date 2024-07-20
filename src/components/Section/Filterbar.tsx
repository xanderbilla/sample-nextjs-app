import React from "react";
import CategoryCard from "../Card/CategoryCard";
import Btn from "@/components/custom-ui/Btn";

type Props = {
  data: any[];
};

export default function Filterbar({
  data
}: Props) {
  return (
    <div className="flex flex-wrap gap-2 items-center justify-start w-full my-4">
      {
        data.map((item, idx) => (
          <CategoryCard
          label={item.label}
          className="bg-gray-200/50 cursor-pointer h-8 md:h-10 text-sm md:text-base"
          key={idx}
        />
        ))
      }
      <Btn
        label="Clear"
        className="bg-red-900/60 text-white hover:bg-red-900 hover:text-white cursor-pointer h-8 md:h-10 text-sm md:text-base"
        action={() => console.log("Clear")}
      />
    </div>
  );
}
