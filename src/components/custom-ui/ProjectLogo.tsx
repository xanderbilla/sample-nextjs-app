import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  onlyProjectLogo?: boolean;
  className?: string;
}

export default function ProjectLogo({ onlyProjectLogo, className }: Props) {
  return (
    <Link href="/" className={`flex flex-col md:flex-row items-center gap-4 ${className}`}>
      {onlyProjectLogo ? null : (
        <>
          <Image className="w-auto h-auto" src="/logo.png" alt="AWS Logo" width={50} height={50} />
          <Image className="w-auto h-auto hidden md:block" src="/icons/v_bar.png" alt="Vertical bar" width={50} height={50} />
        </>
      )}
      <Image
        src="/amplify.png"
        alt="AWS Amplify Logo"
        width={200}
        height={200}
        className="w-48 md:w-42"
      />
      </Link>
  );
}