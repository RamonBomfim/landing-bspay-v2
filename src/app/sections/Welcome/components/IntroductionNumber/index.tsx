interface IntroductionNumberProps {
  number: string;
  subText: string;
}

export function IntroductionNumber({
  number,
  subText,
}: IntroductionNumberProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <h2 className="text-3xl lg:text-5xl font-jakarta font-bold text-blue-text">
        {number}
        <span className="text-3xl lg:text-5xl font-jakarta font-bold text-green-primary">
          +
        </span>
      </h2>
      <span className="text-xs lg:text-xl font-jakarta font-bold text-gray-border">
        {subText}
      </span>
    </div>
  );
}
