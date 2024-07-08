import { WhyCardProps } from "@/types/WhyCard";

export function WhyCard({
  icon: Icon,
  title,
  description,
  className,
}: WhyCardProps) {
  return (
    <div
      className={`flex flex-col lg:items-start w-full gap-3 p-3 ${className}`}
    >
      <div className="flex items-center justify-center w-20 h-20 rounded-xl bg-green-primary">
        <Icon className="w-10 h-auto text-white" />
      </div>

      <h4 className="font-ibmPlex font-semibold text-2xl text-blue-text max-w-[8.75rem] lg:w-full">
        {title}
      </h4>

      <p className="font-franklin font-medium text-lg text-gray-border max-w-[13.5rem] lg:w-full">
        {description}
      </p>
    </div>
  );
}
