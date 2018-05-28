import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { styles } from './styles.js';

class Contact extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.contact}>
        <div className={classes.header}>
          <div className={classes.headerText}>Contactez moi</div>
        </div>
        <div className={classes.formDiv}>
            <form className={classes.form} method="POST" action="https://formspree.io/noe.maireamiot@gmail.com">
                <input className={classes.input} type="hidden" name="_subject" value="Contact request from personal website"/>
                <input className={classes.input} type="email" name="_replyto" placeholder="E-mail" required=""/>
                <textarea className={classes.textarea + ' ' + classes.input} name="message" placeholder="Votre message" required=""></textarea>
                <div className={classes.buttonDiv}>
                  <button className={classes.button} type="submit">Envoyer</button>
                </div>
            </form>
        </div>
      </div>
    );
    }
}

export default injectSheet(styles)(Contact)
