export const styles = {
  experiencePrice: {
    '-webkit-box-shadow': 'inset 0px 16px 15px -15px rgba(0,0,0,0.51)',
    '-moz-box-shadow': 'inset 0px 16px 15px -15px rgba(0,0,0,0.51)',
    boxShadow: 'inset 0px 16px 15px -15px rgba(0,0,0,0.51)',
    padding: '50px 15px',
    textAlign: 'center',
  },
  timeline: {
    margin: '30px auto 0 auto',
    position: 'relative',
    maxWidth: '1000px',
    '&:before': {
      position: 'absolute',
      content: '""',
      top: '0',
      bottom: '0',
      left: '253px',
      right: 'auto',
      height: '100%',
      width: '3px',
      background: '#335893',
      zIndex: '0'
    },
    '&:after': {
      position: 'absolute',
      content: '""',
      width: '3px',
      height: '40px',
      background: 'linear-gradient(to bottom, #335893, white)',
      top: '100%',
      left: '253px'
    }
  },
  headerText: {
    display: 'inline-block',
    borderLeft: '3px solid #335893',
    fontSize: '1.3em',
    color: '#74808a',
    paddingLeft: '16px',
    marginBottom: '8px'
  },
  header: {
    display: 'flex',
    padding: '0 20%'
  },
  dateName: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  name: {
    fontSize: '1.2em',
    fontWeight: '300',
    color: '#374054',
    marginBottom: '5px'
  },
  date: {
    fontWeight: '300',
    color: '#374054'
  },
  title: {
    fontSize: '1.1em',
    fontWeight: '300',
    color: '#7e8890',
    marginBottom: '6px'
  },
  content: {
    marginLeft: '300px',
    background: '#fff',
    border: '1px solid #e6e6e6',
    padding: '15px',
    borderRadius: '3px',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column'
  },
  label: {
    width: '260px',
    textAlign: 'right',
    position: 'absolute',
    left: '-50px',
    top: '12px',
    fontWeight: '300',
    color: '#374054',
    fontSize: '1.1em'
  },
  point: {
    position: 'relative',
    display: 'block',
    verticalAlign: 'top',
    marginBottom: '30px'
  },
  icon: {
    position: 'relative',
    color: '#fff',
    width: '50px',
    height: '50px',
    background: '#335893',
    borderRadius: '50%',
    float: 'left',
    zIndex: '99',
    marginLeft: '230px'
  },
  i: {
    verticalAlign: 'middle',
    fontSize: '1.1em',
    marginTop: '16px'
  },
  '@media (max-width: 1000px)': {
    icon: {
      display: 'none'
    },
    label: {
      display: 'none'
    },
    content: {
      marginLeft: 'auto'
    },
    timeline: {
      '&:before': {
        display: 'none'
      },
      '&:after': {
        display: 'none'
      }
    }
  }
}
