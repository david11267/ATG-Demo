import { expect, test } from "vitest";
import {
  stringToLocalTime,
  stringToLocalTimeAndDate,
} from "../utils/stringToTime";

test("convert Date-string to localTime and date return as string", () => {
  const dateString = "2024-07-07T15:08:01";
  expect(stringToLocalTimeAndDate(dateString)).toBe("2024-07-07 15:08:01");
});

test("convert Date-string to localTime return as string", () => {
  const dateString = "2024-07-07T15:08:01";
  expect(stringToLocalTime(dateString)).toBe("15:08:01");
});
