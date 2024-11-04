import React from 'react'
import css from './Contact.module.css'
import { TiSocialLinkedin } from "react-icons/ti";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Contact = () => {
  return (
    <div id='me' style={{
      borderTopLeftRadius: "20%",
      borderTopRightRadius: "20%"
    }} className='bg-dark container-fluid d-flex flex-column gap-2 align-items-center justify-content-center p-4'>
      <h4 className='text-light text-center'>Thanks for Knowing Me</h4>
      <ul style={{listStyle: "none"}} className="text-light d-flex flex-row gap-3 justify-content-start align-items-center">
        <li><strong>+91 - </strong>7224950797</li>||
        <li>gmail: bharatydv712<strong>@gmail.com</strong></li>||
        <li className='d-flex flex-column'><a style={{textDecoration: "none",fontSize: "20px", color: "white"}} href="https://www.linkedin.com/in/bharat-yadav-404666242/"><TiSocialLinkedin />  I'm at LinkedIn</a>
        </li>||
        <li><a style={{textDecoration: "none", color: "white"}} href="https://github.com/Bharat-coder-pro"><FaGithub/>  Code with me on GitHub</a></li>
      </ul>
    </div>
  )
}

export default Contact
