import { WhyCardProps } from "@/types/WhyCard";

export function WhyCard({
  icon: Icon,
  title,
  description,
  className,
  textOrientation = "left",
}: WhyCardProps) {
  return (
    <div
      className={`flex flex-col lg:items-center w-full lg:max-w-[22.5rem] gap-3 p-3 ${className}`}
    >
      <div className="flex items-center justify-center w-20 h-20 rounded-xl bg-green-primary">
        <Icon className="w-10 h-auto text-white" />
      </div>

      <h4
        className={`font-ibmPlex font-semibold text-2xl text-blue-text ${
          textOrientation === "right" ? "text-right" : "text-left"
        } lg:text-center max-w-[10rem] lg:w-full`}
      >
        {title}
      </h4>

      <p
        className={`font-franklin font-medium text-lg text-gray-border ${
          textOrientation === "right" ? "text-right" : "text-left"
        } lg:text-center max-w-[15rem] lg:w-full`}
      >
        {description}
      </p>
    </div>
  );
}
