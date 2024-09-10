import './App.css';
import React from 'react';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';


/* Class component */
class App extends React.Component {
  /* initialization */
  constructor(props = { isLoggedIn: false, logOut: () => {return null}}) {
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
    
  }


  /* rendering */
  render() {
    return (
      <>
        <Notifications listNotifications={this.state.listNotifications} />
        <div className="App">

          <>
            <Header />
            {this.props.isLoggedIn ? <CourseList listCourses={this.state.listCourses} /> : <Login />}
            <Footer />
          </>

        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

export default App;
