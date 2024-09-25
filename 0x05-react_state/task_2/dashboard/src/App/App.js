import React from 'react';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';
import AppContext, { defaultUser, logOut } from './AppContext';


/* Class component */
class App extends React.Component {
  /* initialization */
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: defaultUser,
      logOut: () => {
        this.setState({ user: defaultUser });
      }
    };
    this.eventListen = this.eventListen.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);

  };

  /* App functions */
  /* event listener */
  eventListen(event) {
    if (event.ctrlKey && (event.code === 'KeyH')) {
      alert("Logging you out");
      this.state.logOut();
    }
  };

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  };

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  };

  logIn(email, password) {
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true
      }
    });
  };


  /* mounting */
  componentDidMount() {
    document.addEventListener('keydown', this.eventListen);
  };

  componentWillUnmount() {
    document.removeEventListener('keydown', this.eventListen);
  };

  /* rendering */
  render() {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", html: { __html: getLatestNotification() } }
    ];
    const bodySectionText = <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, officia saepe nesciunt odio voluptatibus in, cupiditate beatae molestias dignissimos quas sunt, quo sed? Error, dolorem animi atque cupiditate consequuntur tempora.</p>;
    const user = this.state.user;
    const logOut = this.state.logOut;
    return (
      <AppContext.Provider value={{ user, logOut }}>
        <Notifications
          displayDrawer={this.state.displayDrawer} listNotifications={listNotifications}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        <div className={css(styles.App)}>

          <>
            <Header />
            <BodySectionWithMarginBottom
              title={this.state.user.isLoggedIn ? 'Course List' : "Log in to continue"}
              children={
                this.state.user.isLoggedIn ?
                  <CourseList listCourses={listCourses} /> :
                  <Login logIn={this.logIn} />
              }
            />

            <BodySection title={"News from the School"} children={bodySectionText} />

            <Footer />
          </>

        </div>
      </AppContext.Provider>
    );
  };
};

const styles = StyleSheet.create({
  App: {
    height: '100%',
    width: '100%',
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'space-between'
  },
});

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

App.defaultProps = {
  /* isLoggedIn: false,
  logOut: () => { } */
};

export default App;
