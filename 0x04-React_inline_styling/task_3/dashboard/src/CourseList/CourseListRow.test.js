import React from 'react';
import { render } from '@testing-library/react';
import CourseListRow from './CourseListRow';

import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test("If isHeader is true, CourseListRow renders with one cell with \
  colspan = 2 when textSecondCell doesn't exist", () => {
  const { container } = render(
  <table>
    <tbody>

      <CourseListRow isHeader={true} textFirstCell={"text"} />
    </tbody>
  </table>
  );

  expect(container.querySelectorAll('[colSpan="2"]').length).toBe(1);
});

test("If isHeader is false, component renders only 2 td elements with a tr element", () =>{
  const { container } = render(
    <table>
      <tbody>
        <CourseListRow textFirstCell={'text1'} textSecondCell={'text2'} />
      </tbody>
    </table>
  );
  expect(container.querySelectorAll('td').length).toBe(2);
});

