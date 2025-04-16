"use client";

import useFetch from "@/app/hooks/useFetch";
import useOnlineStatus from "@/app/hooks/useOnlineStatus";
import React, { useEffect, useState } from "react";

const OnlineStatusBar = () => {
  const [isOnline, setIsOnline] = useState<boolean | null>(null);

  useEffect(() => {
    setIsOnline(navigator.onLine);

    const handleOnline = () => {
      setIsOnline(true);
    };
    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return <h1>{isOnline ? "Sí" : "No"} </h1>;
};

const StatusBarWithCustomHook = () => {
  const isOnline = useOnlineStatus();
  return <h1>Status: {isOnline ? "✅ Online" : "❌ Offline"}</h1>;
};

type User = {
  id: number;
  name: string;
};

const DataFetchingComponent = () => {
  const { data, loading, error } = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/users/"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <p className="py-2">
        This is a list of users fetched from the well known JSONPlaceholder API:
      </p>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

const CustomHooksChapter = () => {
  return (
    <div>
      <header className="font-bold text-lg">
        <h1>Custom Hooks Chapter</h1>
      </header>
      <section className="pb-4">
        <h2 className="underline text-md">Using a local implementation</h2>
        <OnlineStatusBar></OnlineStatusBar>
      </section>
      <section>
        <h2 className="underline text-md">Using a custom hook</h2>
        <StatusBarWithCustomHook />
      </section>
      <section className="pt-4">
        <DataFetchingComponent />
      </section>
    </div>
  );
};

export default CustomHooksChapter;
