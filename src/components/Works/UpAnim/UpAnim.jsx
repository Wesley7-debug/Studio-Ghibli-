import React, { useEffect, useRef } from 'react';
import "./UpAnim.css";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);

const UpAnim = () => {

const downAnimRef = useRef(null);
const upAnimref = useRef(null);


    useEffect(() => {



      gsap.to (downAnimRef.current,{
        xPercent:-500,
        opacity:0,
        ease:'bounce.inOut',
        scrollTrigger:{
          trigger:downAnimRef.current,
          start:"top 40%",
          end:"+=50%",
          scrub:1,
          
        }
    },)

     
    
      return () => {
        
      }
    }, [])
    
  return (
    <div
    className='containerg'>
        
        <div 
ref={upAnimref}
        className="upanim-txt">
<h5 className='txtr'>Whispering winds, soaring dreams, and worlds painted with heart—Studio Ghibli’s masterpieces capture the beauty of life in every frame. Step into a realm where storytelling meets breathtaking artistry, 
  and let the adventure unfold.</h5>
        </div>
        <div 
        ref={downAnimRef}
        className="down-anim">
            <h1 className='txt-e'>FAMOUS </h1>
            <h1 className='txt-e'>WORKS </h1>
        </div>
    </div>
  )
}

export default UpAnim