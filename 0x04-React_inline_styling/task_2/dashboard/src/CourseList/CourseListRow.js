import { css, StyleSheet } from 'aphrodite';
import PropTypes from 'prop-types';

function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
  const bgCol = { 'backgroundColor': (isHeader ? '#deb5b545' : '#f5f5f5ab')};
  const colspan = '2';
  if (isHeader) {
    return (
      <tr style={bgCol}>
        {
          textSecondCell
            ?
            <>
              <th>{textFirstCell}</th>
              <th>{textSecondCell}</th>
            </>
            :
            <th colSpan={colspan} className={css(styles.colspan)}>{textFirstCell}</th>
        }
      </tr>
    );
  } else {
    return (
      <tr style={bgCol}>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
};

const styles = StyleSheet.create({
  colspan: {
    'text-align': 'center'
  }
});

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default CourseListRow;

