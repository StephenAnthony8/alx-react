/* eslint-disable */
import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";


test("returns the full current year", ()=>{
  expect(getFullYear()).toBe(new Date().getFullYear());
});

test("getFooterCopy returns string with false arg", () => {
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
  expect(getFooterCopy()).toBe("Holberton School");
});

test("getFooterCopy returns string with true|default arg", () => {
  expect(getFooterCopy()).toBe("Holberton School");
});

test("getLatestNotification returns with a HTML string", () => {
  expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
});