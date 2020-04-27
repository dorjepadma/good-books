import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BioPage from './pages/BioPage';
import ContactPage from './pages/ContactPage'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Dorje Kirsten',
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'Bio', path: '/Bio'},
        { title: 'Contact', path: '/Contact'},
      ],
      home: {
        title: 'Transform The world',
        subtitle: 'Creating a luminescent tomorrow',
        text: 'A few of the projects I have worked on'
      },
      bio: {
        title: 'Pursue your passions'
      },
      contact: {
        title: 'Get in touch'
      },
    }
  }
  render() {
    return (
      <Router>
        <Container className='p-0' fluid={true}>

          <Navbar className='border-bottom' bg='transparent' expand='lg'>

            <Navbar.Brand>Dorje Kirsten</Navbar.Brand>

            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to="/">Home</Link>
                <Link className='nav-link' to="/Bio">Bio</Link>
                <Link className='nav-link' to="/Contact">Contact</Link>
              </Nav>
          </Navbar.Collapse>
          </Navbar>
                <Route path='/' exact render={() => <HomePage title={this.state.home.title} subtitle={this.state.home.subtitle} text=
                {this.state.home.text}/>} />
                <Route path='/Bio' render={() => <BioPage title={this.state.bio.title}/> }/>
                <Route path='/Contact' render={() => <ContactPage title={this.state.contact.title} />}/>
          <Footer/>
        </Container>
      </Router>
    );
  }
}

export default App;
