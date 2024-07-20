import Link from "next/link";
import React from "react";
import { twMerge } from "tw-merge";

type Props = {
  label: string;
  href?: string;
  className?: string;
};

export default function CategoryCard({ label, href, className}: Props) {
  return (
    <>
      {href ? (
        <Link
          href={`/products${href}`}
          className={twMerge(`text-lg font-semibold flex items-center justify-center p-4
            bg-gray-100 rounded-lg hover:bg-neutral-200 hover:text-black ${className}`)}
        >
          {label}
        </Link>
      ) : (
        <div
        className={twMerge(`text-lg font-semibold flex items-center justify-center p-4
          bg-gray-100 rounded-lg hover:bg-neutral-200 hover:text-black ${className}`)}
        >
          {label}
        </div>
      )}
    </>
  );
}
