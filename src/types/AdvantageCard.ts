import { StaticImageData } from "next/image";

export type Advantages = {
  id: number;
  advantage: string;
};

export interface AdvantageCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  advantages: Advantages[];
}
