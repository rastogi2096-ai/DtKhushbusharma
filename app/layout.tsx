import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: "Dt. Khushbu Sharma",
  description: "A Next.js template inspired by a nutrition & diet consultation website.",
  icons: [{ rel: "icon", url: "/favicon.ico" }]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
