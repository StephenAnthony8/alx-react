
import holbertonLogo from "../assets/holberton-logo.jpg";
import { css, StyleSheet } from 'aphrodite';
import React from "react";
import AppContext from "../App/AppContext";
import PropTypes from "prop-types";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <AppContext.Consumer>
        {(value) => {
          return (
            <div className={`App-header ${css(styles['App-header'])}`}>
              <img className={css(styles['App-header-img'])} src={holbertonLogo} alt="holberton-logo" />
              <div>
                <h1 className={css(styles['App-header-h1'])}>School dashboard</h1>
                {
                  value.user.isLoggedIn ?
                    <section id="logoutSection">
                      {`Welcome ${value.user.email}`}
                      <a onClick={value.logOut}>(logout)</a>
                    </section>
                    :
                    null
                }
              </div>

            </div>
          );
        }}
      </AppContext.Consumer>
    )
  }
};

const styles = StyleSheet.create({
  'App-header': {
    display: 'flex',
    'flex-direction': 'row',
    height: 'calc(15rem + 1vh)',
    'border-bottom': 'solid #f41c43 4px',
    'align-items': 'center'
  },
  'App-header-img': {
    height: 'calc(15rem)'
  },
  'App-header-h1': {
    padding: '0.5em',
    color: '#f41c43',
    'font-family': 'Helvetica'
  }
});

Header.propTypes = {

}

export default Header;