import { IconProps } from "@phosphor-icons/react";
import { ComponentType } from "react";

export interface WhyCardProps {
  icon: ComponentType<IconProps>;
  title: string;
  description: string;
  className?: string;
}
