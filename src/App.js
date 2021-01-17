import React, { } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home';
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Resume from './components/Resume/Resume'
import Contact from './components/Contact/Contact'
import Error from './components/Error/Error'


function App() {
  return (
    <main>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </main>
  );
}

export default App;
