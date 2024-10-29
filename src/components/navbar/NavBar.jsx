import React from 'react'
import css from './NavBar.module.css'
const NavBar = () => {
    const navBtn = (ev) => {
    
    }
  return (
    <div className={`${css.navbar} d-flex px-5 py-1 gap-5 justify-content-start position-fixed`}>
      <a href="#welcome">
      <button onClick={(ev)=>navBtn(ev)} id='wcBtn' className={`${css.navItems} btn btn-light fw-bolder text-dark p-2`}>Welcome</button>
      </a>
      <a href="#intro"><button onClick={(ev)=>navBtn(ev)} id='introBtn' className={`${css.navItems} btn btn-light fw-bolder text-dark p-2`}>Intro</button></a>
      <a href="#certs">
      <button onClick={(ev)=>navBtn(ev)} id='certBtn' className={`${css.navItems} btn btn-light fw-bolder text-dark p-2`}>Certification</button>
      </a>
      <a href="#portfolio">
      <button onClick={(ev)=>navBtn(ev)} id='wsBtn' className={`${css.navItems} btn btn-light fw-bolder text-dark p-2`}>Portfolio</button>
      </a>
      <a href="#me">
      <button onClick={(ev)=>navBtn(ev)} id='contact' className={`${css.navItems} btn btn-light fw-bolder text-dark p-2`}>Contact Me</button> 
      </a>
    </div>
  )
}
export default NavBar
