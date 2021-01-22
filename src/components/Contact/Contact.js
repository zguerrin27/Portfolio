import React from 'react';
import { motion } from "framer-motion";

import './Contact.css';

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 0.8
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    x: "100vw",
    scale: 1.2
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

function Contact(props) {
  return (
    <motion.div
    exit="out" 
    animate="in" 
    initial="out" 
    variants={pageVariants} 
    transitions={pageTransition}
    className="contact__container"
  >
    <div className="contact__cardContainer">
      <h1>Contact ME!!!</h1>
    </div>

  </motion.div>
  );
}

export default Contact;