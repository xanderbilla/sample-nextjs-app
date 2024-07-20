import React from "react";
import { twMerge } from "tw-merge";

type Props = {
  className?: string;
  label: string;
  action: () => void;
};

export default function Btn({ className, label, action }: Props) {
  return (
    <button
      className={twMerge(`text-lg font-semibold flex items-center justify-center p-4
            bg-gray-200 rounded-lg hover:bg-neutral-300 hover:text-black ${className}`)}
      onClick={action}
    >
      {label}
    </button>
  );
}
