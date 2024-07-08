"use client";

import { useRouter } from "next/navigation";
import { Button } from "../Button";
import { Logo } from "../Logo";
import { Navbar } from "./components/Navbar";

export function Header() {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center w-full h-24 px-[1.375rem]">
      <header className="flex justify-between items-center w-full md:max-w-7xl gap-4">
        <Logo />

        <Navbar />

        <div className="flex items-center space-x-4">
          <Button
            text="Criar conta"
            variant="ghost"
            optionalClass="md:w-[7rem] md:h-[3.125rem] lg:w-[8.75rem]"
            onClick={() => router.replace("https://app.bspay.co/register")}
          />
          <Button
            text="Login"
            variant="fill"
            optionalClass="md:w-[7rem] md:h-[3.125rem] lg:w-[8.75rem]"
            onClick={() => router.replace("https://app.bspay.co/login")}
          />
        </div>
      </header>
    </div>
  );
}
