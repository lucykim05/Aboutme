'use client';

import Link from 'next/link';

const posts = [
  {
    slug: 'nextjs-supabase',
    title: 'Next.js + Supabase로 콘텐츠 플랫폼 만들기',
    summary: '로그인, DB 저장, 게시글 CRUD까지 만들면서 배운 점 정리.',
    date: '2025.07.29',
  },
  {
    slug: 'design-system',
    title: '디자인 시스템, 왜 필요할까?',
    summary: '컴포넌트를 일관성 있게 유지하는 법에 대한 글.',
    date: '2025.07.25',
  },
];

export default function BlogListSection() {
  return (
    <section className="min-h-screen px-4 py-20 text-white font-mono bg-black">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 border-b border-zinc-700 pb-2">
          Blog
        </h2>
        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="block p-6 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition"
            >
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-sm text-zinc-400 mb-2">{post.date}</p>
              <p className="text-zinc-300 text-sm">{post.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
