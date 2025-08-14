import HeroTerminal from '@/components/features/HeroTerminal';
import AboutSection from '@/components/features/AboutSection';
import SkillsSection from '@/components/features/SkillsSection';
import SectionShell from '@/components/layout/SectionShell';

export default function HomePage() {
  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory">
      {/* 각 섹션은 화면 높이, 내부는 자유 스크롤 */}
      <SectionShell>
        <HeroTerminal />
      </SectionShell>

      <SectionShell>
        <SkillsSection />
      </SectionShell>

      <SectionShell>
        <AboutSection />
      </SectionShell>
    </main>
  );
}
