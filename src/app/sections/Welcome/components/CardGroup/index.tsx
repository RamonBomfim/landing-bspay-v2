import { GearSix, Lock, PencilSimple } from "@phosphor-icons/react/dist/ssr";
import { Card } from "../Card";

export function CardGroup() {
  return (
    <div className="flex flex-col gap-1 absolute top-[-6rem] right-[6.625rem] md:top-[-9rem] md:right-[5.625rem] lg:right-[8rem] lg:top-[-14rem] z-10">
      <Card
        icon={PencilSimple}
        text="Personalizar"
        className="relative left-24 md:left-16"
      />
      <Card
        icon={GearSix}
        text="Controle total"
        className="relative left-12 md:left-8"
      />
      <Card icon={Lock} text="Segurança" />
    </div>
  );
}
