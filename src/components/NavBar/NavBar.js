import React from 'react'
import css from "./navBar.module.css"
import { Link } from 'react-router-dom'
export const NavBar = () => {
  return (
    <nav className={css.navBar}> 
     <Link to="/"> 
     <img src='./img/spaceman.png' alt="space man image" className={css.box} />
     </Link>
   
     <h1>Welcome<br/> to my <br/> portfolio</h1>
     <a href='https://github.com/DEGRUSSECU1'><img src="./img/github.png" alt='githubprofile' className={css.box} /></a>
     <p >github</p>
     <a href='https://www.linkedin.com/in/diego-russo94/'><img src="./img/linkedin.png" alt="linkedinprofile" className={css.box} /></a>
     <p>Linkedin</p>
     </nav>
  )
}
