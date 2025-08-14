'use client';
import { useMemo, useState } from 'react';
import Calendar from 'react-calendar';
import { format } from 'date-fns';

export type InlineEvent = {
  date: string; // 'yyyy-MM-dd' or 'yyyy.MM.dd'
  title: string;
  href?: string; // 클릭 시 이동 링크(선택)
};

function normalize(date: string) {
  // '2025.08.03' -> '2025-08-03'
  const d = date.replace(/\./g, '-');
  return d.length === 10 ? d : d.slice(0, 10);
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
      m.get(key)!.push({ ...e, date: key });
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
          formatDay={(locale, date) => date.getDate().toString()} // ← '일' 제거
          tileContent={({ date }) => {
            const k = format(date, 'yyyy-MM-dd');
            const c = map.get(k)?.length ?? 0;
            return c > 0 ? <span className="rc-badge">{c}</span> : null;
          }}
        />
      </div>
      <div className="rounded-2xl border p-4">
        <h3 className="mb-2 text-lg font-semibold">
          {selected ? `${key} 일정` : '날짜를 클릭하세요'}
        </h3>
        <ul className="space-y-2">
          {dayEvents.map((e, i) => (
            <li key={i} className="text-sm">
              {e.href ? (
                <a className="underline" href={e.href}>
                  {e.title}
                </a>
              ) : (
                <span>• {e.title}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
