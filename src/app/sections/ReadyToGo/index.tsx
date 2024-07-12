"use client";

import { Logo } from "@/components/Logo";
import { SectionContainer } from "@/components/SectionContainer";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "../../../assets/logo.svg";
import readyTogoNotebookMobile from "../../../assets/ready-togo-notebook-mobile.png";
import readyTogoNotebook from "../../../assets/ready-togo-notebook.png";

export function ReadyToGo() {
  const router = useRouter();

  const redirectToRegister = () => {
    router.replace("https://app.bspay.co/register");
  };

  return (
    <SectionContainer
      additionalSectionClass="pt-40 lg:pt-52 pb-24 lg:pb-12 lg:px-0"
      additionalContainerClass="items-end pl-[1.125rem] lg:pl-0"
    >
      <div className="flex flex-col lg:flex-row bg-gray-black w-full lg:w-[87%] h-auto lg:h-[30.25rem] rounded-s-[1.875rem] md:rounded-[1.875rem] pl-7 py-7 gap-7">
        <div className="flex flex-col gap-7 lg:gap-10 pr-3 lg:pr-0">
          <h4 className="font-jakarta font-bold text-3xl lg:text-5xl text-gray-white">
            Pronto para começar?
          </h4>

          <p className="font-jakarta font-regular text-lg text-gray-white lg:max-w-[33.375rem]">
            Registre-se agora e comece a gerenciar e receber seus pagamentos
            para aumentar a eficiência e agilidade financeira da sua empresa.
          </p>

          <div className="hidden lg:flex lg:flex-col lg:gap-10">
            <button className="inline-flex items-center justify-center gap-3 w-48 h-14 rounded-2xl bg-green-primary font-poppins font-bold text-base text-gray-white">
              Fazer cadastro{" "}
              <ArrowRight className="w-6 h-6 text-gray-white" weight="bold" />
            </button>

            <Logo />
          </div>
        </div>

        <div className="hidden lg:block w-1/2 h-full">
          <Image
            src={readyTogoNotebook}
            alt="Imagem de um notebook com o BsPay aberto"
            sizes="100vw"
            className="w-full h-auto"
            priority
          />
        </div>

        <div className="flex justify-between lg:hidden">
          <div className="flex flex-col justify-center gap-7">
            <button
              className="inline-flex items-center justify-center gap-3 w-48 h-14 rounded-2xl bg-green-primary font-poppins font-bold text-base text-gray-white"
              onClick={redirectToRegister}
            >
              Fazer cadastro{" "}
              <ArrowRight className="w-6 h-6 text-gray-white" weight="bold" />
            </button>

            <Image
              src={logo}
              alt="Logo"
              sizes="100vw"
              className="w-36 lg:w-56 h-auto"
              priority
            />
          </div>

          <Image
            src={readyTogoNotebookMobile}
            alt="Imagem de um notebook com o BsPay aberto"
            sizes="100vw"
            className="w-48 h-auto"
            priority
          />
        </div>
      </div>
    </SectionContainer>
  );
}
