import React from 'react'
import css from './Contact.module.css'
import { TiSocialLinkedin } from "react-icons/ti";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Contact = () => {
  return (
    <div id='me' className='bg-dark container-fluid d-flex flex-column gap-2 align-items-end justify-content-center p-4'>
      <h4 className='text-light text-center'>Thanks for Knowing Me</h4>
      <ul className="text-light d-flex flex-column gap-3 justify-content-start">
        <li>+91 - 7224950797</li>
        <li>gmail: bharatydv712@gmail.com</li>
      </ul>
    </div>
  )
}

export default Contact
