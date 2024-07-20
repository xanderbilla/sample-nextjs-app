import { defaultRoutes } from "@/static/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function Sidebar({ open, setOpen }: Props) {

  const path = usePathname();

  const closeBtn = () => {
    setOpen(!open);
  };


  return (
    <div className="static w-full md:hidden h-screen flex flex-col items-start justify-start gap-4 
    px-8 bg-white transition duration-500">
      <Image
        src="/icons/close.svg"
        alt="Close"
        width={40}
        height={40}
        className="absolute top-24 right-8 cursor-pointer h-12 w-12 rounded-full bg-gray-400/10 p-2"
        onClick={closeBtn}
      />
      {defaultRoutes.map((route) => (
        <Link key={route.href} href={route.href} className="text-lg">
          {route.label}
        </Link>
      ))}
      <div className="grid grid-cols-2 gap-4">
        <Link
          href="/signin"
          className="text-lg border-2 border-black/40 px-10 py-2 rounded-md bg-slate-600 text-white"
        >
          Sign In
        </Link>
        <Link
          href="/signup"
          className="text-lg border-2 border-black/40 px-10 py-2 rounded-md hover:bg-slate-600 hover:text-white"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
