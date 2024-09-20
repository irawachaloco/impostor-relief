import Link from "next/link";

type LinkProps = {
  id: number;
  url: string;
  text: string;
};

type LinksGridProps = {
  links: LinkProps[];
};

export const LinksGrid: React.FC<LinksGridProps> = ({ links }) => {
  return (
    <ul className="grid md:grid-cols-2 gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <Link
            href={link.url}
            className="bg-[#efefef] hover:scale-[101%] hover:bg-[#d4e6f1] hover:shadow border rounded border-[#718394]/20 hover:border-[#718394]/40 block transition _max-w-xs"
          >
            <p className="p-2 text-[#94a3b8] hover:text-[#475569]">
              {link.text}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
