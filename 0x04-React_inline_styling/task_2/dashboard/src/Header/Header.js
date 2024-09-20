
import holbertonLogo from "../assets/holberton-logo.jpg";
import { css, StyleSheet } from 'aphrodite';

function Header() {
  return (
    <div className={`App-header ${css(styles['App-header'])}`}>
      <img className={css(styles['App-header-img'])}src={holbertonLogo} alt="holberton-logo" />
      <h1 className={css(styles['App-header-h1'])}>School dashboard</h1>
    </div>
  )
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

export default Header;