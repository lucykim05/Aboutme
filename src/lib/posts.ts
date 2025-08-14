import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { normalizeDateToYMD } from './date';

export type PostEvent = { date: string; title: string; slug: string };

export function getPostEvents(): PostEvent[] {
  const dir = path.join(process.cwd(), 'content', 'blog'); // ← 네 구조
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'));
  const events: PostEvent[] = [];

  for (const file of files) {
    const raw = fs.readFileSync(path.join(dir, file), 'utf8');
    const { data } = matter(raw);
    const title = data?.title?.toString().trim();
    const date = normalizeDateToYMD(data?.date?.toString() ?? '');
    if (!title || !date) continue;

    const slug = (data?.slug?.toString() ?? file.replace(/\.mdx$/i, '')).trim();
    events.push({ date, title, slug });
  }
  events.sort((a, b) => a.date.localeCompare(b.date));
  return events;
}
