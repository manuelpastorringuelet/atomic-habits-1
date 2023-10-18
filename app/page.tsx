"use client";

import { useEffect, useState } from "react";

import WelcomeModal from "@/components/welcome-modal";

import { getFromLocalStorage } from "@/utils/localStorage";

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

  const username = getFromLocalStorage("username");
  const processGoal = getFromLocalStorage("processGoal");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <WelcomeModal />
      {isClient && (
        <>
          <h1>Welcome {username}!</h1>
          <p>Your current process goal is: {processGoal}</p>
        </>
      )}
    </main>
  );
}
