import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { styles } from './styles.js';
import FaGithubSquare from 'react-icons/lib/fa/github-square';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.footer}>
        <div className={classes.copyright}>
          <span>Copyright © 2017 Noé Maire-Amiot</span>
        </div>
        <div className={classes.made}>
          <a className={classes.madeLink} href='https://reactjs.org/' target='_blank' rel='noopener noreferrer'><div className={classes.reactIcon + ' ' + classes.madeIcon}></div></a>
          <a className={classes.madeLink} href='http://cssinjs.org/' target='_blank' rel='noopener noreferrer'><div className={classes.jssIcon + ' ' + classes.madeIcon}></div></a>
          <a href='http://animejs.com/' target='_blank' rel='noopener noreferrer'><div className={classes.animeIcon + ' ' + classes.madeIcon}></div></a>
        </div>
        <div className={classes.groupIcon}>
          <a className={classes.icon} href='https://github.com/noemaireamiot' target='_blank' rel='noopener noreferrer'><FaGithubSquare size={25} color='white'/></a>
          <a href='https://www.linkedin.com/in/noe-maireamiot/' target='_blank' rel='noopener noreferrer'><FaLinkedinSquare size={25} color='white'/></a>
        </div>
      </div>
    );
    }
}

export default injectSheet(styles)(Footer)
