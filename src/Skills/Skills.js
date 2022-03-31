import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { styles } from './styles.js';

const skills = ['HTML', 'CSS','SASS' , 'React', 'Redux', 'PHP', 'Symfony', 'JavaScript', 'TypeScript', 'Node.JS', 'Strapi', 'NexJS', 'Elasticsearch', 'MongoDB', 'SQL', 'REST API', 'C/C++', 'Python']

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
