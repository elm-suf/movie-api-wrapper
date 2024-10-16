export function appendParams(
  req: URLSearchParams,
  // deno-lint-ignore no-explicit-any
  query: Record<string, any>
): void {
  Object.keys(query).forEach((k) => {
    if (k && query[k]) req.append(k, query[k]);
  });
}
