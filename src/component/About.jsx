import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc';


const ServiceCard = ({ index, title, icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right","spring", 0.5*index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed : 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt="title"
          className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("","", 0.1, 1)}>
      I am a passionate tech enthusiast with a diverse skill set spanning machine learning, software development, and AI innovation. Whether it's developing predictive healthcare models or building efficient full-stack applications, I'm driven by the challenge of creating impactful, scalable solutions.
      With experience in Python, MERN stack, Go, and cutting-edge AI tools, I thrive on transforming complex problems into user-centric, real-world applications.
      My goal is to push the boundaries of technology and bring new ideas to life through creativity, engineering, and innovation.



      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(About)