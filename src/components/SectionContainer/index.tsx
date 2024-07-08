interface SectionContainerProps {
  children: React.ReactNode;
  additionalSectionClass?: string;
  additionalContainerClass?: string;
}

export function SectionContainer({
  children,
  additionalSectionClass,
  additionalContainerClass,
}: SectionContainerProps) {
  return (
    <section
      className={`flex justify-center w-full md:px-[1.375rem] ${additionalSectionClass}`}
    >
      <div
        className={`flex flex-col w-full md:max-w-7xl h-full ${additionalContainerClass}`}
      >
        {children}
      </div>
    </section>
  );
}
