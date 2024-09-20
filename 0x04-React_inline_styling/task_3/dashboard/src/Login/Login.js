import { StyleSheet, css } from 'aphrodite';

function Login() {
  return(
    <div className={`App-body ${css(styles['App-body'])}`}>
        <p>Login to access the full dashboard</p>
        <>
        <label htmlFor="email">Email: </label>
        <input type="text" id="email" name="email" className={css(styles['email-password'])} />
        </>
        <div className={css(styles.small)}></div>
        <>
        <label htmlFor="password">Password: </label>
        <input type="text" id="password" name="password" className={css(styles['email-password'])} />
        </>
        <button className={css(styles.button)}>OK</button>
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
    border: 'none'
  },

  'display': {
    'display': 'none'
  },

  'small': {
    'display': 'none',
    '@media (max-width: 1000px)': {
      display: 'block'
    }
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