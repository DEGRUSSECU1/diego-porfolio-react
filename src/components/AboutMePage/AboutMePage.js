
import React from 'react'
import { NavBar } from '../NavBar/NavBar'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faNodeJs,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const AboutMePage = () => {
 
  return (
    <>
      <div className="container about-page">
      <NavBar/>
        <div className="text-zone ">
          <h1 className='title' >
            About Me
          </h1>
          <p>
          I am a determined, hardworking, and self-motivated person. Eager to learn something new every day improving myself to be better than the day before. Being part of the School of Code has given me the technical skills foundations to pursue my career aspirations in the tech industry as a Full Stack Developer, now aspiring to further my growth in a professional environment.
          I believe that the soft skills I have developed as collaborative teamwork, decision making, fast adaptability from previous employment make me valuable in team driven environment.
          </p>
     
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faSass} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faNodeJs} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default AboutMePage
