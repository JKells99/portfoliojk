import React from "react";
import Cta from "../cta/Cta";
import AboutMe from "../aboutme/AboutMe";
import { motion, spring } from "framer-motion";

const Home = () => {
  return (
    <div>
      <Cta />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", when: "afterChildren", duration: 1.5 }}
        
        style={{ backgroundColor: "#f0f0f0", padding: "5px", marginTop:'160px'}}
      >
        <AboutMe />
      </motion.div>
    </div>
  );
};

export default Home;
