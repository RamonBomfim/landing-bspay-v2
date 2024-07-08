export function NavLink({ id, label }: { id: string; label: string }) {
  return (
    <a
      href={`#${id}`}
      className="text-gray-600 font-jakarta font-semibold md:text-base lg:text-lg uppercase w-auto whitespace-nowrap hover:text-gray-800"
    >
      {label}
    </a>
  );
}
