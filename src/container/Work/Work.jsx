import React , { useEffect, useState} from 'react'
import { AiFillEye, AiFillGithub} from 'react-icons/ai'
import { motion } from 'framer-motion'
import {urlFor, client} from '../../client'
import {AppWrap} from '../../wrapper'
import './Work.scss'

const Work = () => {

  const [activeFilter, setActiveFilter] = useState('All')
  const handleWorkFilter = (item) => {}
  const [animateCard, setanimateCard] = useState({y: 0, opacity: 1})
  const [Works, setWorks] = useState([])
  const [filterWork, setFilterWork] = useState([])
  useEffect(() => {
   const query = '*[_type == "Works"]';

   client.fetch(query)
      .then((data) => {
        setWorks(data);
        setFilterWork(data);
      })
  }, [])
  

  return (
    <>
      <h2 className="head-text">My <span>Portfolio </span>section</h2>
      <div className="app__work-filter">
        {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className="app__work-portfolio"
      >
        {filterWork.map((Works, index) => {
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(Works.imgUrl)} alt={Works.name}  />
            </div>
          </div>
        })}
      </motion.div>
    </>
  )
}

export default  AppWrap(Work)