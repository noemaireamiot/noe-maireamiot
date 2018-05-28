import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { styles } from './styles.js';
import CardExperience from './CardExperience';


const detailsExperience = [
  {
    label: 'Expérience',
    name: 'Micro Erosion',
    title: `Stagiaire maintenance en réseau informatique`,
    date: [new Date('2014-05-01'), new Date('2014-07-01')],
    description: 'Gestion et maintenance du réseau infomratique de Micro Erosion.',
  },
  {
    label: 'Récompense',
    title: `Prix Global Media, Hacking Industry Camp`,
    name: 'Typeco',
    date: [new Date('2016-10-01')],
    description: `Typeco est une solution pour économiser lors de vos impressions, et ce sans changer de matériel et sans détériorer la qualité de vos documents.`
  },
  {
    label: 'Expérience',
    name: 'Solivers',
    title: `Stagiaire développeur logiciel`,
    date: [new Date('2017-04-01'), new Date('2017-08-01')],
    description: 'Développement logiciel C#/.NET - Développement Web ASP.NET.',
  }
]

class Experience extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.experiencePrice}>
        <div className={classes.header}>
          <div className={classes.headerText}>ÉXPERIENCE & RÉCOMPENSE</div>
        </div>
        <div className={classes.timeline}>
          {
            detailsExperience.map((e, i) => <CardExperience key={`cardExp-${i}`} details={e}/>)
          }
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(Experience)
