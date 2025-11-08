import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kenneth Yap - PhD Researcher & Data Scientist",
  description: "Portfolio of Hoong Hao (Kenneth) Yap - Doctoral Scholar at Cambridge specializing in infrastructure, tunneling, and data science",
  keywords: ["Kenneth Yap", "PhD", "Cambridge", "Data Science", "Civil Engineering", "Machine Learning"],
  authors: [{ name: "Kenneth Yap" }],
  openGraph: {
    title: "Kenneth Yap - Portfolio",
    description: "PhD Researcher and Data Scientist",
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
