import Image from "next/image";
import React from "react";

type Props = {};

export default function NotFound({}: Props) {
  return (
    <div className="h-96 flex items-center justify-center">
      <div className="">
        <Image
          src="/icons/404.png"
          alt="404"
          width={400}
          height={400}
          priority={true}
          className="w-auto h-72"
        />
      </div>
    </div>
  );
}
