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
    <main className="container mt-10 flex h-full max-h-screen flex-col items-center justify-center gap-2 overflow-hidden text-center">
      <WelcomeModal />
      {username && processGoal && isClient && (
        <>
          {!isDailyChallengeCompleted && (
            <>
              <div>
                <h2 className="mt-8 text-center text-3xl font-extrabold text-gray-900">
                  Welcome, {username}!
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                  Day {dayNumber} of {processGoal}
                </p>
              </div>
              <h2></h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                {percentageIncreased <= 1
                  ? "You can do it!"
                  : `${Math.round(
                      percentageIncreased * 100,
                    )}% increase since your first day!`}
                {}
              </p>
            </>
          )}
          <Countdown />
        </>
      )}
    </main>
  );
}
