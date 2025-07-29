import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

interface Post {
  slug: string;
  title: string;
  date: string;
  summary: string;
}

export default function BlogPage() {
  const blogDir = path.join(process.cwd(), 'content/blog');
  const files = fs.readdirSync(blogDir);

  const posts: Post[] = files.map((filename) => {
    const filePath = path.join(blogDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return {
      slug: filename.replace('.mdx', ''),
      title: data.title,
      date: data.date,
      summary: data.summary,
    };
  });

  return (
    <div className="min-h-screen bg-black text-white font-mono px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 border-b border-zinc-700 pb-2">
          Blog
        </h1>
        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-6 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition"
            >
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-sm text-zinc-400 mb-2">{post.date}</p>
              <p className="text-zinc-300 text-sm">{post.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
