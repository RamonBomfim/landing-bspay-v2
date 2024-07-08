import { SectionContainer } from "@/components/SectionContainer";
import Image from "next/image";
import diagonalNotebook from "../../../assets/diagonal-notebook.svg";

export function ScalePayments() {
  return (
    <SectionContainer
      additionalSectionClass="h-auto pt-7 md:pt-14"
      additionalContainerClass="gap-7 md:gap-14 px-[1.375rem] md:px-0"
    >
      <h3 className="font-jakarta font-bold text-3xl md:text-4xl text-center md:text-left">
        Escale o gerenciamento de seus pagamentos
      </h3>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-7 md:gap-20">
        <Image
          src={diagonalNotebook}
          alt="Notebook na diagonal"
          sizes="100vw"
          className="w-80 lg:w-[40rem] h-auto"
          priority
        />

        <article className="flex flex-col h-full gap-5 md:gap-6">
          <h5 className="font-poppins font-bold text-lg md:text-2xl text-green-primary">
            Quem não cobra, não recebe!
          </h5>

          <h3 className="font-jakarta font-bold text-3xl md:text-5xl text-blue-text">
            Automatize as cobranças da sua empresa!
          </h3>

          <p className="font-jakarta font-medium text-sm md:text-lg text-gray-text">
            Descubra como modernizar e simplificar a gestão de cobranças do seu
            negócio com nossa Régua de Cobrança Inteligente, ferramenta
            revolucionária projetada para otimizar o processo de contas a
            receber.
          </p>
          <p className="font-jakarta font-medium text-sm md:text-lg text-gray-text">
            Através desta solução integrada ao nosso sistema de cobrança, você
            terá acesso a uma cadência de cobrança dinâmica, ágil e
            personalizada ao perfil e comportamento de pagamento de cada
            cliente, para atingi-los através de múltiplos canais, maximizando
            pagamentos e minimizando a inadimplência.
          </p>

          <button className="flex items-center justify-center w-48 md:w-60 h-10 md:h-12 rounded-xl font-poppins font-medium text-sm md:text-base bg-green-primary text-white hover:brightness-90 hover:border hover:border-green-secondary transition whitespace-nowrap">
            Conheça essa solução
          </button>

          <p className="font-jakarta font-regular text-sm md:text-2xl text-gray-text">
            A <span className="font-extrabold text-green-primary">BSPAY</span>{" "}
            oferece uma solução completa para seu negócio, cobre e recebe
            pagamentos de forma ágil
          </p>
        </article>
      </div>
    </SectionContainer>
  );
}
