import { IconProps } from "@phosphor-icons/react";
import { ComponentType } from "react";

interface CardProps {
  icon: ComponentType<IconProps>;
  text: string;
  className?: string;
}
export function Card({ icon: Icon, text, className }: CardProps) {
  return (
    <div
      className={`flex items-center gap-3 lg:gap-6 min-w-32 lg:min-w-72 h-10 lg:h-16 px-3 lg:px-5 rounded-[.625rem] lg:rounded-[1.25rem] bg-green-secondary ${className}`}
    >
      <div className="flex items-center justify-center h-7 lg:h-10 w-7 lg:w-10 rounded-md bg-green-primary">
        <Icon className="w-3 lg:w-5 h-auto text-gray-white" />
      </div>

      <h4 className="font-ibmPlex font-semibold text-xs lg:text-xl text-black">
        {text}
      </h4>
    </div>
  );
}
