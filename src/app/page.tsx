import HeroTerminal from '@/components/features/HeroTerminal';
import AboutSection from '@/components/features/AboutSection';
import SkillsSection from '@/components/features/SkillsSection';

export default function HomePage() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <section className="h-screen snap-start">
        <HeroTerminal />
      </section>
      <section className="h-screen snap-start">
        <AboutSection />
      </section>
      <section className="h-screen snap-start">
        <SkillsSection />
      </section>
    </main>
  );
}
