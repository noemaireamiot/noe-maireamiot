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
  },
  {
    label: 'Expérience',
    name: 'STEAMULO',
    title: `Développeur full stack`,
    date: [new Date('2018-09-01'), new Date('2022-05-01')],
    description: <div>
      Steamulo est une agence qui réalise des projets au forfait, j'ai donc pu au cours de mes 4 ans voir beaucoup de projets et technologies différentes le tout en travaillant en méthodologie agile avec des deadlines assez courte et des livraisons de qualités.
      <br/>
      <br/>
      J'ai eu la chance de voir comment se déroule un projet depuis la conception jusqu'à la mise en production.
      <br/>
      <br/>
      Voici les principaux projets sur lequels j'ai travaillé :
      <br/>
      <br/>
      <strong>Portail Data - INPI</strong>
      <br/>
      <br/>
      Lead développeur sur le portail data de l'INPI (data.inpi.fr) depuis Septembre 2019.
      <br/>
      <br/>
      J'ai participé à la création from scratch du site data.inpi.fr de l'INPI qui est un portail de donnée qui référence toutes les entreprises, tous les brevets, toutes les marques et tous les dessins & modèles.
      <br/>
      <br/>
      Cela regroupe plus de 28 000 000 de données qui sont stockées dans une base de données Elasticsearch, l'application est faites en PHP à l'aide du framework Symfony avec l'utilisation de React en front.
      <br/>
      <br/>
      Elle est en production depuis décembre 2019 et connaît des évolutions constantes depuis.
      <br/>
      <br/>
      <strong>Dessins et Modèles - INPI</strong>
      <br/>
      <br/>
      Développeur full-stack sur le portail de dépôt de dessins et modèles de l'INPI, j'ai participé à la mise en place de l'application qui à une architecture microservices avec un backend en PHP/Symfony et un front en React, une base de données PostgreSQL pour la gestion des utilisateurs et une base de données mongoDB pour les enregistrements des dessins et modèles.
      <br/>
      <br/>
      <strong>Bienveo - UNION HABITAT</strong>
      <br/>
      <br/>
      Lead développeur sur la refonte totale d'une application de location ou d'achat de HLM pour les personnes bénéficiant d'aides sociales.
      J'ai participé à la conception et au développement du projet qui est une application NodeJS, afin de pallier à des problématique de SEO nous avons utiliser du SSR à l'aide du framework NextJS.
      C'est un projet avec un fort challenge technique au niveau du SEO car l'existant (bienveo.fr) est déjà très bien référencé sur les moteurs de recherche.
      </div>,
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
