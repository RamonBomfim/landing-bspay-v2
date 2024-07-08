import { IconProps } from "@phosphor-icons/react";
import { ComponentType } from "react";

export interface ReasonCardProps {
  icon: ComponentType<IconProps>;
  title: string;
  description: string;
}
