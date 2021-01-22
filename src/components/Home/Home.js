import React from 'react';
import { motion } from "framer-motion"

// import pic from '../../assets/hiking_pic.jpg';
import './Home.css';
import framerMotion from '../../helpers/framerMotion';


function Home(props) {
  return (
    <motion.div 
      exit="out" 
      animate="in" 
      initial="out" 
      variants={framerMotion.pageVariants} 
      transitions={framerMotion.pageTransition} 
      className="homepage__container"
    >

      <div className="homepage__textContainer">

        <div className="homepage__text">
          <h1 className="homepage__heading">Hi.</h1>
          <h1 className="homepage__heading">I'm Zach.</h1>
          <h4 className="homepage__description">Front End / Full Stack Web Developer</h4>
          <a href="/about" class="btn homepage__button" role="button">Learn more about me</a>
          {/* <img className="homepage__img" src={pic} alt="Profile Pic" /> */}
        </div>

        {/* <div className="homepage__img__container">
          <img className="homepage__img" src={pic} alt="Profile Pic" />
        </div> */}

      </div>

    </motion.div>
    
  );
}

export default Home;