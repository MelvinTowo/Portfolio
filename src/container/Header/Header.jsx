import React from 'react'
import { images } from '../../constants'
import './Header.scss'
import { motion } from 'framer-motion'
import {AppWrap} from '../../wrapper'


const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opcaity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className="app__header app__flex" >
      <motion.div
        whileInView={{x: [-100, 0], opcaity: [0, 1]}}
        transition={{duration: 1.5}}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{marginleft: 20}}>
              <p className="p-text">Hello, I'm</p>
              <h1 className="head-text">Melvin</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Software Developer</p>
            <p className="p-text">Computer Science undergrad</p>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>Checkout my GitHub</p>
            <a href="https://github.com/MelvinTowo" target='_blank' rel='noreferrer' className='p-text'>Right Here!</a>
          </div>
        </div>
      </motion.div>

      <motion.div
      whileInView={{opcaity: [0, 1]}}
      transition={{duration: 1.5, delayChildren: 1}}
      className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img 
          whileInView={{scale: [0, 1]}}
          transition={{duration: 2, ease: 'easeInOut'}}
          className="overlay_circle"
          src={images.circle}
          alt="profile_circle"
        />
      </motion.div>

      <motion.div
       variant={scaleVariants}
       whileInView={scaleVariants.whileInView}
       className="app__header-circles"
      >
        {[images.sass, images.redux, images.flutter].map((circle, index) =>(
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')