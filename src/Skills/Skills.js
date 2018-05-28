import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { styles } from './styles.js';

const skills = ['C/C++', 'C#', 'ASP.NET', 'Python', 'JavaScript', 'HTML', 'CSS', 'SASS', 'Node.JS', 'Meteor', 'MongoDB', 'SQL', 'REST API', 'React', 'Redux']

class Skills extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.skills}>
        <div className={classes.header}>
          <div className={classes.headerText}>COMPÉTENCES</div>
        </div>
        <ul className={classes.ul}>
        {skills.map((e) =>
        <li key={`li-${e}`} className={classes.li}>{e}</li>
      )}
        </ul>
      </div>
      )
    }
}

export default injectSheet(styles)(Skills)
