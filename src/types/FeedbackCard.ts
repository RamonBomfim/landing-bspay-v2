import { StaticImageData } from "next/image";

export interface FeedbackCardProps {
  name: string;
  rating: number;
  feedback: string;
  description: string;
  image: StaticImageData;
}
