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


/* Class component */
class App extends React.Component {
  /* initialization */
  constructor(props) {
    super(props);
    this.state = {
      listCourses: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 }
      ],
      listNotifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: { __html: getLatestNotification() }}
      ]
    };
    this.eventListen = this.eventListen.bind(this);
    
  }
  /* event listener */

  eventListen(event) {
    if (event.ctrlKey && (event.code === 'KeyH')) {
      alert("Logging you out");
      this.props.logOut();
    }
  }

  /* mounting */
  componentDidMount() {
    document.addEventListener('keydown', this.eventListen);
  };

  componentWillUnmount() {
    document.removeEventListener('keydown', this.eventListen);
  };

  /* rendering */
  render() {
    const courseListComponent = <CourseList listCourses={this.state.listCourses}/>;
    const loginComponent = <Login/>;
    const isLoggedIn = this.props.isLoggedIn;
    const listCourses = this.state.listCourses;
    const bodySectionText = <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, officia saepe nesciunt odio voluptatibus in, cupiditate beatae molestias dignissimos quas sunt, quo sed? Error, dolorem animi atque cupiditate consequuntur tempora.</p>
    return (
      <>
        <Notifications listNotifications={this.state.listNotifications} />
        <div className={css(styles.App)}>

          <>
            <Header />
            <BodySectionWithMarginBottom 
            title={isLoggedIn ? 'Course List' : "Log in to continue"}
            children={isLoggedIn? <CourseList listCourses={listCourses} /> : <Login />} />

            <BodySection title={"News from the School"} children={bodySectionText} />

            <Footer />
          </>

        </div>
      </>
    );
  }
}

const styles = StyleSheet.create({
  App: {
    height: '100%',
    width: '100%',
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'space-between',
    'padding': '0',
    margin: '0'
  },
});

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
};

export default App;
