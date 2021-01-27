import React, { } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion"

import './App.css';
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home';
import About from './components/About/About'
// import Projects from './components/Projects/Projects'
import ParticleComponent from './components/ParticleComponent/ParticleComponent'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Error from './components/Error/Error'


function App() {
  const location = useLocation();

  return (
    <main id="main">
      <ParticleComponent />
      <NavBar/>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          {/* <Route exact path="/projects" component={Projects} /> */}
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
      </AnimatePresence>
    </main>
  );
}

export default App;
