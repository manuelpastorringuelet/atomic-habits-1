import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

import { cn } from "@/lib/utils";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Atomic Habits",
  description: "Created by Manuel Pastor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={cn(
          "h-screen overflow-hidden bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Toaster richColors position="top-center" />

        {children}
      </body>
    </html>
  );
}
