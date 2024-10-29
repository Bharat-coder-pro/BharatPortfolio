import React from 'react'
import css from './Cert.module.css'
import resp from '../../assets/ffcResp.png'
import { useContext } from 'react'
import { appContext } from '../../Context'
import {gsap} from 'gsap'
import { useEffect } from 'react'
import { useRef } from 'react'
const Cert = () => {
   const sliderCerts = useRef(null);
  const {certs} = useContext(appContext);
  useEffect(()=>{
    gsap.to(sliderCerts.current , {
      x: '-70%',        
      duration: 10,     
      ease: "linear",    // Linear easing for smooth continuous motion
      repeat: -1,        // Repeat infinitely
      repeatDelay: 0,
    })
  },[])
  return (
    <div id='certs' className={`${css.cert} container-fluid p-3 position-relative`}>
      <div className='display-6 text-center text-dark fw-bolder p-4 my-3'>My Certifications</div>
      <div ref={sliderCerts} className={`${css.galleryCerts} d-flex gap-4`}>
        { certs.map((cert)=>{return(
          <div className={`${css.certificate} card col-md-4 col-lg-4 col-sm-5 col-xs-6`}>
          <img src={cert.img} className={`${css.certImg} card-img-top`} alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center fw-bold">{cert.title}</h5>
            <p className="card-text text-center">{cert.body}</p>
          </div>
        </div>
        )})
        }
    </div>
  </div>
  )
}

export default Cert
