import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import matter from 'gray-matter';

export const dynamic = 'force-dynamic'; // 💥 SSR 강제: 이 한 줄이 핵심

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
        <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
        <p className="text-zinc-500 text-sm mb-8">{data.date}</p>
        <article className="prose prose-invert">
          <MDXRemote source={content} />
        </article>
      </div>
    </div>
  );
}
