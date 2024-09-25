import React from "react";
import PropTypes from 'prop-types';
import BodySection from "./BodySection";
import { StyleSheet, css } from "aphrodite";

function BodySectionWithMarginBottom (props) {
  return (
    <div className={css(styles.margin)}>
      <BodySection {...props}/>
    </div>
  );
}
 
const styles = StyleSheet.create({
  margin: {
    margin: '1em',
    marginBottom: '40px'
  }
});

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default BodySectionWithMarginBottom;