import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kenneth Yap - Researcher & Engineer",
  description: "Portfolio of Hoong Hao (Kenneth) Yap - Doctoral Scholar at Cambridge specializing in Multi-Agent Systems & Digital Twins",
  keywords: ["Digital Twins", "Multi-Agent Systems", "Travels", "Data Science"],
  authors: [{ name: "Kenneth Yap" }],
  openGraph: {
    title: "Kenneth Yap - Portfolio",
    description: "Researcher and Engineer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
