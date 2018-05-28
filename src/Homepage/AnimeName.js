import React, { Component } from 'react';
import injectSheet from 'react-jss'
import Anime from 'react-anime';
import { styles } from './styles.js'

class AnimeName extends Component {
  render() {
    const { classes } = this.props;
    const name = 'Noé Maire-Amiot';
    return (
      <div className={classes.wrapperName}>
        <Anime  scale={[0, 1]}
                duration={1000}
                elasticity={500}
                opacity={1}
                delay={(el, i) => ((45 * (i+1)) + 500)}>
          {[...name].map((e, i) => {
              if (e !== ' ')
                return (<div key={`letter-${i}`} className={classes.letter}>{e}</div>);
              else
                return (<div key={`letter-${i}`} className={classes.space}></div>);
            }
          )}
        </Anime>
      </div>
    );
  }
}

export default injectSheet(styles)(AnimeName)
