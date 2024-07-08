import {
  AppleLogo,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import playstoreLogo from "../../assets/playstore-logo.svg";
import { Logo } from "../Logo";
import { SectionContainer } from "../SectionContainer";

export function Footer() {
  return (
    <SectionContainer
      additionalSectionClass="bg-gray-black"
      additionalContainerClass="py-14 px-[1.375rem] lg:px-0"
    >
      <div className="flex lg:items-center justify-between w-full">
        <div className="flex flex-col gap-4 lg:gap-16">
          <Logo />

          <p className="font-jakarta font-bold text-xs lg:text-2xl text-gray-white">
            A Gateway mais completa do mercado
          </p>

          <span className="font-jakarta font-regular text-[.625rem] lg:text-base text-gray-text">
            @{new Date().getFullYear()} BS Pay LTD. Todos direitos reservados.
          </span>

          <div className="flex lg:hidden flex-col gap-4">
            <h5 className="font-jakarta font-bold text-base text-green-primary">
              Links
            </h5>

            <a
              href="#"
              className="font-jakarta font-medium text-xs text-gray-white"
            >
              Navegador
            </a>
            <a
              href="#"
              className="font-jakarta font-medium text-xs text-gray-white"
            >
              Desenvolvedores
            </a>
            <a
              href="#"
              className="font-jakarta font-medium text-xs text-gray-white"
            >
              Atendimento
            </a>
          </div>
        </div>

        <div className="hidden lg:flex gap-5">
          <div className="flex flex-col gap-8">
            <span className="font-jakarta font-bold text-lg text-green-primary">
              Navegação
            </span>

            <a
              href="#"
              className="text-gray-white font-jakarta font-medium text-sm w-auto whitespace-nowrap"
            >
              API PIX
            </a>
            <a
              href="#"
              className="text-gray-white font-jakarta font-medium text-sm w-auto whitespace-nowrap"
            >
              Câmbio Internacional
            </a>
            <a
              href="#"
              className="text-gray-white font-jakarta font-medium text-sm w-auto whitespace-nowrap"
            >
              Gateway de Pagamentos
            </a>
            <a
              href="#"
              className="text-gray-white font-jakarta font-medium text-sm w-auto whitespace-nowrap"
            >
              Internet Banking
            </a>
          </div>

          <div className="flex flex-col gap-8">
            <span className="font-jakarta font-bold text-lg text-green-primary">
              Desenvolvedores
            </span>

            <a
              href="#"
              className="text-gray-white font-jakarta font-medium text-sm w-auto whitespace-nowrap"
            >
              Preços
            </a>
            <a
              href="#"
              className="text-gray-white font-jakarta font-medium text-sm w-auto whitespace-nowrap"
            >
              Ajuda
            </a>
            <a
              href="#"
              className="text-gray-white font-jakarta font-medium text-sm w-auto whitespace-nowrap"
            >
              Login
            </a>
            <a
              href="#"
              className="text-gray-white font-jakarta font-medium text-sm w-auto whitespace-nowrap"
            >
              Criar Conta
            </a>
          </div>

          <div className="flex flex-col gap-8">
            <span className="font-jakarta font-bold text-lg text-green-primary">
              Atendimento
            </span>

            <span className="text-gray-white font-jakarta font-medium text-sm w-auto whitespace-nowrap">
              contato@Bspay.app
            </span>

            <span className="text-gray-white font-jakarta font-medium text-sm w-auto whitespace-nowrap">
              sac@Bspay.app
            </span>

            <span className="text-gray-white font-jakarta font-medium text-sm w-auto whitespace-nowrap">
              0800 000 0000
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h5 className="font-jakarta font-semibold text-base lg:text-xl text-gray-white">
            Redes Sociais
          </h5>

          <div className="flex items-center gap-7">
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-border bg-inherit"
            >
              <InstagramLogo
                className="w-6 h-6 text-gray-border"
                weight="fill"
              />
            </a>

            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-border bg-inherit"
            >
              <FacebookLogo
                className="w-6 h-6 text-gray-border"
                weight="fill"
              />
            </a>

            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-border bg-inherit"
            >
              <LinkedinLogo
                className="w-6 h-6 text-gray-border"
                weight="fill"
              />
            </a>
          </div>

          <a
            href="#"
            className="flex items-center justify-center w-44 h-14 gap-4 bg-black border border-gray-border rounded-lg"
          >
            <Image
              src={playstoreLogo}
              className="w-6 h-7"
              alt="Logo da playstore"
              priority
            />
            <div className="flex flex-col">
              <span className="font-jakarta font-medium text-xs text-white">
                Disponível
              </span>
              <span className="font-jakarta font-medium text-lg text-white">
                Google Play
              </span>
            </div>
          </a>

          <a
            href="#"
            className="flex items-center justify-center w-44 h-14 gap-4 bg-black border border-gray-border rounded-lg"
          >
            <AppleLogo
              className="w-6 h-7 text-white"
              weight="fill"
              alt="Logo da apple"
            />
            <div className="flex flex-col">
              <span className="font-jakarta font-medium text-xs text-white">
                Disponível
              </span>
              <span className="font-jakarta font-medium text-lg text-white">
                App Store
              </span>
            </div>
          </a>
        </div>
      </div>
    </SectionContainer>
  );
}
