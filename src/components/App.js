import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';


import Home from './Home';
import Consulta from './Consulta';
import Exame from './Exame';
import InserirFL from './InserirFL';
import InserirP from './InserirP';
import InserirR from './InserirR';
import InserirM from './InserirM';
import Editar from './Editar';
import Ver from './Ver';
import InfoFreelancer from './InfoFreelancer';



export default class App extends React.Component{

  render(){
    return (
      <Router>
        

        <Navbar collapseOnSelect expand="lg"  variant="dark" className="navBar-color">
          <Navbar.Brand href="/home">
            
            <img
                            className="aaa"
                            src={process.env.PUBLIC_URL + "images/logo.png"}
                            alt="First slide"
                            height="80"
                            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/inserirFL" className="menu-animate">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
                Freelancer
              </Nav.Link>
              <Nav.Link href="/inserirP" className="menu-animate"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
                Profissao
              </Nav.Link>
              <Nav.Link href="/ver" className="menu-animate">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
                 <span> Catalogar</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

          
          

          <Switch>
          <Route path="/home" component={Home}/>
            <Route exact path="/inserirFL" component={InserirFL} />
            <Route exact path="/inserirP" component={InserirP} />
            <Route exact path="/inserirR" component={InserirR} />
            <Route exact path="/inserirM" component={InserirM} />
            <Route exact path="/consulta" component={Consulta} />
            <Route exact path="/exame" component={Exame} />
            <Route exact path="/infoFreelancer" component={InfoFreelancer} />
            <Route path="/editar/:id" component={Editar}/>
            <Route path="/ver" component={Ver}/>
          </Switch>
      </Router>
    );
  }

}