import { getFooterCopy, getFullYear, getLatestNotification } from "./utils";


/* getFullYear */
test('getFullYear returns current year', () => {
  const currentDate = new Date(Date.now());

  expect(getFullYear()).toBe(currentDate.getFullYear());
});

/* getFooterCopy  */
test('getFooterCopy with true and false inputs return correct strings', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});


/* getLatestNotification */
test('getLatestNotification returns a html string', () => {
  expect(getLatestNotification()).toBe(
    '<strong>Urgent requirement</strong> - complete by EOD'
  );
});
