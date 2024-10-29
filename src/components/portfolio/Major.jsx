import React from 'react'
import './Portfolio.module.css'
const Major = ({majors}) => {
  return (
  <>
    {majors.length ? <div className='container-fluid p-4 d-flex flex-column justify-content-center align-items-center'>
      <h2 className='text-dark text-end px-3'>Major Projects</h2>
        {majors.map((major)=><Project name={major.name} bio={major.bio} img={major.img} url={major.url} />)}  
    </div> : null}

  </>
  )
}

export default Major
