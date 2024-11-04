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
  const {certs, bg} = useContext(appContext);
  let tl;
  tl = gsap.timeline();
  useEffect(()=>{
    tl.to(sliderCerts.current , {
      x: '-75%',        
      duration: 10,     
      ease: "linear",    // Linear easing for smooth continuous motion
      repeat: -1,        // Repeat infinitely
      repeatDelay: 0,
    })
  },[]);
  function toggleAnimation() {
    if (tl.isActive()) {
      tl.pause();
    } else {
      tl.play();
    }
  }
  return (
    <div  style={{backgroundImage: `url(${bg})`}} id='certs' className={`${css.cert} container-fluid p-3 position-relative`}>
      <div className='display-6 text-center text-dark fw-bolder p-4 my-3'>My Certifications</div>
      <div ref={sliderCerts} className={`${css.galleryCerts} d-flex gap-4 position-relative`}>
        <button id='lt' className={`${css.sliderBtn} d-inline-block`}>◀️</button>
        { certs.map((cert)=>{return(
          <div  onClick={()=>toggleAnimation()} className={`${css.certificate} card col-md-6 col-lg-4 col-sm-8 col-xs-12`}>
          <img src={cert.img} className={`${css.certImg} card-img-top`} alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center fw-bold">{cert.title}</h5>
            <p className="card-text text-center">{cert.body}</p>
          </div>
        </div>
        )})
        }
        <button id='rt' className={`${css.sliderBtn} d-inline-block`}>◀️</button>
    </div>
  </div>
  )
}

export default Cert
