import React from "react";
import PropTypes from 'prop-types';


function BodySection(props) {
  return (
    <>
    <div className="bodySection">
      <h2>{props.title}</h2>
      {props.children}
    </div>
    </>
  );
}

BodySection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default BodySection;