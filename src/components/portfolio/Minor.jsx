import React from 'react'
import Project from './Project'
import './Portfolio.module.css'
const Minor = ({minors}) => {
  return (
  <>
    {minors.length && <div className='container-fluid p-4 d-flex flex-column justify-content-center align-items-center'>
      <h2 className='display-7 fw-bolder text-start w-100'> #Minor Projects</h2>
        {minors.map((minor)=><Project name={minor.name} bio={minor.bio} img={minor.img} url={minor.url} />)}  
    </div>}

  </>
      )
}

export default Minor
