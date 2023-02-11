import "./globals.css";
import { Montserrat } from "@next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  subsets: ["cyrillic", "latin", "cyrillic-ext"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={montserrat.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
        className={
          "bg-gradient-to-r from-emerald-500 to-lime-600 flex flex-col justify-around items-center lg:px-16 md:px-12 sm:px-6 p-4 h-full min-h-screen pattern"
        }
      >
        <Header />
        <main className="bg-white h-full rounded shadow-2xl w-full min-h-[500px] max-w-[800px] flex flex-col content-center items-center justify-center p-2 lg:p-4">
        {children}
        </main> 
        <Footer />
      </body>
    </html>
  );
}
