import React, { Component } from 'react';
import CountryCard from './CountryCard';
import './App.css';
import avatar from './assets/images/avatar.jpeg'

// Header Component
const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>justYu2001</p>
      <small>Aug 11, 2022</small>
    </div>
  </header>
)

// User Card Component
const UserCard = () => (
  <div className='user-card'>
    <img src={avatar} alt='asabeneh image' />
    <h2>justYu2001</h2>
  </div>
)

// TechList Component
const TechList = () => {
  const techs = ['HTML', 'CSS', 'JavaScript']
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techsFormatted
}

// Footer Component
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright 2022</p>
    </div>
  </footer>
);

class App extends Component {
  state = {
    mode: 'light',
    color: '#000',
    headerBackgroundColor: '#61dbfb',
    appBackgroundColor: '#fff',
    footerBackgroundColor: '#6cf',
    borderColor: 'transparent',
  };

  switchMode = () => {
    const { mode } = this.state;

    if (mode === 'light') {
      this.setState({
        mode: 'dark',
        color: '#fff',
        headerBackgroundColor: '#101729',
        appBackgroundColor: '#101729',
        footerBackgroundColor: '#101729',
        borderColor: '#fff',
      });
    } else {
      this.setState({
        mode: 'light',
        color: '#000',
        headerBackgroundColor: '#61dbfb',
        appBackgroundColor: '#fff',
        footerBackgroundColor: '#6cf',
        borderColor: 'transparent',
      });
    }
  };

  componentDidUpdate() {
    const root = document.documentElement;
    root.style.setProperty('--header-background-color', this.state.headerBackgroundColor);
    root.style.setProperty('--app-background-color', this.state.appBackgroundColor);
    root.style.setProperty('--footer-background-color', this.state.footerBackgroundColor);
    root.style.setProperty('--border-color', this.state.borderColor);
    root.style.setProperty('--color', this.state.color);
  }

  render() {
    return (
      <div className='app'>
        <Header />
        <main>
          <div className='main-wrapper'>
            <p>Prerequisite to get started react.js:</p>
            <ul>
              <TechList />
            </ul>
            <UserCard />
            <button className='button' onClick={this.switchMode}>Changing Background</button>
          </div>
          <CountryCard mode={this.state.mode} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
