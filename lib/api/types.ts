import type { operations } from "./v1.d.ts";

export type ExtractResponse<T extends keyof operations> = T extends unknown
  ? operations[T]["responses"] extends { 200: object }
    ? operations[T]["responses"][200]["content"]["application/json"]
    : never
  : never;
