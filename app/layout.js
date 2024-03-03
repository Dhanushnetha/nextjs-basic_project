import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js",
  description: "Build awesome stuff with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <nav className="text-2xl text-primary">this is nav bar</nav> */}
        <Navbar/>
        <main className="px-8 py-20 max-w-6xl mx-auto">
          <Providers>
            {children}
          </Providers>
        </main>
        </body>
    </html>
  );
}
