export interface TimeInterval {
  start: string;
  end: string;
}

const MINUTES_PER_DAY = 24 * 60;

export function parseTime(value: string): number | null {
  const match = value.trim().match(/^(\d{1,2}):(\d{2})$/);
  if (!match) return null;

  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) return null;
  return hours * 60 + minutes;
}

export function parseDuration(value: string): number | null {
  const normalized = value.trim().toLowerCase().replace(/\s+/g, "");
  if (!normalized) return null;

  const match = normalized.match(/^(\d+)(?::|h)(\d{1,2})$/);
  if (!match) return null;

  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  if (!Number.isFinite(hours) || minutes < 0 || minutes > 59) return null;
  return hours * 60 + minutes;
}

export function calculateInterval(start: string, end: string): number | null {
  const startMinutes = parseTime(start);
  const endMinutes = parseTime(end);
  if (startMinutes === null || endMinutes === null) return null;
  if (startMinutes === endMinutes) return 0;
  return endMinutes > startMinutes
    ? endMinutes - startMinutes
    : endMinutes + MINUTES_PER_DAY - startMinutes;
}

export function calculateDayTotal(
  intervals: TimeInterval[],
  breakMinutes = 0,
): number | null {
  let total = 0;
  for (const interval of intervals) {
    const duration = calculateInterval(interval.start, interval.end);
    if (duration === null || duration === 0) return null;
    total += duration;
  }
  return Math.max(0, total - Math.max(0, breakMinutes));
}

export function calculateWeekTotal(dayTotals: Array<number | null>): number {
  return dayTotals.reduce<number>((sum, total) => sum + (total ?? 0), 0);
}

export function minutesToHHMM(totalMinutes: number): string {
  const sign = totalMinutes < 0 ? "-" : "";
  const absolute = Math.abs(Math.round(totalMinutes));
  const hours = Math.floor(absolute / 60);
  const minutes = absolute % 60;
  return `${sign}${hours} h ${String(minutes).padStart(2, "0")}`;
}

export function minutesToDecimal(totalMinutes: number): number {
  return totalMinutes / 60;
}

export function decimalToMinutes(decimalHours: number): number {
  return Math.round(decimalHours * 60);
}

export function formatFrenchDecimal(value: number): string {
  return new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function parseFrenchDecimal(value: string): number | null {
  const normalized = value.trim().replace(",", ".");
  if (!/^\d+(?:\.\d+)?$/.test(normalized)) return null;
  const parsed = Number(normalized);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : null;
}

