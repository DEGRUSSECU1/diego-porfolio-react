import React from 'react'


export const HomePage = () => {
  return (
    <div className='container'>
      {/* beginning of navbar */}
      <nav className='nav-bar'> 
          <div className='box'>
           
           <a href='https://www.google.com'><img src='./img/spaceman.png' alt="linkedinprofile" /></a>
           </div>
           <div className='box'>
           <a href='https://github.com/DEGRUSSECU1'><img src="./img/github.png" alt='githubprofile' /></a>
           </div>
           <div className='box'>
           <a href='https://www.linkedin.com/in/diego-russo94/'><img src="./img/linkedin.png" alt="linkedinprofile" /></a>
           </div>
      </nav>
      {/* end of navbar */} 
            
      {/* beginning of name container */} 
            <div className='name-container'>
         <h1>Hi, I'm Diego </h1>
        <div className='star-box'>
            <img src="./img/star.png" className='star'/>
        </div>
        <h2>Software Developer</h2>
         </div> 
       {/* beginning of name container */} 
       
        <div className='container-sun'>
          
            <img src="./img/nebula.png" className='nebula' />
            <img src="./img/sundiego.png" className='avatar'/>
        </div>
       
         <div className='rocket-container'>
          <img src="./img/school.png" className='rocket' /> 
          <img src="./img/rocket.png" className='rocket' /> 
       
          </div>
        <div className='button'>
           
            <button className='btn'>
                About me
            </button>
          
        </div>
     
    </div>
  )
}
