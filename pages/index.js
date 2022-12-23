
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";


import Dashboard from "../Components/Landing_page/home.js";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
    <Dashboard />
    
    </>
  );
}
