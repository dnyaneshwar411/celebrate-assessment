function escapeChar(ch: string) {
  return ch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function buildFuzzyRegex(query: string): RegExp | null {
  const trimmed = query.trim();
  if (!trimmed) return null;

  const pattern = trimmed
    .split("")
    .map(escapeChar)
    .join(".*");

  return new RegExp(pattern, "i");
}