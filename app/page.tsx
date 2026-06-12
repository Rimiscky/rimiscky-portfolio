import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Particles } from "@/components/particles";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Photography } from "@/components/sections/photography";
import { Videos } from "@/components/sections/videos";
import { Design } from "@/components/sections/design";
import { Equipment } from "@/components/sections/equipment";
import { WebDev } from "@/components/sections/webdev";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Particles />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Photography />
        <Videos />
        <Design />
        <Equipment />
        <WebDev />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
