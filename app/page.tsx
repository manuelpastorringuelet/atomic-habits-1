"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import WelcomeForm from "@/components/welcome-form";


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
      <WelcomeForm />
      <Button>Click me</Button>
    </main>
  );
}
