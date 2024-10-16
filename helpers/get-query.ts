import { Context } from "@oak/oak";

export function getQuery(ctx: Context): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, value] of ctx.request.url.searchParams) {
    result[key] = value;
  }
  return result;
}

