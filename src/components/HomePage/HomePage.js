import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from '../NavBar/NavBar'


export const HomePage = () => {
  return (
    <div className='container'>
      {/* beginning of navbar */}
      <NavBar/>
      {/* end of navbar */} 
            
      {/* beginning of name container */} 
            <div className='name-container'>
         <h1 className='name'>Hi, I'm <br></br> Diego </h1>
        <div className='star-box'>
            <img src="./img/star.png" className='star' alt=' star'/>
        </div>
        <h2 className='job'>Software Developer</h2>
         </div> 
            <Link   to="about" >
            <button className='btn' >
           
                About me
            </button>
            </Link>
         
          
       {/* beginning of name container */} 
       
        <div className='sun-container'>
          
            <img src="./img/nebula.png" className='nebula' alt=' nebula' />
            <img src="./img/sundiego.png" className='avatar' alt=' sun'/>
        </div>
       
         <div className='rocket-container'>
          
          <img src="./img/rocket.png" className='rocket' alt='rocket' /> 
       
          </div>

    </div>
  )
}
