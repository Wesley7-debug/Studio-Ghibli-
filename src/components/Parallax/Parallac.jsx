import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./Parallax.css"

const Parallac = () => {
const letterRef1 = useRef(null);
const letterRef2 = useRef(null);
const imageHolder = useRef(null);
const websiteContentRef = useRef(null);



useEffect(() => {
const isMobile = window.innerWidth < 1080;
  
const contentHolder = document.querySelector('.image-holder').offsetHeight;
const imgHolder = window.innerHeight;
const additionalHeight = window.innerHeight;
const totalbodyHeight = contentHolder +imgHolder + additionalHeight;

document.body.style =`${totalbodyHeight}`
    //initialize and register
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: websiteContentRef.current,
      start: "top 40%",
      end:"bottom bottom"
    })
 if(!isMobile) {
  gsap.to(letterRef1.current,{
    x: () =>-window.innerWidth *3,
    scale:10,
    ease:"power1.inOut",
    scrollTrigger:{
      trigger: websiteContentRef.current,
      start:"top 45%",
      end:"+=50%",
      scrub:2,
    }
  })

  gsap.to(letterRef2.current,{
    x: () =>window.innerWidth *3,
    scale:10,
    ease:"power1.inOut",
    scrollTrigger:{
      trigger: websiteContentRef.current,
      start:"top 45%",
      end:"+=50%",
      scrub:2,
  
    }
  })
  gsap.to(imageHolder.current,{
 
 rotation:0,
 clipPath: "polygon(0% 0% , 100% 0%, 100% 100%,0% 100%)",
    ease:"power1.inOut",
    scrollTrigger:{
      trigger: websiteContentRef.current,
      start:"top 45%",
      end:"+=50%",
      scrub:2,
  
    }
  })

 }

  




  return () => {
   
  }
   
}, [])


   






  return (
  
  <section className='sectiong'
  ref={websiteContentRef}
  >


<div className="header">
  <div 
  ref={letterRef1}
  className="letters">
    <div>S</div>
    <div>T</div>
    <div>U</div>
    <div>D</div>
    <div>I</div>
    <div>O</div>
  </div>

  <div
  ref={letterRef2}
  className="letters">
    <div>G</div>
    <div>H</div>
    <div>B</div>
    <div>I</div>
    <div>L</div>
    <div>I</div>
  </div>
  </div>
<div

  className="website-content">
    <div 
    ref={imageHolder}
    className="image-holder">
      <img src="/Images/studioghbili.jpg" alt="" />
    </div>

  </div>
 
  </section>


  )
}

export default Parallac