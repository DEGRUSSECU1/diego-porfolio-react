import React from 'react'
import css from "./navBar.module.css"
export const NavBar = () => {
  return (
    <nav className={css.navBar}> 
    <div className={css.box}>
     
     <a href='https://www.google.com'><img src='./img/spaceman.png' alt="linkedinprofile" /></a>
     </div>
     <div className={css.box}>
     <a href='https://github.com/DEGRUSSECU1'><img src="./img/github.png" alt='githubprofile' /></a>
     </div>
     <div className={css.box}>
     <a href='https://www.linkedin.com/in/diego-russo94/'><img src="./img/linkedin.png" alt="linkedinprofile" /></a>
     </div>
     </nav>
  )
}
