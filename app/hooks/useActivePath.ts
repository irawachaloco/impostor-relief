import { useEffect, useState } from "react";

export default function useActivePath(link: string): boolean {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const check = () => {
      const path = window.location.pathname.replace("/impostor-relief", "");
      setIsActive(path.startsWith(link));
    };

    check();
    const interval = setInterval(check, 500);
    window.addEventListener("popstate", check);

    return () => {
      clearInterval(interval);
      window.removeEventListener("popstate", check);
    };
  }, [link]);

  return isActive;
}
