import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mansi Jadhav - Portfolio",
  description: "Computer Engineering Student | DevOps | Cloud | AI | Blockchain",
  keywords: ["Mansi Jadhav", "Portfolio", "Computer Engineering", "DevOps", "Cloud", "AI", "Blockchain"],
  authors: [{ name: "Mansi Jadhav" }],
  openGraph: {
    title: "Mansi Jadhav - Portfolio",
    description: "Computer Engineering Student | DevOps | Cloud | AI | Blockchain",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
