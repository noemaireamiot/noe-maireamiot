import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { styles } from './styles.js';
import CardFormation from './CardFormation.js'

const detailsFormation = [
  {
    place: 'Lycée Xavier MARMIER, Pontarlier',
    title: 'Baccalauréat Scientifique',
    date: [new Date('2010-09-01'), new Date('2013-06-01')],
    description: ''
  },
  {
    place: 'Lycée Jules HAAG, Besançon',
    title: `BTS Informatique et Réseaux pour l'Industrie et les Services techniques`,
    date: [new Date('2013-09-01'), new Date('2015-06-01')],
    description: `Apprentissage du C/C++ ainsi que la programmation orientée objet, j'ai acquis durant ces 2 années des compétences en administration système et réseaux.`
  },
  {
    place: 'EPITECH, Strasbourg',
    title: 'Expert en Technologies de l’Information',
    date: [new Date('2015-10-01'), new Date('2019-06-01')],
    description: `Entrée à EPITECH en deuxième année, j'ai appris à travailler de façon autonome sur des langages comme le C/C++, Python et JavaScript. La troisième année m'a formé à la gestion de projets avec notamment un projet de fin d'étude d'une durée de 3 ans.`
  },
  {
    place: 'Jönköping University, Suède',
    title: 'Échange universitaire (4ème année EPITECH)',
    date: [new Date('2017-09-01'), new Date('2018-06-01')],
    description: `Découverte d'un nouveau pays, d'une nouvelle culture et à travailler en groupe dans un environnement universitaire.`
  }
]


class Formation extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.formation}>
        <div className={classes.header}>
          <div className={classes.headerText}>FORMATION</div>
        </div>
        <div className={classes.wrapperCards}>
          {
            detailsFormation.map((e, i) => <CardFormation key={`card-${i}`} details={e}/>)
          }
        </div>
      </div>
      )
    }
}

export default injectSheet(styles)(Formation)
