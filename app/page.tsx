"use client";

import { useEffect } from "react";

import WelcomeModal from "@/components/welcome-modal";

export default function Home() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => console.log("scope is: ", registration.scope));
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <WelcomeModal />
    </main>
  );
}
