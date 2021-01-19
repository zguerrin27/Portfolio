import React from 'react';
import './About.css';

function About(props) {
  return (
    <div id="aboutMe__container">
      <div id="aboutMe__text">
        <h1 id="header">About Me</h1>
        <div id="aboutMe__descriptions">
          <div id="aboutMe__prof">
            <h4>Professionally</h4>
            <p>I am an aspiring Front End / Full Stack Web Developer working in the Greater Boston Area.</p>
            <p>For the past eight years I been working for Apple, and have decided to pursue a career in software development! During the first six months in 2020 I was able to work on a team of full-stack web developers for Apple in Cupertino and loved every minute of it.</p>
            <p>Most of my experience has been with React.js and Ruby on Rails, but I would love to learn any technology related to web development!</p>
          </div>
          <br/>
          <div id="aboutMe__pers">
            <h4>Personally</h4>
            <p>I live in Southern New Hampshire with my girlfriend and have many interests.</p>
            <p>When I am not working I enjoy hiking, snowboarding, golfing and experiencing new things with friends! Ive been lucky enough to travel to a handful of countries around the world and love going to new places.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;