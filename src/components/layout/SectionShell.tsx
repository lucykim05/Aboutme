'use client';

import { PropsWithChildren, useRef } from 'react';

export default function SectionShell({ children }: PropsWithChildren) {
  const ref = useRef<HTMLDivElement>(null);

  const onWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    const el = ref.current;
    if (!el) return;

    const { scrollTop, scrollHeight, clientHeight } = el;
    const atTop = scrollTop <= 0;
    const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

    // 내부에 더 스크롤할 공간이 있으면 부모로 이벤트(체인 스크롤) 안 넘김
    if ((e.deltaY < 0 && !atTop) || (e.deltaY > 0 && !atBottom)) {
      e.stopPropagation();
      // 기본 스크롤은 브라우저가 처리하므로 preventDefault 불필요
    }
    // atTop/atBottom이면 이벤트가 부모로 올라가고, 부모 컨테이너의 snap이 동작
  };

  return (
    <section className="h-screen snap-start">
      <div ref={ref} className="max-h-screen overflow-y-auto" onWheel={onWheel}>
        {children}
      </div>
    </section>
  );
}
