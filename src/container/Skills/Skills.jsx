import React , { useEffect, useState} from 'react'
import { AiFillEye, AiFillGithub} from 'react-icons/ai'
import { motion } from 'framer-motion'
import {urlFor, client} from '../../client'
import {AppWrap} from '../../wrapper'
import ReactTooltip from 'react-tooltip'
import './Skills.scss'

const Skills = () => {

  const [experiences, setExperiences] = useState([])
  const [skills, setSkills] = useState([])

  //this useEffect is used to fetch the Data from Sanity Client CMS
  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]'
    client.fetch(skillsQuery) .then((data) => {
      
      setSkills(data)
    })

    // const experienceQuery = '*[_type == "experiences"]'

    // client.fetch(experienceQuery) .then((data) => {
    //   setExperiences(data)
   //})
  })

 
  
  return (
    <>
      <h2 className="head-text"><span>Skills</span> & experience</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill) => (
            <motion.div
              whileInView={{opacity: [0, 1]}}
              transition={{duration: 0.5}}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className="app__flex" style={{backgroundColor: skill.bgColor}}>
                <img src={urlFor(skill.icon)} alt={skill.name}/>
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        {/* <div className="app__skills-exp">
            {experiences?.map((experience) => (
              <motion.div
                className="app__skills-exp-item"
                key={experience.year}
              >
                <div className="app__skills-exp-year">
                  <p className="bold-text">{experience.year}</p>
                </div>
                <motion.div className="app__skills-exp-works">
                  {experience?.works?.map((work) => (
                    <>
                      <motion.div
                        whileInView={{opacity: [0, 1]}}
                        transition={{duration: 0.5}}
                        className="app__skills-item app__flex"
                        key={skills.name}
                      >
                        <h4 className="bold-text">{work.name}</h4>
                        <p className="p-text">{work.company}</p>
                      </motion.div>
                      <ReactTooltip
                        id={work.name}
                        effect="solid"
                        arrowColor="#fff"
                        className="skills-tooltip"
                      >
                        {work.desc}
                      </ReactTooltip>
                    </>
                  ))}
                </motion.div>
              </motion.div>
            ))}
        </div> */}
      </div>

    </>
  )
}

export default AppWrap(Skills, 'skills')

{/* <motion.div
          className="app__skills-exp"
        >
          {experience.works.map((work) => (
            <>
              <motion.div
                whileInView={{opacity: [0, 1]}}
                transition={{duration: 0.5}}
                className="app__skills-item app__flex"
                key={skills.name}
              >

              </motion.div>
            </>
          ))}
        </motion.div> */}