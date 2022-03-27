import React from 'react'
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
            <img src="./img/star.png" className='star'/>
        </div>
        <h2 className='job'>Software Developer</h2>
         </div> 

           <button className='btn'>
               About me
           </button>
       {/* beginning of name container */} 
       
        <div className='sun-container'>
          
            <img src="./img/nebula.png" className='nebula' />
            <img src="./img/sundiego.png" className='avatar'/>
        </div>
       
         <div className='rocket-container'>
          <img src="./img/school.png" className='rocket' /> 
          <img src="./img/rocket.png" className='rocket' /> 
       
          </div>

    </div>
  )
}
