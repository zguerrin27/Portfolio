import React from 'react';
import { Rubyonrails } from '@styled-icons/simple-icons/Rubyonrails'

import './About.css';

function About(props) {
  
  return (
    <div id="aboutMe__container">
      <div id="aboutMe__text">
        <h1 id="header">About Me</h1>
        <div id="aboutMe__descriptions">
          <div id="aboutMe__prof">
            <h4 id="aboutMe__subTitle">Professionally</h4>
            <p>I am an aspiring Front End / Full Stack Web Developer working in the Greater Boston Area.</p>
            <p>For the past eight years I been working for Apple in various roles, and have decided to pursue a career in software development! 
               Recently I spent six months working on a team of full-stack web developers for Apple in Cupertino and loved every minute of it!
               I worked daily on our next-gen analytics tool used to read trends in diagnostics data from millions of devices around the world. During this time I worked primarily with HTML, CSS, Javscript (ES5/ES6), React, Redux, Ruby on Rails, MySQL and PostgreSQL.</p>
            <p>In addition to those technologies, I wrote and maintained Unit and Integrations tests using Jest, Enzyme, RSPEC and chromium. As well as Github for version control.</p>
            <div id="aboutMe__icons">
              <i class="fab fa-js fa-4x"></i>
              {/* <i className="rails__icon"><Rubyonrails width="100%" height="100%" /></i> */}
              <Rubyonrails viewBox="10 0 15 20" width="100" height="56" />
              <i class="fab fa-react fa-4x"></i>
              
              

            </div>
          </div>
          <br/>
          <div id="aboutMe__pers">
            <h4 id="aboutMe__subTitle">Personally</h4>
            <p>I live in Southern New Hampshire with my girlfriend and have many interests.</p>
            <p>When I am not working I enjoy hiking, snowboarding, golfing and experiencing new things with friends! Ive been lucky enough to travel to a handful of countries around the world and love going to new places.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;