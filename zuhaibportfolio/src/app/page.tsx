import About from "@/components/about";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Contact/>
    </main>
  );
}
