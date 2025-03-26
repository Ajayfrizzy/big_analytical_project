// import Image from "next/image";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Wwa from "@/components/Wwa";
import Wwd from "@/components/Wwd";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <>
    <Nav />
    <Hero />
    <Wwa />
    <Wwd />
    <Footer />
    </>
  );
}
