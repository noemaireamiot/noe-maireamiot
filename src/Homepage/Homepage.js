import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { styles } from './styles.js';
import AnimeName from './AnimeName.js';


class Homepage extends Component {
  render() {
    const { handleClick, classes } = this.props;
    const category = [{type: 'about', name: 'À propos'}, {type: 'formation', name: 'Formation'}, {type: 'experience', name: 'Experience'}, {type: 'skills', name: 'Compétence'}, {type: 'contact', name: 'Contact'}];
    return (
      <div className={classes.backgroundImage}>
        <div className={classes.backgroundColorBlue}>
          <div>
            {category.map((e) => (
              <button key={`category-${e.type}`} className={classes.button} onClick={() => handleClick(e.type)}>{e.name}</button>
            ))}
          </div>
            <AnimeName/>
        </div>
      </div>
      )
    }
}

export default injectSheet(styles)(Homepage)
