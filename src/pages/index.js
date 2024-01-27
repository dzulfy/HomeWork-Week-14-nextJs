import { Inter } from "next/font/google";
import Navbar from "@/component/navbar";
import Books from "@/component/books"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Books />
    </>
  );
}
