import { expect, test } from "vitest";
import { stringToLocalTime, stringToLocalTimeAndDate } from "../utils/stringToTime";

test("convert Date-string to localTime and date return as string", () => {
  const dateString = "2024-07-07T15:08:01";
  expect(stringToLocalTimeAndDate(dateString)).toBe("7/7/2024, 3:08:01 PM");
});

test("convert Date-string to localTime return as string", () => {
  const dateString = "2024-07-07T15:08:01";
  expect(stringToLocalTime(dateString)).toBe("3:08:01 PM");
});
