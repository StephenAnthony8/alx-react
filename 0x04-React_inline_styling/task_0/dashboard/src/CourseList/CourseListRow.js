import PropTypes from 'prop-types';

function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
  const bgCol = { 'backgroundColor': (isHeader ? '#deb5b545' : '#f5f5f5ab')};
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
            <th colSpan="2">{textFirstCell}</th>
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

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default CourseListRow;

