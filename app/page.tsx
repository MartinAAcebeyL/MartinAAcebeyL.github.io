import { skills, projects, experience, siteConfig } from '@/lib/data';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Community from '@/components/Community';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero config={siteConfig} />
      <About config={siteConfig} />
      <Skills data={skills} />
      <Projects data={projects} />
      <Experience data={experience} />
      <Community config={siteConfig} />
      <Contact config={siteConfig} />
      <Footer config={siteConfig} />
    </main>
  );
}
