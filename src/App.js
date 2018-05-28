import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import injectSheet from 'react-jss';
import Homepage from './Homepage/Homepage.js';
import About from './About/About.js';
import Formation from './Formation/Formation.js';
import Experience from './Experience/Experience.js';
import Skills from './Skills/Skills.js';
import Contact from './Contact/Contact.js';
import Footer from './Footer/Footer.js';
import { styles } from './Homepage/styles';
import FaChevronUp from 'react-icons/lib/fa/chevron-up'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  handleClick = (e) => {
    const tesNode = ReactDOM.findDOMNode(this.refs[e])
    window.scroll({
      top: tesNode.offsetTop,
      behavior: 'smooth'
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.app}>
        <Homepage ref='home' handleClick={this.handleClick}/>
        <About ref='about'/>
        <Formation ref='formation'/>
        <Experience ref='experience'/>
        <Skills ref='skills'/>
        <Contact ref='contact'/>
        <Footer/>
        <button title='Back to top' className={classes.scroll} onClick={() => this.handleClick('home')}>
          <FaChevronUp/>
        </button>
      </div>
    );
  }
}

export default injectSheet(styles)(App)
