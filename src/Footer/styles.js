import React from './../pictures/react.png';
import Jss from './../pictures/jss.png';
import Anime from './../pictures/anime.png';

export const styles = {
  footer: {
    display: 'flex',
    '-webkit-box-shadow': 'inset 0px 16px 15px -15px rgba(0,0,0,0.51)',
    '-moz-box-shadow': 'inset 0px 16px 15px -15px rgba(0,0,0,0.51)',
    boxShadow: 'inset 0px 16px 15px -15px rgba(0,0,0,0.51)',
    backgroundColor: '#2c3b5a',
    justifyContent: 'space-between',
    padding: '40px 85px',
    color: 'white',
    fontSize: '1em',
    flexWrap: 'wrap'
  },
  made: {
    display: 'flex'
  },
  madeIcon: {
    backgroundRepeat: 'no-repeat',
    '-webkit-background-size': 'cover',
    '-moz-background-size': 'cover',
    '-o-background-size': 'cover',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '40px',
    height: '40px',
  },
  madeLink: {
    marginRight: '20px'
  },
  reactIcon: {
    backgroundImage: 'url(' + React + ')',
  },
  jssIcon: {
    backgroundImage: 'url(' + Jss + ')',
  },
  animeIcon: {
    backgroundImage: 'url(' + Anime + ')',
  },
  icon: {
    marginRight: '10px'
  },
  groupIcon: {
    margin: '10px 0 0 190px'
  },
  copyright: {
    margin: '10px 0'
  },
  '@media (max-width: 850px)': {
    groupIcon: {
      margin: '10px 0 0 0'
    }
  }
}
