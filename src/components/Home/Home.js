import React from 'react';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

import './Home.css';

function Home(props) {
  return (
    <div className="homepage__container">
      <div className="homepage__left">
        <h1 className="homepage__heading">Hi,</h1>
        <h1 className="homepage__heading">I'm Zach.</h1>
        <h4 className="homepage__description">Web Developer</h4>
        <Link to="/about"><Button className="homepage__button" variant="outline-primary">Contact me!</Button></Link>
      </div>
      <div className="homepage__right">
       
      </div>
    </div>
    
  );
}

export default Home;