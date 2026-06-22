import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";
import { Journey } from "@/components/Journey";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <span id="top" />
      <Nav />
      <main className="container-x">
        <Hero />
        <Work />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <div className="container-x">
        <Footer />
      </div>
    </>
  );
}
