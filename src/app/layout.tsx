import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arnav Kumar | Web Developer",
  description:
    "Portfolio of Arnav Kumar, MERN Stack Developer building high-performance web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning is required by next-themes to prevent console errors
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} transition-colors duration-500`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
