// src/app/mdx-components.tsx
import type { MDXComponents } from 'mdx/types';
import BlogCalendarInline, {
  type InlineEvent,
} from '@/components/features/BlogCalendarInline';

/**
 * 전역 MDX 컴포넌트 매핑.
 * - MDX에서 <Calendar />를 쓰면 여기로 바인딩됨.
 * - props 타입도 명시해서 any 사용 안 함.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Calendar: (props: { events?: InlineEvent[] }) => (
      <BlogCalendarInline events={props.events ?? []} />
    ),
    ...components,
  };
}
