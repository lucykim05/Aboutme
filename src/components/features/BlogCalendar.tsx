'use client';
import { useMemo, useState } from 'react';
import Calendar from 'react-calendar';
import { format } from 'date-fns';
import Link from 'next/link';
import type { PostEvent } from '@/lib/posts';

type Props = { events: PostEvent[] };

export default function BlogCalendar({ events }: Props) {
  const map = useMemo(() => {
    const m = new Map<string, PostEvent[]>();
    for (const e of events) {
      if (!m.has(e.date)) m.set(e.date, []);
      m.get(e.date)!.push(e);
    }
    return m;
  }, [events]);

  const [selected, setSelected] = useState<Date | null>(null);
  const selKey = selected ? format(selected, 'yyyy-MM-dd') : null;
  const day = selKey ? map.get(selKey) ?? [] : [];

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-2xl p-4 border">
        <Calendar
          onClickDay={(d) => setSelected(d)}
          tileContent={({ date }) => {
            const k = format(date, 'yyyy-MM-dd');
            const c = map.get(k)?.length ?? 0;
            return c > 0 ? <span className="block text-xs">• {c}</span> : null;
          }}
        />
      </div>
      <div className="rounded-2xl p-4 border">
        <h3 className="mb-2 text-lg font-semibold">
          {selected ? `${selKey} 글` : '날짜를 클릭하세요'}
        </h3>
        <ul className="space-y-2">
          {day.map((e) => (
            <li key={e.slug} className="underline">
              <Link href={`/blog/${e.slug}`}>{e.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
