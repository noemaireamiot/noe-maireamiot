import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { styles } from './styles.js';


class About extends Component {
  render() {
    const { classes } = this.props;
    const resume = `Étudiant en 5ème année à EPITECH et`
    + ` orienté dans le développement web et mobile, je travaille principalement`
    + ` avec JavaScript et NodeJS avec une affection particulière pour React/React Native.`
    + ` Je maîtrise l'environnement Linux et Windows ainsi que le logiciel de gestion de version Git.`;
    const available = `Résidant à Paris, je suis actuellement à la recherche d'un stage en part-time en France pour septembre.`;
    return (
        <div className={classes.about}>
          <div className={classes.backgroundPP}><div className={classes.PP}></div>
          </div>
          <div className={classes.content}>
            <div className={classes.header}>
              <div className={classes.headerText}>À PROPOS</div>
            </div>
            <div className={classes.resume}>
              <div className={classes.resumeText}>
                <span>
                  {resume}
                  <br/><br/>
                  {available}
                </span>
            </div>
            </div>
          </div>
        </div>
      )
    }
}

export default injectSheet(styles)(About)
