"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import ProjectLogo from "./custom-ui/ProjectLogo";
import Image from "next/image";
import { defaultRoutes } from "@/static/data";
import { usePathname, useRouter } from "next/navigation";
import Sidebar from "./Sidebar";
import ProfileMenu from "@/components/ProfileMenu";

type Props = {};

export default function Navbar({}: Props) {
  const path = usePathname();
  const catPath = path.split("/")
  const isSignIn = path.includes("signin");
  const [open, setOpen] = useState(false);
  const [authCheck, setAuthCheck] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);  

  const router = useRouter();

  const handleAuthBtn = () => {
    router.push("/signin");
  };

  const openNav = () => {
    setOpen(!open);
  };

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    setOpenMenu(false);
    setOpen(false);
  }, [path]);

  return (
    <>
      <div
        className="relative w-full min-h-24 flex items-center justify-between gap-4 md:px-16 bg-gradient-to-t
       from-slate-50 via-slate-300 to-slate-400"
      >
        <div className="min-w-72 flex md:flex-row items-center justify-between gap-4">
          <div className="w-full hidden md:flex items-center justify-start md:gap-4 lg:gap-6">
            <ProjectLogo onlyProjectLogo />
            {defaultRoutes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`text-lg ${route.label.toLowerCase() == catPath[2] ? "font-semibold" : ""
                }`}
              >
                {route.label}
              </Link>
            ))}
          </div>
          <div
            className="flex cursor-pointer md:hidden flex-col gap-1 border-2 p-2 rounded-md 
      border-gray-500/50 transition-all duration-300 ease-in-out translate-x-6"
            onClick={openNav}
            onMouseEnter={handleMenu}
            onMouseLeave={handleMenu}
          >
            <div className="w-6 h-1 bg-black/70" />
            <div className="w-6 h-1 bg-black/70" />
            <div className="w-6 h-1 bg-black/70" />
          </div>
          <ProjectLogo onlyProjectLogo className="md:hidden" />
        </div>
        <div className="flex items-center justify-start gap-6 px-4">
          <Link href="https://github.com/xanderbilla" className="flex items-center justify-center gap-2">
            <Image src="/icons/github.svg" alt="Menu" width={40} height={40}/>
          </Link>
        </div>
      </div>
      {open && <Sidebar open={open} setOpen={setOpen} />}
    </>
  );
}
