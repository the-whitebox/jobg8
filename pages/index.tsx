import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <p className="text-3xl font-bold italic inline-block align-baseline tracking-wide text-blue-900">
      Hello world!
    </p>
  );
}
