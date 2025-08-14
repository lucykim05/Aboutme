'use client';
import { useMemo, useState } from 'react';
import Calendar from 'react-calendar';
import { format } from 'date-fns';

export type InlineEvent = { date: string; title: string; href?: string };

function normalize(date: string) {
  const s = date.replace(/\./g, '-').slice(0, 10);
  return s;
}

export default function BlogCalendarInline({
  events,
}: {
  events: InlineEvent[];
}) {
  const map = useMemo(() => {
    const m = new Map<string, InlineEvent[]>();
    for (const e of events) {
      const key = normalize(e.date);
      if (!m.has(key)) m.set(key, []);
      const href = e.href ?? `#d-${key}`;
      m.get(key)!.push({ ...e, date: key, href });
    }
    return m;
  }, [events]);

  const [selected, setSelected] = useState<Date | null>(null);
  const key = selected ? format(selected, 'yyyy-MM-dd') : null;
  const dayEvents = key ? map.get(key) ?? [] : [];

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-2xl border p-4">
        <Calendar
          className="rc w-full"
          onClickDay={(d) => setSelected(d)}
          formatDay={(_, d) => d.getDate().toString()} // ‘일’ 제거
        />
      </div>
      <div className="rounded-2xl border p-4">
        <h3 className="mb-2 text-lg font-semibold">
          {selected ? `${key} 일정` : '날짜를 클릭하세요'}
        </h3>
        <ul className="space-y-2">
          {dayEvents.map((e, i) => (
            <li key={i} className="text-sm">
              <a className="underline" href={e.href}>
                {e.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
