import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <main className={"bg-gradient-to-r from-emerald-500 to-lime-600 flex flex-col justify-between items-center lg:p-16 md:p-12 sm:p-6 p-4 h-screen " + styles.pattern}>
        <h1 className="text-4xl text-white p-4 font-bold">Спрягай-ка!</h1>
      <div className="bg-white h-full min-w-full rounded-2xl shadow-2xl min-h-32">
          <h2 className="text-xl text-sky-900 ">
            Кириллица
          </h2>
      </div>
        <Link target={"_blank"} className="flex text-white underline hover:text-emerald-100 p-2 mt-2 font-bold" href="https://github.com/liudmilitas/bash-lang">
            <Image src='/github.svg' alt="" width={24} height={24} /> <span className="ml-2">GitHub</span>
        </Link>
    </main>
  )
}
