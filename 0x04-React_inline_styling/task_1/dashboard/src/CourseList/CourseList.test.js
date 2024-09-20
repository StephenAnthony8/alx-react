import { render, screen } from '@testing-library/react';
import CourseList from './CourseList';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const courseRender = [{
  id: 1,
  name: 'React',
  credit: 20
}];

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }
];

test("CourseList renders", () => {
  render(<CourseList />);
});


test("CourseList renders a single row", () => {
  
  const { container } = render(<CourseList listCourses={courseRender}/>);
  expect(container.querySelectorAll('tr').length).toBe(3);
  expect(container.querySelectorAll('tr')[2]).toHaveTextContent(20);
});

test("CourseList renders multiple rows", () => {
  
  const { container } = render(<CourseList listCourses={listCourses}/>);
  expect(container.querySelectorAll('tr').length).toBe(5);
});

test("CourseList renders all content", () => {
  render(<CourseList listCourses={listCourses} />);
  expect(screen.getByText("React")).toBeVisible;
  expect(screen.getByText("Webpack")).toBeVisible;
  expect(screen.getByText("ES6")).toBeVisible;
});

test("CourseList renders correctly when an empty array/nothing is passed", () => {
  render(<CourseList />);
  expect(screen.getByText("No courses available yet")).toHaveTextContent("No courses available yet");
});

test("renders correctly if courseRender !== empty", () => {
  render(<CourseList listCourses={courseRender} />);
  expect(screen.getByText("React")).toBeVisible();
});
