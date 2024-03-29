import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import PostsPage from "./posts/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <div>
      {/* <html lang="en"></html> */}
      <header>Header</header>
      <body className={inter.className}>{children}</body>
      <nav>nav</nav>
      <Link href="/posts/1">Post 1</Link>
      <footer className="absolute bottom-0 left-0">Bibbles foot</footer>

    </div>
  );
}
