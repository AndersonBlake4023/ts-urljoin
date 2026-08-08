export function joinUrlPath(...parts: string[]): string {
  const kept = parts.map((part) => part.trim()).filter(Boolean);
  if (!kept.length) return "";
  const [head, ...tail] = kept;
  return head.replace(/\/+$/, "") + tail
    .map((part) => part.replace(/^\/+|\/+$/g, ""))
    .filter(Boolean)
    .map((part) => "/" + part)
    .join("");
}
