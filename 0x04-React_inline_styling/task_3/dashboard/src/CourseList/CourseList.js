import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import { css, StyleSheet } from 'aphrodite';

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
      <div className={css(styles.courses)}>
        <table className={css(styles.table)} >
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

const styles = StyleSheet.create({
  courses: {
    'text-align': 'left'
  },
  table: {
    width: '95%',
    margin: 'auto',
    padding: '0',
    border: '#e9e1e1 solid 2px'
  }
});


CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
};

export default CourseList;