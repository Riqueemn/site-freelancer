import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
        <div className="container-fluid bg-info">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link to={'/home'} className="navbar-brand">Site - Freelancer</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/inserirFL'} className="nav-link">Inserir Freelancer</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/ver'} className="nav-link">Buscar Freelancer</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/inserirP'} className="nav-link">Inserir Profissao</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

          
          

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

