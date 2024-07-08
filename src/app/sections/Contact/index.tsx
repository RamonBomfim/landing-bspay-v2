import { Button } from "@/components/Button";
import { Divider } from "@/components/Divider";
import { SectionContainer } from "@/components/SectionContainer";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Envelope, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { UseFormReturn } from "react-hook-form";

interface FormProps {
  name: string;
  lastName: string;
  companyName: string;
  email: string;
  phone: string;
}

interface ContactProps {
  form: UseFormReturn<FormProps>;
  onSubmit: (values: FormProps) => void;
}

export function Contact({ form, onSubmit }: ContactProps) {
  return (
    <SectionContainer
      additionalSectionClass="pt-[8.75rem] pb-14"
      additionalContainerClass="px-[1.375rem] lg:px-0"
    >
      <div className="flex flex-col lg:flex-row justify-between w-full h-full">
        <article className="flex flex-col gap-7 pb-7 w-full lg:w-[29.375rem]">
          <h4 className="font-jakarta font-bold text-3xl lg:text-5xl text-gray-black text-center lg:text-left">
            Agende uma demonstração agora mesmo!
          </h4>

          <p className="font-jakarta font-medium text-base text-blue-text">
            Através desta solução integrada ao nosso sistema de cobrança, você
            terá acesso a uma cadência de cobrança dinâmica, ágil e
            personalizada ao perfil e comportamento de pagamento de cada
            cliente, para atingi-los através de múltiplos canais, maximizando
            pagamentos e minimizando a inadimplência.
          </p>

          <p className="font-jakarta font-medium text-base text-blue-text">
            Entre em contato agora mesmo e agende sua demonstração para otimizar
            e descomplicar a gestão de cobranças da sua empresa!
          </p>

          <div className="flex flex-col gap-5 max-w-[13rem]">
            <div className="flex gap-1">
              <WhatsappLogo className="w-8 h-8 text-green-primary" />

              <div className="flex flex-col gap-1 max-w-[11rem]">
                <h6 className="font-jakarta font-bold text-base text-gray-black">
                  Fale pelo WhatsApp:
                </h6>
                <span className="font-jakarta font-regular text-base text-gray-black font-regular">
                  (11)9 9999-9999
                </span>
              </div>
            </div>

            <div className="flex gap-1">
              <Envelope className="w-8 h-8 text-green-primary" />

              <div className="flex flex-col gap-1 max-w-[11rem]">
                <h6 className="font-jakarta font-bold text-base text-gray-black">
                  Envie um e-mail:
                </h6>
                <span className="font-jakarta font-regular text-base text-gray-black font-regular">
                  bspay@gmail.com
                </span>
              </div>
            </div>
          </div>
        </article>

        <Divider type="vertical" optionalClass="hidden" />
        <Divider type="horizontal" optionalClass="lg:hidden" />

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-7 pt-7 lg:pt-10 w-full lg:w-[29.375rem]"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-jakarta font-medium text-base text-black">
                    Nome
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-jakarta font-medium text-base text-black">
                    Sobrenome
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-jakarta font-medium text-base text-black">
                    Nome da empresa
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-jakarta font-medium text-base text-black">
                    E-mail
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-jakarta font-medium text-base text-black">
                    Telefone
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              text="Enviar"
              variant="fill"
              optionalClass="w-[9.375rem] h-[3.125rem]"
              type="submit"
            />
          </form>
        </Form>
      </div>
    </SectionContainer>
  );
}
