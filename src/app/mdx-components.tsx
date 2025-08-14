import BlogCalendarInline from '@/components/features/BlogCalendarInline';

export function useMDXComponents(components: any) {
  return {
    Calendar: (props: any) => <BlogCalendarInline {...props} />,
    ...components,
  };
}
