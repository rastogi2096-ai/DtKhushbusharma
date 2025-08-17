import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: "Dietician Khushbu Sharma",
  description: "Dietician Khushbu Sharma - Trusted Nutrition Coaching",
  icons: [{ rel: "icon", url: "/new Logo Khushbu.ico" }]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
