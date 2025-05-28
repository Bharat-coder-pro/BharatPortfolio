import React from 'react'
import css from './NavBar.module.css'
const NavBar = () => {
    const navBtn = (ev) => {
    
    }
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#intro"><button onClick={(ev)=>navBtn(ev)} id='introBtn' className={`${css.navItems} btn btn-light fw-bolder text-dark p-2`}>Intro</button></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#certs"><button onClick={(ev)=>navBtn(ev)} id='certBtn' className={`${css.navItems} btn btn-light fw-bolder text-dark p-2`}>Certification</button></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#portfolio"><button onClick={(ev)=>navBtn(ev)} id='wsBtn' className={`${css.navItems} btn btn-light fw-bolder text-dark p-2`}>Portfolio</button></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#me"> <button onClick={(ev)=>navBtn(ev)} id='contact' className={`${css.navItems} btn btn-light fw-bolder text-dark p-2`}>Contact Me</button> </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
export default NavBar
