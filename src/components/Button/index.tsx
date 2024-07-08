import { IconProps } from "@phosphor-icons/react";
import { ButtonHTMLAttributes, ComponentType } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: ComponentType<IconProps>;
  optionalClass?: string;
  variant: "fill" | "ghost";
}

export function Button({
  text,
  icon: Icon,
  optionalClass,
  variant,
  ...rest
}: ButtonProps) {
  const baseClasses =
    "w-24 h-8 rounded-[.625rem] md:rounded-xl px-4 py-2 font-jakarta font-bold text-xs md:text-lg transition whitespace-nowrap flex items-center justify-center";
  const variantClasses =
    variant === "fill"
      ? "bg-green-primary text-white hover:brightness-90 hover:border hover:border-green-secondary"
      : "border border-gray-border text-green-primary hover:bg-green-primary hover:text-white hover:border-green-secondary hover:brightness-90";

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${optionalClass}`}
      {...rest}
    >
      {Icon && <Icon className="mr-2" />}
      {text}
    </button>
  );
}
