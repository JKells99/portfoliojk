import React from "react";
import Cta from "../cta/Cta";
import AboutMe from "../aboutme/AboutMe";
import { motion, spring } from "framer-motion";
import TechnologiesGrid from "../technologies/TechnologiesGrid";
import Education from "../education/Education";

const Home = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", when: "afterChildren", duration: 1.5 }}
        style={{ backgroundColor: "white", padding: "0px", marginTop: "24px" }}
      >
        <Cta />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", when: "afterChildren", duration: 1.5 }}
        style={{
          backgroundColor: "#f0f0f0",
          padding: "5px",
          marginTop: "160px",
        }}
      >
        <AboutMe />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", when: "afterChildren", duration: 1.5 }}
        style={{ backgroundColor: "white", padding: "5px", marginTop: "48px" }}
      >
        <TechnologiesGrid />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", when: "afterChildren", duration: 1.5 }}
        style={{ backgroundColor: "white", padding: "5px", marginTop: "48px" }}
      >
        <Education/>
      </motion.div>
    </div>
  );
};

export default Home;
