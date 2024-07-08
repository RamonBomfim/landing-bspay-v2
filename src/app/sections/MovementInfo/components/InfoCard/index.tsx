export function InfoCard({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full lg:w-[27.25rem] h-32 gap-2 bg-green-primary rounded-[1.875rem]">
      <h5 className="font-jakarta font-bold text-4xl text-gray-white">
        {title}
      </h5>
      <span className="font-jakarta font-medium text-base text-gray-white">
        {subtitle}
      </span>
    </div>
  );
}
