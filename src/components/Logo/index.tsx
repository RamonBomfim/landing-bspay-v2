import Image from "next/image";
import logo from "../../assets/logo.svg";

export function Logo() {
  return (
    <div>
      <a href="/" className="flex items-center">
        <Image
          src={logo}
          alt="Logo"
          sizes="100vw"
          className="w-20 md:w-36 h-auto"
          priority
        />
      </a>
    </div>
  );
}
