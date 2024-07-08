import { SectionContainer } from "@/components/SectionContainer";
import Image from "next/image";
import bancoCentralLogo from "../../../assets/banco-central-logo.svg";
import certificacaoPciLogo from "../../../assets/certificacao-pci-logo.svg";
import reclameAquiLogo from "../../../assets/reclame-aqui-logo.svg";

export function Guarantees() {
  return (
    <SectionContainer
      additionalSectionClass="pt-14 pb-10 md:pb-[11.25rem]"
      additionalContainerClass="items-center gap-10 md:gap-[5.625rem] px-[1.375rem] md:px-0"
    >
      <h4 className="font-jakarta font-medium text-2xl md:text-3xl text-blue-text text-center max-w-[47.5rem]">
        Sabemos o valor do seu esforço e zelamos pela integridade e{" "}
        <span className="text-green-primary">
          segurança em todos os níveis da nossa operação
        </span>
      </h4>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full">
        <div className="flex flex-col items-center gap-2 w-[19.75rem] min-h-[14.0625rem] max-h-[15.5rem]">
          <Image
            src={certificacaoPciLogo}
            alt="Logo da certificação PCI DSS"
            sizes="100vw"
            className="w-24 h-auto"
            priority
          />

          <div className="flex flex-col items-center gap-4 max-w-[14rem]">
            <span className="jakarta font-bold text-base text-gray-black text-center">
              PCI DSS COMPLIANT
            </span>

            <p className="font-jakarta font-medium text-base text-gray-black text-center">
              Certificação PCI Compliance para Transações Seguras
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 w-[19.75rem] min-h-[14.0625rem] max-h-[15.5rem]">
          <Image
            src={bancoCentralLogo}
            alt="Logo do banco central"
            sizes="100vw"
            className="w-60 h-auto"
            priority
          />

          <div className="flex flex-col items-center gap-4 max-w-[14rem]">
            <span className="jakarta font-bold text-base text-gray-black text-center">
              BANCO CENTRAL DO BRASIL
            </span>

            <p className="font-jakarta font-medium text-base text-gray-black text-center">
              Licenciado pelo Banco Central do Brasil{" "}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 w-[19.75rem] min-h-[14.0625rem] max-h-[15.5rem]">
          <Image
            src={reclameAquiLogo}
            alt="Logo da certificação PCI DSS"
            sizes="100vw"
            className="w-[11.375rem] h-auto"
            priority
          />

          <div className="flex flex-col items-center gap-4 max-w-[14rem]">
            <span className="jakarta font-bold text-base text-gray-black text-center">
              PRÊMIO RA {new Date().getFullYear() - 1}
            </span>

            <p className="font-jakarta font-medium text-base text-gray-black text-center">
              Indicado ao Prêmio RA{new Date().getFullYear() - 1} na Categoria
              Bancos e Cartões Digitais
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
