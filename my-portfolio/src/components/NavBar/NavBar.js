import React from 'react'
import css from "./navBar.module.css"
export const NavBar = () => {
  return (
    <nav className={css.navBar}> 
     
    <img src='./img/spaceman.png' alt="linkedinprofile" className={css.box} />
     <h1>Welcome<br/> to my <br/> portfolio</h1>
     <a href='https://github.com/DEGRUSSECU1'><img src="./img/github.png" alt='githubprofile' className={css.box} /></a>
     <p>github</p>
     <a href='https://www.linkedin.com/in/diego-russo94/'><img src="./img/linkedin.png" alt="linkedinprofile" className={css.box} /></a>
     <p>Linkedin</p>
     </nav>
  )
}
