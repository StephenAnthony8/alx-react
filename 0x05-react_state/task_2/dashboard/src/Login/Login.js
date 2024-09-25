import { StyleSheet, css } from 'aphrodite';
import { useState, useEffect } from 'react';

function Login(props) {

  /* const [isLoggedIn, setIsLoggedIn] = useState(false); */

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    /* setIsLoggedIn(true); */
    props.logIn(email, password);
  };

  useEffect(() => {
    if (email.length > 0 && password.length > 0) {
      setEnableSubmit(true);
    } else {
      setEnableSubmit(false);
    }
  }, [email, password, enableSubmit]);

  return(
    <div className={`App-body ${css(styles['App-body'])}`}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={handleLoginSubmit}>
        <label htmlFor="email">Email: </label>
        <input type="text" id="email" name="email" className={css(styles['email-password'])} onChange={handleChangeEmail}/>


        <label htmlFor="password" className={css(styles.small)}>Password: </label>
        <input type="text" id="password" name="password" className={css(styles['email-password'])} onChange={handleChangePassword}/>

        <input disabled={!enableSubmit} type="submit" value="OK" className={css(styles.button)} />
        </form>
      </div>
  )
}

const styles = StyleSheet.create({
  'App-body': {
    height: 'calc(100% - (26.2em + 4px)',
    'font-family': 'sans-serif',
    '@media (max-width: 900px)': {
      width: '100%'
    }
  },
  'email-password': {
    'margin-right': '4px',
    
    '@media (max-width: 900px)': {
      
      border: 'none'
    }
  },

  'display': {
    'display': 'none'
  },

  'small': {
    ':before': {
      content: "''",
      '@media (max-width: 900px)': {
        display: 'block'
      }
      },
  },

  'button': {
    '@media (max-width: 900px)': {
      display: 'block',
      border: 'solid #f9bf77 3px',
      'border-radius': '4px'
    }
  }
});

export default Login;