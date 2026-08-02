// Pure formatters. No DOM, no data access — importable from node for tests.

export const pct = (n, digits = 1) =>
  n == null || Number.isNaN(n) ? "—" : `${(n * 100).toFixed(digits)}%`;

export const pts = (n) =>
  n == null || Number.isNaN(n) ? "—" : Number.isInteger(n) ? String(n) : n.toFixed(1);

export function ordinal(n) {
  if (n == null || Number.isNaN(n)) return "—";
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

// Race gaps arrive already formatted from the payload ("+2.974", "1:23:06.801").
export const gap = (s) => s || "—";

export const dateShort = (iso) =>
  !iso
    ? "—"
    : new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        timeZone: "UTC",
      });

export const signed = (n) => (n == null || Number.isNaN(n) ? "—" : n > 0 ? `+${n}` : String(n));
