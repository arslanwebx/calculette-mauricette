import { describe, expect, it } from "vitest";
import {
  calculateDayTotal,
  calculateInterval,
  decimalToMinutes,
  formatFrenchDecimal,
  minutesToDecimal,
  minutesToHHMM,
  parseDuration,
  parseTime,
} from "./time";

describe("time utilities", () => {
  it("parses clock times and rejects malformed values", () => {
    expect(parseTime("08:30")).toBe(510);
    expect(parseTime("24:00")).toBeNull();
    expect(parseTime("8.30")).toBeNull();
  });

  it("calculates normal and overnight intervals", () => {
    expect(calculateInterval("08:00", "17:00")).toBe(540);
    expect(calculateInterval("21:00", "06:00")).toBe(540);
    expect(calculateInterval("23:30", "00:30")).toBe(60);
  });

  it("adds multiple periods and deducts one explicit break", () => {
    expect(
      calculateDayTotal([
        { start: "08:30", end: "12:00" },
        { start: "13:00", end: "17:30" },
      ]),
    ).toBe(480);
    expect(calculateDayTotal([{ start: "08:00", end: "17:00" }], 60)).toBe(480);
  });

  it("converts minutes and decimal hours correctly", () => {
    expect(minutesToDecimal(435)).toBe(7.25);
    expect(minutesToDecimal(450)).toBe(7.5);
    expect(minutesToDecimal(465)).toBe(7.75);
    expect(decimalToMinutes(7.75)).toBe(465);
    expect(formatFrenchDecimal(7.5)).toBe("7,50");
  });

  it("formats and parses durations longer than one day", () => {
    expect(parseDuration("36:15")).toBe(2175);
    expect(parseDuration("7h30")).toBe(450);
    expect(minutesToHHMM(2175)).toBe("36 h 15");
  });
});
