import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {useSnapshot} from "valtio";
import {
  headContainerAnimation,
  headContentAnimation,
  slideAnimation
} from '../config/motion'
import state from '../store'

const Home = () => {

  const snap = useSnapshot(state);


  return (
    <AnimatePresence>
      {StereoPannerNode.intro && (
        <motion.section className='home' {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img 
              src="../assets/threejs.png" 
              alt="logo" 
              className='w-96 h-96 object-contain'
            />
          </motion.header>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;