import React from 'react'
import css from './Portfolio.module.css'
const Project = ({name,img,bio,url}) => {
  return (
    <div className={`${css.proCard}  container d-flex gap-3 p-1 align-items-center justify-content-center`}>
      <a href={url} className={`d-inline-block ${css.imgWrap}`}>
        <img src={img} alt="name-img" className={`${css.proImg} img-responsive`}/>
      </a>
      <div className={`${css.proText} text-dark fw-bold d-flex flex-column justify-content-center`}>
        <h3 className='text-center fw-bolder m-0'>{name}</h3><hr />
        <p className='px-4 text-center fw-bold'>
          {bio}
        </p>
      </div>
    </div>
  )
}

export default Project
