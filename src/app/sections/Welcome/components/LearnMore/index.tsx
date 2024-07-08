import { Play } from "@phosphor-icons/react/dist/ssr";

export function LearnMore() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center h-9 w-9 lg:w-20 lg:h-20 rounded-md lg:rounded-[.625rem] bg-[#124734]">
        <Play
          className="w-3 h-auto lg:w-8 text-green-secondary"
          weight="fill"
        />
      </div>
      <div className="flex flex-col">
        <h4 className="text-base lg:text-2xl font-jakarta font-bold text-green-primary">
          Saiba mais...
        </h4>
        <span className="text-xs lg:text-xl font-jakarta font-medium text-gray-white">
          Sobre o seu gateway
        </span>
      </div>
    </div>
  );
}
