import React from 'react'
import css from './Intro.module.css'
import guy from '../../assets/GUy.png'
const Intro = () => {
  return (
    <div id='intro' className={`${css.intro} container-fluid position-relative`}>
        <div className="row">
          <div className="col-md-3 col-lg-4">
            <img className={`${css.guyImg} img-fluid`} src={guy} alt="" />
          </div>
          <div className="p-5 text-center text-dark col-md-9 col-lg-8 col-sm-12 col-xs-12">
          <div className='h1 text-center text-dark fw-bold'>A Short Intro</div><hr className='w-50 mx-auto text-center'/>
          <p className={`${css.introText} text-center p-4 mt-3`}>
          My name is Bharat yadav and I'm currently pursuing B.Tech under AI & DS specialization branch of CSE. But, currently my declination is towards programming and development, I'm a MERN stack ethusiast and want to build carrer in this particular tech stack I'm also familiar with Express, NodeJs, Mongoose and MogoDB and I'm towards continuing and strengthening my weak points and become a professional so that I could build some real world complex projects on my own. <br />  
          </p> 
          <span align="right" className={`${css.greet} d-block fw-bolder m-5 display-7`}> ~Thank You~ </span>
          </div> 
        </div>
    </div>
  )
}

export default Intro
