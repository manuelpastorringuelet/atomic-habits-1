"use client";

import { useEffect, useState } from "react";

import WelcomeModal from "@/components/welcome-modal";

import useStore from "@/hooks/useStore";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => console.log("scope is: ", registration.scope));
    }
  }, []);

  const { username, processGoal, setProgressGoal, setUsername } = useStore();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <WelcomeModal />
      {username.length !== 0 && processGoal.length !== 0 && isClient && (
        <>
          <h1>
            Welcome
            <br />
            <span className="text-xl font-bold text-green-500">{username}</span>
            !
          </h1>
          <p>
            Your current process goal is:
            <span className="text-xl font-bold text-green-500">
              <br />
              {processGoal}
            </span>
          </p>
        </>
      )}
    </main>
  );
}
