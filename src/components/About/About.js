import React from 'react';
import { Rubyonrails } from '@styled-icons/simple-icons/Rubyonrails';
import { motion } from "framer-motion";

import './About.css';
import framerMotion from '../../helpers/framerMotion';
import pic from '../../assets/hiking_pic.jpg';


function About(props) {
  
  return (
    <motion.div 
      exit="out" 
      animate="in" 
      initial="out" 
      variants={framerMotion.pageVariants} 
      transitions={framerMotion.pageTransition} 
      id="aboutMe__container"
    >

      <div id="aboutMe__textContainer">
        <h1 id="header">About Me.</h1>
        <div id="aboutMe__descriptions">
          <div id="aboutMe__prof">
            <h4 id="aboutMe__subTitle">Professionally</h4>
            <p>I am an aspiring Full Stack Web Developer working in the Greater Boston Area.</p>
            <p>For the past eight years I have been working for Apple in various roles, and have decided to pursue a career in software development! 
               Recently I spent six months working on a team of full stack web developers for Apple in Cupertino and loved every minute of it!
               I worked daily on our next-gen analytics tool used to read trends in diagnostics data from millions of devices around the world. During this time I worked primarily with HTML, CSS, Javscript (ES5/ES6), React, Redux, Ruby on Rails, MySQL and PostgreSQL.</p>
            <p>In addition to those technologies, I wrote and maintained Unit and Integrations tests using Jest, Enzyme and RSPEC. As well as Github for version control.</p>
            <div id="aboutMe__icons">
              <i className="fab fa-js fa-4x"></i>
              {/* <i className="rails__icon"><Rubyonrails width="100%" height="100%" /></i> */}
              <Rubyonrails viewBox="5 0 15 20" width="100" height="56" style={{minWidth: '100'}} />
              <i className="fab fa-react fa-4x"></i>
              
              

            </div>
          </div>
          <br/>
          <div id="aboutMe__pers">
            <h4 id="aboutMe__subTitle">Personally</h4>
            <p>I live in Southern New Hampshire with my girlfriend and have many interests.</p>
            <p>When I am not working I enjoy hiking, snowboarding, golfing and experiencing new things with friends! Ive been lucky enough to travel to a handful of countries around the world and love going to new places. I am also a big food and coffee guy and love finding new places to eat!</p>
            <img id="aboutMe__img" src={pic} alt="Profile Pic" />
          </div>
        </div>
      </div>

    </motion.div>
  );
}

export default About;