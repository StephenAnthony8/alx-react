import PropTypes, { func } from 'prop-types';
import React from 'react';


const WithLogging = (WrapperFunction) => {

  const functName = WrapperFunction.displayName ? WrapperFunction.displayName : WrapperFunction.name;
  const wrapperDisplayName = functName ? functName : "Component";
  
  WithLogging.displayName = `WithLogging(${wrapperDisplayName})`;
  return (
    class extends React.Component {

      componentDidMount() {
        console.log(`component ${wrapperDisplayName} is mounted`);
      }

      componentWillUnmount() {
        console.log(`component ${wrapperDisplayName} is going to unmount`);
      }

      render () {
        return (
          <WrapperFunction {...this.props} />
        );
      }
    }
  );
}

export default WithLogging;