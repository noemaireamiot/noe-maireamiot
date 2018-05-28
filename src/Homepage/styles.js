import backgroundImage from './../pictures/background.jpg'

export const styles = {
  app: {
    fontFamily: '"Roboto", sans-serif',
    height: '100%'
  },
  scroll: {
    padding: '12px',
    borderRadius: '30px',
    border: 'none',
    margin: '16px 3px',
    width: '50px',
    height: '50px',
    position: 'fixed',
    bottom: '20px',
    right: '30px',
    opacity: '0.5',
    mixBlendMode: 'luminosity',
    '&:hover': {
      opacity: '1',
      transition: '.20s ease-in-out',
      '-moz-transition': '.20s ease-in-out',
      '-webkit-transition': '.20s ease-in-out',
    },
    '&:focus': {
      outline: '0 !important'
    }
  },
  wrapperName: {
    display: 'flex',
    justifyContent: 'space-around',
    fontWeight: '200',
    fontSize: '4vw',
    margin: 'auto'
  },
  letter: {
    transformOrigin: '50% 100%',
    color: 'white',
    opacity: '0',
    padding: '2px'
  },
  space: {
    width: '25px'
  },
  backgroundColorBlue: {
    textAlign: 'center',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#335893',
    opacity: '0.5'
  },
  backgroundImage: {
    backgroundImage: 'url(' + backgroundImage + ')',
    backgroundRepeat: 'no-repeat',
    '-webkit-background-size': 'cover',
    '-moz-background-size': 'cover',
    '-o-background-size': 'cover',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh'
  },
  button: {
    padding: '12px',
    borderRadius: '30px',
    border: '2px white solid',
    backgroundColor: 'transparent',
    color: 'white',
    margin: '16px 3px',
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
  },
}
