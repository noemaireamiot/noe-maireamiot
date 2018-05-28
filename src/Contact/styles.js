export const styles = {
  contact: {
    display: 'flex',
    '-webkit-box-shadow': 'inset 0px 16px 15px -15px rgba(0,0,0,0.51)',
    '-moz-box-shadow': 'inset 0px 16px 15px -15px rgba(0,0,0,0.51)',
    boxShadow: 'inset 0px 16px 15px -15px rgba(0,0,0,0.51)',
    backgroundColor: '#335893',
    justifyContent: 'space-around',
    flexDirection: 'column',
    padding: '30px 15px'
  },
  headerText: {
    fontSize: '1.3em',
    color: 'white',
    marginBottom: '20px'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  form: {
    maxWidth: '500px',
    margin: 'auto',
  },
  input: {
    '-webkit-box-sizing': 'border-box',
    '-moz-box-sizing': 'border-box',
    'box-sizing': 'border-box',
    fontFamily: '"Roboto", sans-serif',
    fontSize: '1em',
    display: 'block',
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    marginBottom: '10px',
    background: '#3498db',
    color: '#fff',
    transition: '.5s ease all',
    '&:focus': {
      outline: 'none',
      background: '#3fb2ff'
    },
    '&::placeholder': {
      color: 'white',
    }
  },
  textarea: {
    resize: 'none',
    height: '150px',
  },
  buttonDiv: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  button: {
    color: 'white',
    border: '2px white solid',
    padding: '12px',
    borderRadius: '30px',
    fontSize: '1em',
    backgroundColor: 'transparent',
    mixBlendMode: 'luminosity',
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
      transition: '.20s ease-in-out',
      '-moz-transition': '.20s ease-in-out',
      '-webkit-transition': '.20s ease-in-out',
    },
    '&:focus': {
      outline: '0 !important'
    }
  }
}
