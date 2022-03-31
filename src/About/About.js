import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { styles } from './styles.js';


class About extends Component {
  render() {
    const { classes } = this.props;

    const resume = "Développeur full stack, je suis à la recherche d'un poste de développeur/lead technique, j'aime apporter et partager mes connaissances mais je cherche aussi à apprendre et m'inspirer des personnes qui m'entourent."
    const available = `À propos de moi, je viens de Franche-Comté, j'ai donc un penchant pour le bon fromage. Je réside actuellement à Paris dans le 20ème arrondissement et j'ai 26 ans.`;
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
