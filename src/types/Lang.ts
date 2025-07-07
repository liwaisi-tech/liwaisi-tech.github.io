export const Lang = {
  ES: 'es',
  EN: 'en',
} as const;
export type Lang = (typeof Lang)[keyof typeof Lang]; 