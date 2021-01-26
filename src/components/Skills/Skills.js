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
        <h1>Skills</h1>
        
      </div>
    </motion.div>
  );
}

export default Skills;