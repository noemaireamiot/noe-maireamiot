import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { styles } from './styles.js';
import FaGroup from 'react-icons/lib/fa/group';
import FaCertificate from 'react-icons/lib/fa/certificate';

class CardExperience extends Component {
  render() {
    const { classes, details } = this.props;
    const date = () => {
      const options = {
        month: 'long',
        year: 'numeric'
      };
      if (details.date.length === 1)
        return (`${details.date[0].toLocaleDateString('fr-FR', options).charAt(0).toUpperCase()
        + details.date[0].toLocaleDateString('fr-FR', options).slice(1)}`)
      else
        return (`${details.date[0].toLocaleDateString('fr-FR', options).charAt(0).toUpperCase()
        + details.date[0].toLocaleDateString('fr-FR', options).slice(1)}
        - ${details.date[1].toLocaleDateString('fr-FR', options).charAt(0).toUpperCase()
        + details.date[1].toLocaleDateString('fr-FR', options).slice(1)}`)
  }
    return (
      <div className={classes.point}>
        <div className={classes.icon}>
          {(details.label === 'Expérience') ? <FaGroup className={classes.i}/> : <FaCertificate className={classes.i}/>}
        </div>
        <div>
          <span className={classes.label}>{details.label}</span>
          <div className={classes.content}>
            <div className={classes.dateName}>
              <span className={classes.name}>{details.name}</span>
              <span className={classes.date}>{date()}</span>
            </div>
            <span className={classes.title}>{details.title}</span>
            <span>
              {details.description}
            </span>
          </div>
        </div>
      </div>

    );
  }
}

export default injectSheet(styles)(CardExperience)
