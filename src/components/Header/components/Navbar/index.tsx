import { NavLink } from "../NavLink";

const navLinks: { id: string; label: string }[] = [
  {
    id: "solutions",
    label: "soluções",
  },
  {
    id: "rates",
    label: "taxas",
  },
  {
    id: "about",
    label: "sobre nós",
  },
  {
    id: "help",
    label: "ajuda",
  },
];

export function Navbar() {
  return (
    <nav className="hidden md:flex items-center w-auto max-w-[38.875rem] md:gap-6 lg:gap-24">
      {navLinks.map(({ id, label }) => (
        <NavLink key={id} id={id} label={label} />
      ))}
    </nav>
  );
}
