import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import matter from 'gray-matter';
import Link from 'next/link';
import BlogCalendarInline from '@/components/features/BlogCalendarInline';

export const dynamic = 'force-dynamic';

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), 'content', 'blog', `${slug}.mdx`);
  const fileContent = await fs.promises.readFile(filePath, 'utf8');
  const { content, data } = matter(fileContent);

  return (
    <div className="min-h-screen bg-black text-white p-6 font-mono">
      <div className="max-w-3xl mx-auto">
        {/* 🔗 상단 네비게이션 */}
        <nav className="mb-8 flex gap-4">
          <Link href="/" className="text-zinc-400 hover:text-white underline">
            포트폴리오 홈
          </Link>
          <Link
            href="/blog"
            className="text-zinc-400 hover:text-white underline"
          >
            블로그 글 목록
          </Link>
        </nav>

        <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
        <p className="text-zinc-500 text-sm mb-8">{data.date}</p>

        <article className="prose prose-invert">
          <MDXRemote
            source={content}
            components={{
              // frontmatter의 schedule을 Calendar에 주입
              Calendar: (props: any) => (
                <BlogCalendarInline
                  events={(data as any).schedule ?? []}
                  {...props}
                />
              ),
            }}
          />
        </article>
      </div>
    </div>
  );
}
