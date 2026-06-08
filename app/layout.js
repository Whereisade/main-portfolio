
import "./globals.css";
import { Inter } from "next/font/google";
import Preloader from "./components/Preloader";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Adewuyi Fawaz | Fullstack Web Developer & UI/UX Designer",
  description:
    "Fullstack Web Developer & UI/UX Designer based in Lagos, Nigeria. React, Next.js, Tailwind CSS, Django, DRF, PostgreSQL.",
  metadataBase: new URL("https://fawaz-portfolio-ashy.vercel.app"),
  openGraph: {
    title: "Adewuyi Fawaz | Fullstack Web Developer & UI/UX Designer",
    description:
      "Fullstack Web Developer & UI/UX Designer based in Lagos, Nigeria. React, Next.js, Tailwind CSS, Django, DRF, PostgreSQL.",
    url: "https://fawaz-portfolio-ashy.vercel.app",
    siteName: "Adewuyi Fawaz Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adewuyi Fawaz | Fullstack Web Developer & UI/UX Designer",
    description:
      "Fullstack Web Developer & UI/UX Designer based in Lagos, Nigeria.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white antialiased preloader-active`}>
        <Preloader />
        {children}
      </body>
    </html>
  );
}