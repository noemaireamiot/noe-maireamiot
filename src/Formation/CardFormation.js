import React, { Component } from 'react';
import injectSheet from 'react-jss'
import { styles } from './styles.js'

class CardFormation extends Component {
  render() {
    const { classes, details } = this.props;
    const date = () => {
      const options = {
        month: 'long',
        year: 'numeric'
      };
      return (`${details.date[0].toLocaleDateString('fr-FR', options).charAt(0).toUpperCase()
      + details.date[0].toLocaleDateString('fr-FR', options).slice(1)}
      - ${details.date[1].toLocaleDateString('fr-FR', options).charAt(0).toUpperCase()
      + details.date[1].toLocaleDateString('fr-FR', options).slice(1)}`)
  }
    return (
      <div className={classes.Card}>
        <div className={classes.title}>
          <div className={classes.name}>
            <span className={classes.placeText}>{details.place}</span>
            <span className={classes.titleDate}>{details.title}</span>
          </div>
          <div className={classes.date}>
            <span className={classes.titleDate}>{date()}</span>
          </div>
        </div>
        {(details.description !== '') ? <div className={classes.divider}></div> : ''}

        <div className={classes.description}>
          <span className={classes.titleDate}>{details.description}</span>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(CardFormation)
