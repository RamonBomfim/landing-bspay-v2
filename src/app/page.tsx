"use client";

import { Footer } from "@/components/Footer";
import { Advantages } from "./sections/Advantages";
import { ClientsFeedbacks } from "./sections/ClientsFeedbacks";
import { Faq } from "./sections/Faq";
import { ManagmentFeatures } from "./sections/ManagmentFeatures";
import { ReadyToGo } from "./sections/ReadyToGo";
import { ReasonsForUse } from "./sections/ReasonsForUse";
import { ScalePayments } from "./sections/ScalePayments";
import { Welcome } from "./sections/Welcome";
import { WhyChoose } from "./sections/WhyChoose";

// TODO: Overview do que precisa ser componentizado
export default function Home() {
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

      <ReadyToGo />

      <Footer />
    </>
  );
}
