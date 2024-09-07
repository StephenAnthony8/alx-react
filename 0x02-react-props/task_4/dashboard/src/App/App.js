import './App.css';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';


function App({isLoggedIn=false}) {
  /* const CourseListDisplay = (isLoggedIn ? 'initial': 'none');
  const LoginDisplay = (isLoggedIn ? 'none': 'initial'); */

  ;

  return (
    <>
    <Notifications />
    <div className="App">

      <>
      <Header />
      {isLoggedIn ? <CourseList /> : <Login />}
      {/* <CourseList style={CourseListDisplay} />
      <Login style={LoginDisplay} /> */}
      <Footer/>
      </>

    </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default App;
