import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Snake River League",
  description: "A local soccer league in South East Idaho.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
