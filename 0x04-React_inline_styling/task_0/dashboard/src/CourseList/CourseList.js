import CourseListRow from './CourseListRow';
import './CourseList.css';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';

function CourseList({ listCourses = [] }) {
  const renderCourseList = (
    listCourses.length > 0 ?
      listCourses.map((x) => {
        return (
          <CourseListRow key={x.id} textFirstCell={x.name} textSecondCell={x.credit} />
        );
      }) :
      <CourseListRow isHeader={true} textFirstCell={"No courses available yet"} />
  );
  const listRowVariables = {
    firstCell1: "Available courses",
    firstCell2: "Course name",
    secondCell: 'Credit' 
  }
  return (
    <>
      <div className="courses">
        <table>
          <thead>
            <CourseListRow isHeader={true} textFirstCell={listRowVariables.firstCell1} />
            <CourseListRow isHeader={true} textFirstCell={listRowVariables.firstCell2} textSecondCell={listRowVariables.secondCell} />
          </thead>
          <tbody>
            {renderCourseList}
          </tbody>
        </table>
      </div>
    </>
  )
};


CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
};

export default CourseList;