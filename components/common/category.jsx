"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Category({ src, name, description, link }) {
  return (
    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
      <Image
        src={src}
        alt={name}
        height="400"
        width="400"
        className="object-contain"
      />
      <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
        {`${name}`}
      </p>

      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
        {`${description}`}
      </p>
      <Link href={link}>
        <Button>
          <span className="text-white">Shop Now</span>
        </Button>
      </Link>
    </BackgroundGradient>
  );
}
