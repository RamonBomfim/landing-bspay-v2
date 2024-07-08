import { Star, StarHalf } from "@phosphor-icons/react/dist/ssr";
import { ReactNode } from "react";

export const getStars = (rating: number, name: string) => {
  const stars: ReactNode[] = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(
        <Star
          key={`${i}-${name}`}
          className="w-5 h-5 text-green-primary"
          weight="fill"
        />
      );
    } else if (rating >= i - 0.5) {
      stars.push(
        <StarHalf
          key={`${i + 0.5}-${name}`}
          className="w-5 h-5 text-green-primary"
          weight="fill"
        />
      );
    } else {
      stars.push(<Star key={i} className="w-5 h-5 text-green-primary" />);
    }
  }

  return stars;
};
