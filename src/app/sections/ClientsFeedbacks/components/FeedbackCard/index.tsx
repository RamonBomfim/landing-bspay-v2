import { getStars } from "@/lib/getStars";
import { FeedbackCardProps } from "@/types/FeedbackCard";
import { Quotes } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export function FeedbackCard({
  name,
  rating,
  feedback,
  description,
  image,
}: FeedbackCardProps) {
  const stars = getStars(rating, name);

  return (
    <div className="flex flex-col h-auto w-full gap-3 sm:gap-14 bg-gray-white rounded-[1.25rem] border-[.375rem] border-green-primary p-9">
      <p className="relative font-franklin font-medium text-base sm:text-lg text-blue-text">
        <Quotes
          className="absolute top-[-.5rem] left-[-1.5rem] w-4 h-4 text-gray-border rotate-180"
          weight="fill"
        />
        {feedback}
      </p>

      <div className="flex flex-col gap-2 sm:gap-4 w-full">
        <div className="flex justify-between gap-[.375rem] max-w-24">
          {stars.map((star) => star)}
        </div>
        <div className="flex items-center gap-5 w-full">
          <Image
            src={image}
            alt="Pessoa"
            sizes="100vw"
            className="w-14 h-14 rounded-full"
            priority
          />

          <div className="flex flex-col gap-1">
            <h5 className="font-ibmPlex font-semibold text-lg sm:text-xl text-blue-text">
              {name}
            </h5>
            <span className="font-franklin font-medium text-base text-gray-border">
              {description}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
