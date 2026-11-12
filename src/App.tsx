import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsAndCertsSection } from './components/SkillsAndCertsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFB] text-[#0F172A]">
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsAndCertsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
