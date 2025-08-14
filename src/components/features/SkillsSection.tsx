'use client';

import Image from 'next/image';
import { useState } from 'react';

type SkillItem = { key: string; label: string };

const skills: Record<string, { key: string; label: string }[]> = {
  'Platforms & Languages': [
    { key: 'python', label: 'Python' },
    { key: 'java', label: 'Java' },
    { key: 'js', label: 'JavaScript' },
    { key: 'ts', label: 'TypeScript' },
    { key: 'html', label: 'HTML5' },
    { key: 'css', label: 'CSS3' },
  ],
  'Frameworks / Libraries': [
    { key: 'react', label: 'React' },
    { key: 'next', label: 'Next.js' },
    { key: 'tailwind', label: 'Tailwind CSS' },
    { key: 'framer-motion', label: 'Framer Motion' },
    { key: 'react-query', label: 'React Query' },
    { key: 'express', label: 'Express' },
    { key: 'storybook', label: 'Storybook' },
    { key: 'zustand', label: 'Zustand' },
  ],
  'Database & ORM': [
    { key: 'supabase', label: 'Supabase' },
    { key: 'postgresql', label: 'PostgreSQL' },
    { key: 'prisma', label: 'Prisma' },
  ],
  Testing: [
    { key: 'jest', label: 'Jest' },
    { key: 'mocha', label: 'Mocha' },
  ],
  'Tools & DevOps': [
    { key: 'git', label: 'Git' },
    { key: 'github', label: 'GitHub' },
    { key: 'vscode', label: 'Visual Studio Code' },
    { key: 'notion', label: 'Notion' },
    { key: 'figma', label: 'Figma' },
    { key: 'github-actions', label: 'GitHub Actions' },
    { key: 'docker', label: 'Docker' },
    { key: 'vercel', label: 'Vercel' },
    { key: 'aws', label: 'AWS' },
  ],
  'AI / LLM': [
    { key: 'ollama', label: 'Ollama' },
    { key: 'openai', label: 'OpenAI API' },
    { key: 'vector-db', label: 'Vector DB' },
  ],
};

function SkillBadge({ item }: { item: SkillItem }) {
  const [imgOk, setImgOk] = useState(true);
  return (
    <div
      className="w-16 h-16 bg-white/95 rounded-xl shadow-md flex items-center justify-center p-2"
      title={item.label}
      aria-label={item.label}
    >
      {imgOk ? (
        <Image
          src={`/images/${item.key}.png`}
          alt={item.label}
          width={40}
          height={40}
          className="object-contain"
          onError={() => setImgOk(false)}
        />
      ) : (
        <span className="text-xs font-medium text-gray-700 text-center px-1">
          {item.label}
        </span>
      )}
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section className="py-20 px-4 text-gray-200" id="skills">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 flex items-center gap-2">
          🛠 Skills & Tools
        </h2>

        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="mb-12">
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="flex gap-4 flex-wrap">
              {items.map((item) => (
                <SkillBadge key={item.key} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
