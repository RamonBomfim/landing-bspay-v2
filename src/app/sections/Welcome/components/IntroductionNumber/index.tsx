import { useEffect, useState } from "react";

interface IntroductionNumberProps {
  number: number;
  span: string;
  subText: string;
}

export function IntroductionNumber({
  number,
  span,
  subText,
}: IntroductionNumberProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // Duração da animação em milissegundos
    const increment = number / (duration / 10);

    const counter = setInterval(() => {
      start += increment;
      if (start >= number) {
        setCount(number);
        clearInterval(counter);
      } else {
        setCount(Math.ceil(start));
      }
    }, 10);

    return () => clearInterval(counter);
  }, [number]);

  return (
    <div className="flex flex-col items-center gap-3">
      <h2 className="text-3xl lg:text-5xl font-jakarta font-bold text-blue-text">
        {count}
        <span className="text-3xl lg:text-5xl font-jakarta font-bold text-green-primary">
          {span}
        </span>
      </h2>
      <span className="text-xs lg:text-xl font-jakarta font-bold text-gray-border">
        {subText}
      </span>
    </div>
  );
}
