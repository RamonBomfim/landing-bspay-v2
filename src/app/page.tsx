"use client";

import { Footer } from "@/components/Footer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Advantages } from "./sections/Advantages";
import { ClientsFeedbacks } from "./sections/ClientsFeedbacks";
import { Faq } from "./sections/Faq";
import { ManagmentFeatures } from "./sections/ManagmentFeatures";
import { MovementInfo } from "./sections/MovementInfo";
import { ReadyToGo } from "./sections/ReadyToGo";
import { ReasonsForUse } from "./sections/ReasonsForUse";
import { ScalePayments } from "./sections/ScalePayments";
import { Welcome } from "./sections/Welcome";
import { WhyChoose } from "./sections/WhyChoose";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Seu nome deve conter pelo menos 2 letras.",
  }),
  lastName: z.string().min(2, {
    message: "Seu sobrenome deve conter pelo menos 2 letras.",
  }),
  companyName: z.string().min(2, {
    message: "O nome da sua empresa deve conter pelo menos 2 letras.",
  }),
  email: z.string().email({ message: "Email inválido." }),
  phone: z.string(),
});

// TODO: Overview do que precisa ser componentizado
export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      lastName: "",
      companyName: "",
      email: "",
      phone: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <>
      <Welcome />

      <ScalePayments />

      <ReasonsForUse />

      <ManagmentFeatures />

      <ClientsFeedbacks />

      <WhyChoose />

      <Advantages />

      <Faq />

      <MovementInfo />

      <ReadyToGo />

      <Footer />
    </>
  );
}
