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
            className="bg-[#efefef] hover:scale-[101%] hover:bg-[#e7e7e7] hover:shadow border rounded-xl border-[#718394]/20 hover:border-[#718394]/40 block transition flex justify-center text-[rgba(255,105,180,0.75)]"
          >
            <p
              className={`depth before:content py-8 depth before:content text-[1.25em] lg:text-[2em] md:text-[1.75em]`}
            >
              {link.text}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
