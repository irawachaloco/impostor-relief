"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const toTitleCase = (s: string) =>
  s.replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase());

const BreadCrumb = () => {
  const [segments, setSegments] = useState<string[]>([]);
  const [lastPath, setLastPath] = useState("");

  useEffect(() => {
    const updateSegments = () => {
      const pathname = window.location.pathname.replace("/impostor-relief", "");
      if (pathname !== lastPath) {
        setSegments(pathname.split("/").filter(Boolean));
        setLastPath(pathname);
      }
    };

    updateSegments(); // on mount

    const interval = setInterval(updateSegments, 300); // check every 300ms

    return () => clearInterval(interval);
  }, [lastPath]);

  if (!segments.length) return null;

  return (
    <nav aria-label="Breadcrumb" className="pb-6">
      <ul className="flex gap-3">
        {segments.map((segment, index) => {
          const segmentHref = `/${segments.slice(0, index + 1).join("/")}`;
          const isNotLast = index + 1 < segments.length;

          return (
            <li
              key={index}
              className={
                isNotLast
                  ? "after:border-r-2 after:border-gray-300 after:ml-3"
                  : ""
              }
            >
              <Link href={segmentHref} prefetch={false}>
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
