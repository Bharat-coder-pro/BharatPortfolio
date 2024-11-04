import React, { useContext } from 'react'
import css from './Banner.module.css'
import reactLogo from '../../assets/react.svg'
import heroImg from '../../assets/hero.png'
import html from '../../assets/html.png'
import CSS from '../../assets/css.png'
import js from '../../assets/javascript.png'
import bs from '../../assets/bootstrap.png'
import git from '../../assets/git.png'
import gitH from '../../assets/github.png'
import { appContext } from '../../Context'
const Banner = ({user}) => {
    const {bg} = useContext(appContext);
  return (
    <div  style={{backgroundImage: `url(${bg})`}} id='welcome' className={`${css.banner} mt-0 container-fluid text-dark fw-bolder text-center d-flex gap-5 justify-content-end align-items-center`}>
    <div className="row">
    <div className={`${css.title} col-md-8 col-lg-7 col-sm-8 col-xs-12 d-flex flex-column justify-content-center align-items-center`}>
      {user ? <h1 className='display-1'>Welcome! {user}</h1> : null}
      <h1>This is Bharat</h1>
      <p>I want to become a Professional Developer,<br />currently in my learning phase and <br />I'm good at these :</p>
      <div className="flex py-0">
      <a href="#" target="_blank">
          <img src={html} className="logo" alt="React logo" />
      </a>
      
      <a title='Cascadi-Style-Sheets' href="#" target="_blank">
          <img src={CSS} className="logo" alt="React logo" />
      </a>
      
      <a title='JavaScript' href="#" target="_blank">
          <img src={js} className="logo" alt="React logo" />
      </a>
      
      <a title='Bootstrap' href="#" target="_blank">
          <img src={bs} className="logo" alt="React logo" />
      </a>
      <a title='Git-VCS' href="#" target="_blank">
          <img src={git} className="logo" alt="React logo" />
      </a>
      <a title='GitHub' href="#" target="_blank">
          <img src={gitH} className="logo" alt="React logo" />
      </a>
      <a title='React' href="#" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      </div>
      </div>
      <img className={`col-md-4 col-sm-7 col-lg-5 img-responsive ${css.heroImg}`} src={heroImg} alt="" />
    </div>
      
    </div>
  )
}

export default Banner
