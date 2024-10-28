"use client";

import Link from "next/link";
import { usePathname, useSelectedLayoutSegments } from "next/navigation";

const BreadCrumb = () => {
  const segments = useSelectedLayoutSegments();
  const pathName = usePathname();

  return (
    <div className="pb-6">
      <ul className="flex space-x-3">
        {segments.map((segment, index) => {
          // Creates the URL
          const segment_href = `/${segments.slice(0, index + 1).join("/")}`;
          const isLast = `${
            !(index + 1 >= segments.length)
              ? "after:border-r-2 after:border-gray-300 after:ml-3"
              : ""
          }`;

          const text = segment.replace(/_/g, " "); // Replace underscores
          const linkText = text.charAt(0).toUpperCase() + text.slice(1); // Capitalize

          return (
            //
            <li className={isLast} key={index}>
              <Link href={segment_href}>
                <span
                  className={`text-gray-400 text-sm ${
                    segment_href == pathName ? "underline" : ""
                  }`}
                >
                  {linkText}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BreadCrumb;
