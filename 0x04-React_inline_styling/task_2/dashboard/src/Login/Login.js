import { StyleSheet, css } from 'aphrodite';

function Login() {
  return(
    <div className={`App-body ${css(styles['App-body'])}`}>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="text" id="email" name="email" className={css(styles['email-password'])} />
        <label htmlFor="password">Password: </label>
        <input type="text" id="password" name="password" className={css(styles['email-password'])} />
        <button>OK</button>
      </div>
  )
}

const styles = StyleSheet.create({
  'App-body': {
    height: 'calc(100% - (26.2em + 4px)',
    'font-family': 'sans-serif'
  },
  'email-password': {
    'margin-right': '4px'
  }
});

export default Login;