'use client';

import Image from 'next/image';

const skills = {
  FrontEnd: ['html', 'css', 'js', 'ts', 'react'],
  Backend: ['nodejs', 'supabase'],
  Language: ['python', 'java'],
  Cooperation: ['github', 'notion'],
};

export default function SkillsSection() {
  return (
    <section className="py-20 px-4 text-gray-200" id="skills">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 flex items-center gap-2">
          🛠 Skills & Tools
        </h2>

        {Object.entries(skills).map(([category, icons]) => (
          <div key={category} className="mb-12">
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="flex gap-4 flex-wrap">
              {icons.map((name) => (
                <div
                  key={name}
                  className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center p-2"
                >
                  <Image
                    src={`/images/${name}.png`}
                    alt={name}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
