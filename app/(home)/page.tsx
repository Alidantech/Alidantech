import About from "@/components/home/about";
import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import Testimonials from "@/components/home/testimonials";
import Journey from "@/components/home/journey";
import Marquee from "@/components/home/marquee";
import Contact from "@/components/home/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <Marquee />
      <Journey />
      <Contact />
    </>
  );
}
