import { parse, isValid, format } from 'date-fns';

export function normalizeDateToYMD(input: string): string | null {
  if (!input) return null;

  let dt = parse(input, 'yyyy.MM.dd', new Date());
  if (isValid(dt)) return format(dt, 'yyyy-MM-dd');

  dt = parse(input, 'yyyy-MM-dd', new Date());
  if (isValid(dt)) return format(dt, 'yyyy-MM-dd');

  const digits = input.replace(/\D/g, '');
  if (digits.length === 8) {
    dt = parse(digits, 'yyyyMMdd', new Date());
    if (isValid(dt)) return format(dt, 'yyyy-MM-dd');
  }
  return null;
}
