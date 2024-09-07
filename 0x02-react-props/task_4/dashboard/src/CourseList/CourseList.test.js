import { render } from '@testing-library/react';
import CourseList from './CourseList';


test("CourseList renders", () => {
  render(<CourseList />);
});

test("CourseList renders the 5 different rows", () => {
  const { container } = render(<CourseList />);
  expect(container.querySelectorAll('tr').length).toBe(5);
});
