"use client";

import Link from "next/link";
import { usePathname, useSelectedLayoutSegments } from "next/navigation";

// Capitalize and replace underscores
const toTitleCase = (s: string) =>
  s.replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase());

const BreadCrumb = () => {
  const segments = useSelectedLayoutSegments();
  const pathName = usePathname();

  return (
    <nav aria-label="Breadcrumb" className="pb-6">
      <ul className="flex space-x-3">
        {segments.map((segment, index) => {
          const segment_href = `/${segments.slice(0, index + 1).join("/")}`; // Creates the URL
          const isNotLast = index + 1 < segments.length;
          const isCurrent = segment_href === pathName;

          return (
            <li
              className={
                isNotLast
                  ? "after:border-r-2 after:border-gray-300 after:ml-3"
                  : ""
              }
              key={index}
            >
              <Link href={segment_href}>
                <span
                  className={`text-gray-400 text-sm ${
                    isCurrent ? "underline" : ""
                  }`}
                >
                  {toTitleCase(segment)}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BreadCrumb;
