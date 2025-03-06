import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Marquee from './components/Marquee';
import FeatureCarousel from './components/FeatureCarousel';
import Stats from './components/Stats';
import About from '@/components/sections/about/cozy/about';
import Projects from '@/components/sections/projects/compact/projects';
import PortfolioGrid from './components/PortfolioGrid';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeatureCarousel />
      <Stats />
      {/* <Projects /> */}
      <PortfolioGrid />
      <Testimonials />
      <Marquee />
      <Timeline />
      <Contact />
    </>
  );
}
