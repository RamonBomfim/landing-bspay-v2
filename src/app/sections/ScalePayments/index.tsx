import { SectionContainer } from "@/components/SectionContainer";
import Image from "next/image";
import { useRouter } from "next/navigation";
import initialNotebook from "../../../assets/initial-notebook.png";

export function ScalePayments() {
  const router = useRouter();

  const redirect = () => {
    router.replace("https://app.bspay.co/register");
  };

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
          src={initialNotebook}
          alt="Notebook com Bspay aberto"
          sizes="100vw"
          className="w-80 lg:w-[40rem] h-auto"
          priority
        />

        <article className="flex flex-col h-full gap-5 md:gap-6">
          <h5 className="font-poppins font-bold text-lg md:text-2xl text-green-primary">
            Quem não cobra, não recebe!
          </h5>

          <h3 className="font-jakarta font-bold text-3xl md:text-5xl text-blue-text">
            Expanda seu negócio com facilidade
          </h3>

          <p className="font-jakarta font-medium text-sm md:text-lg text-gray-text">
            a BSPAY oferece uma solução completa para seu negócio, onde você
            gerencia todas as suas transações financeiras de maneira rápida e
            segura em diferentes países e moedas.
          </p>

          <button
            className="flex items-center justify-center w-48 md:w-60 h-10 md:h-12 rounded-xl font-poppins font-medium text-sm md:text-base bg-green-primary text-white hover:brightness-90 hover:border hover:border-green-secondary transition whitespace-nowrap"
            onClick={redirect}
          >
            Criar conta
          </button>
        </article>
      </div>
    </SectionContainer>
  );
}
