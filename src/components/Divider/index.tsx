import Image from "next/image";
import divider from "../../assets/divider.png";

export function Divider({
  type = "horizontal",
  optionalClass,
}: {
  type?: "vertical" | "horizontal";
  optionalClass?: string;
}) {
  return (
    <div
      className={`flex ${
        type === "vertical" ? "flex-col" : "flex-row"
      } items-center ${optionalClass}`}
    >
      <div
        className={`${
          type === "vertical" ? "w-0.5 h-1/2" : "w-1/2 h-0.5"
        } bg-gray-400`}
      ></div>
      <Image
        src={divider}
        alt="Divisão de seção"
        sizes="100vw"
        className="w-9 h-auto z-10"
        priority
      />
      <div
        className={`${
          type === "vertical" ? "w-0.5 h-1/2" : "w-1/2 h-0.5"
        } bg-gray-400`}
      ></div>
    </div>
  );
}
