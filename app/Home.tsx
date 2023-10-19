"use client";
import { useEffect, useState } from "react";
import WelcomeModal from "@/components/welcome-modal";
import useStore from "@/hooks/useStore";
import Countdown from "@/components/countdown";

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

  const {
    username,
    processGoal,
    dayNumber,
    isDailyChallengeCompleted,
    percentageIncreased,
  } = useStore();

  return (
    <main className="container mt-20 flex max-h-screen flex-col items-center justify-center gap-2 overflow-hidden text-center">
      <WelcomeModal />
      {username && processGoal && isClient && (
        <>
          {!isDailyChallengeCompleted && (
            <>
              <h1>
                Welcome back, <span className="font-bold">{username}</span>
              </h1>
              <h2>
                Day {dayNumber} of {processGoal}
              </h2>
              <h3>{percentageIncreased}% increase from yesterday's process</h3>
            </>
          )}
          <Countdown />
        </>
      )}
    </main>
  );
}
