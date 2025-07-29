'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen px-4 py-20 text-white font-mono"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-6 border-b border-zinc-700 pb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="mb-6 leading-relaxed text-lg text-zinc-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          안녕하세요, 김희주입니다. JavaScript, TypeScript, Next.js를 중심으로
          웹 애플리케이션을 만들고 있으며, 임시 내용 블라블라
        </motion.p>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-zinc-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </section>
  );
}
