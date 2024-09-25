import { css, StyleSheet } from 'aphrodite';
import PropTypes from 'prop-types';
import { useState } from 'react';

function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
  const bgCol = { 'backgroundColor': (isHeader ? '#deb5b545' : '#f5f5f5ab')};
  const colspan = '2';
  const rowChecked = {'backgroundColor': '#e6e4e4'};
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked)
  };
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
      <tr style={checked ? rowChecked : bgCol}>
        <td>
          <input
          type='checkbox'
          onClick={handleChange}
          default={checked} 
          />
          {textFirstCell}
          </td>
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

