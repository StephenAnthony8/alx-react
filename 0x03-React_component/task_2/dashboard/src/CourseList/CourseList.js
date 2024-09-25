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
  return (
    <>
      <div className="courses">
        <table>
          <thead>
            <CourseListRow isHeader={true} textFirstCell={"Available courses"} />
            <CourseListRow isHeader={true} textFirstCell={"Course name"} textSecondCell={"Credit"} />
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