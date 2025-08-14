// src/app/blog/[slug]/page.tsx
import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import matter from 'gray-matter';
import Link from 'next/link';
import type { MDXComponents } from 'mdx/types';
import BlogCalendarInline, {
  type InlineEvent,
} from '@/components/features/BlogCalendarInline';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

type Frontmatter = {
  title?: string;
  date?: string;
  schedule?: InlineEvent[];
};

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), 'content', 'blog', `${slug}.mdx`);
  const fileContent = await fs.promises.readFile(filePath, 'utf8');

  const parsed = matter(fileContent);
  const content = parsed.content;
  const front = parsed.data as Frontmatter;
  const schedule: InlineEvent[] = Array.isArray(front.schedule)
    ? front.schedule!
    : [];

  const components: MDXComponents = {
    Calendar: () => <BlogCalendarInline events={schedule} />,
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 font-mono">
      <div className="max-w-3xl mx-auto">
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

        <h1 className="text-4xl font-bold mb-4">{front.title ?? ''}</h1>
        <p className="text-zinc-500 text-sm mb-8">{front.date ?? ''}</p>

        <article className="prose prose-invert prose-p:my-1 prose-h2:my-2 prose-h3:my-2 prose-ul:my-2 prose-ol:my-2 prose-li:my-0">
          <MDXRemote source={content} components={components} />
        </article>
      </div>
    </div>
  );
}
