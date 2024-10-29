import React from 'react'
import css from './Portfolio.module.css'
import { useContext } from 'react'
import { appContext } from '../../Context'
import Minor from './Minor'
import Major from './Major'
const Portfolio = () => {
 const {portfolio} = useContext(appContext);
  return (
    <div id='portfolio' className={`${css.portF} container-fluid d-flex flex-column align-items-center`}>
      <h3 className='text-dark fw-bolder display-5 mt-3 mb-0'>Portfolio</h3>
      {(portfolio[0].projects.length===0 && portfolio[0].projects.length===0) ? <h5 className='text-dark text-center mt-0 p-5'>"I currently don't have any major project which I can showcase here on this portfolio and although I've many minor projects such as ToDo-App, Postig-CRUD application, Basic Chat Application using Socket.io and many such low-end project which I made during my learnings but I don't feel like these can be used as portfolio work samples."</h5> : <><Minor minors={portfolio[0].projects}/> <Major majors={portfolio[1].projects} /></>  }
    </div>
  )
}

export default Portfolio
