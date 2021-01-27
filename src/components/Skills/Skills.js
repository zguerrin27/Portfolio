import React from 'react';
import { motion } from "framer-motion";

import './Skills.css';
import framerMotion from '../../helpers/framerMotion';


function Skills(props) {
  return (
    <motion.div
      exit="out" 
      animate="in" 
      initial="out" 
      variants={framerMotion.pageVariants} 
      transitions={framerMotion.pageTransition}
      className="skills__container"
    >
      <div className="skills__cardContainer">
        <h1 className="skills__header">Skills.</h1>

        <div className="sections__container">

          <div className="individual__section">
            <h3 className="individual__title">Languages</h3>
            <ul>
              <li>Javascript</li>
              <li>Ruby</li>
            </ul>
          </div>

          <div className="individual__section">
            <h3 className="individual__title">Frameworks / Libraries</h3>
            <ul>
              <li>React.js</li>
              <li>Redux</li>
              <li>Express.js</li>
              <li>Node.js</li>
              <li>Rails</li>
            </ul>
          </div>

          <div className="individual__section">
            <h3 className="individual__title">Databases</h3>
            <ul>
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Google Firebase</li>
            </ul>
          </div>

          <div className="individual__section">
            <h3 className="individual__title">Markup / Styling</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Material UI</li>
              <li>AntDesigns</li>
            </ul>
          </div>

          <div className="individual__section">
            <h3 className="individual__title">Testing / Other</h3>
            <ul>
              <li>Jest / Enzyme</li>
              <li>Minitest / RSPEC</li>
              <li>Github</li>
              <li>AGILE / Kanban Boards</li>
              <li>RESTful APIs</li>
            </ul>
          </div>

        </div>
        
      </div>
    </motion.div>
  );
}

export default Skills;