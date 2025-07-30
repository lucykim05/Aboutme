'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroTerminal() {
  const [lines, setLines] = useState<string[]>([]);
  const [showButtons, setShowButtons] = useState(false);
  const hasRun = useRef(false); // ✅ 실행 플래그

  useEffect(() => {
    if (hasRun.current) return; // ✅ 이미 실행됐으면 무시
    hasRun.current = true;

    const sequence = async () => {
      const newLines = [
        '> ssh heeju.dev',
        'Connecting...',
        'Connected ✅',
        'Welcome to 김희주의 포트폴리오',
        '현재 웹 개발을 공부 중인 열정이 있는 개발자입니다.',
        '현재는 Next.js와 Supabase 기반의 콘텐츠 플랫폼을 만들고 있어요.',
      ];

      for (let i = 0; i < newLines.length; i++) {
        setLines((prev) => [...prev, newLines[i]]);
        await wait(1000);
      }

      await wait(200);
      setShowButtons(true);
    };

    sequence();
  }, []);

  return (
    <section className="h-screen flex flex-col justify-center items-center px-4 bg-black text-white font-mono">
      <div className="bg-black/80 border border-zinc-700 rounded-xl p-6 w-full max-w-2xl shadow-xl">
        {lines.map((line, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-2 whitespace-pre-wrap"
          >
            {line}
          </motion.p>
        ))}

        {showButtons && (
          <>
            <motion.div
              className="mt-6 flex gap-4 flex-wrap"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <a
                href="https://github.com/lucykim05"
                target="_blank"
                className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition"
              >
                GitHub
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
              >
                이력서 보기
              </a>
              <Link
                href="/blog"
                className="bg-zinc-800 border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
              >
                블로그 가기
              </Link>
              <a
                href="#about"
                className="text-white hover:text-gray-300 transition"
              >
                Contact →
              </a>
            </motion.div>

            <motion.p
              className="mt-6 text-sm text-zinc-400"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              스크롤해서 아래 내용도 확인해보세요 ↓
            </motion.p>
          </>
        )}
      </div>
    </section>
  );
}

const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));
