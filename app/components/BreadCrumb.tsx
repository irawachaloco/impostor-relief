"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// Capitalize and replace underscores
const toTitleCase = (s: string) =>
  s.replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase());

const BreadCrumb = () => {
  const [segments, setSegments] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const pathSegments = window.location.pathname
        .split("/")
        .filter((segment) => segment);
      setSegments(pathSegments);
    }
  }, []);

  return (
    <nav aria-label="Breadcrumb" className="pb-6">
      <ul className="flex gap-3">
        {segments.map((segment, index) => {
          const segment_href = `/${segments.slice(0, index + 1).join("/")}`; // Creates the URL
          const isNotLast = index + 1 < segments.length;

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
                    isNotLast ? "" : "underline"
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
