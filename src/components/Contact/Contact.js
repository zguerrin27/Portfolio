import React from 'react';
import { motion } from "framer-motion";


import './Contact.css';
import framerMotion from '../../helpers/framerMotion';
import ContactForm from '../Form/ContactForm';
import MapComponent from '../MapComponent/MapComponent'


function Contact(props) {


  return (
    <motion.div
    exit="out" 
    animate="in" 
    initial="out" 
    variants={framerMotion.pageVariants} 
    transitions={framerMotion.pageTransition}
    className="contact__container"
  >
    <div className="contact__cardContainer">

      

      {/* <div className="form__container"> */}
        
        <ContactForm />

      {/* </div> */}

      {/* <div className="map__container"> */}
        <MapComponent />

      {/* </div> */}
  
    </div>

  </motion.div>
  );
}

export default Contact;