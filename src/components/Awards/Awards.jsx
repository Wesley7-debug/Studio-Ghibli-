import React, { useEffect, useRef } from 'react'
import "./Awards.css";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';







gsap.registerPlugin(ScrollTrigger);
const Awards = () => {

const card1Ref = useRef(null);
const card2Ref =useRef (null);
const card3Ref = useRef(null);
const card4Ref = useRef (null);
const card5Ref = useRef (null);
const mainRef =useRef(null);

    useEffect(() => {
    

     const ctx = gsap.context (() =>{
      gsap.to(card1Ref.current,{
        x:0,
        opacity:1,
        rotation:0,
        duration:2,
        ease:"power2.inOut",
        scrollTrigger:{
            trigger:mainRef.current,
            start:"top 10%",
            end:" 50%",
            scrub:2,
        }
      })
      gsap.to(card2Ref.current,{
        x:0,
        opacity:1,
        rotation:0,
        duration:2,
        ease:"power2.inOut",
        scrollTrigger:{
            trigger:card3Ref.current,
            start:"top top",
            end:" 50%",
            scrub:2,
            
        }
      })
      gsap.to(card3Ref.current,{
        x:0,
        opacity:1,
        rotation:0,
        duration:2,
        ease:"power2.inOut",
        scrollTrigger:{
            trigger:mainRef.current,
            start:"top center",
            end:" 50%",
            scrub:2,
        }
      })
      gsap.to(card4Ref.current,{
        x:0,
        opacity:1,
        rotation:0,
        duration:2,
        ease:"power2.inOut",
        scrollTrigger:{
            trigger:mainRef.current,
            start:"top top",
            end:" 50%",
            scrub:2,
        }
      })
      gsap.to(card5Ref.current,{
        x:0,
        opacity:1,
        rotation:0,
        duration:2,
        ease:"power2.inOut",
        scrollTrigger:{
            trigger:card3Ref.current,
            start:"top top",
            end:" 50%",
            scrub:2,
        }
      })

    
     })
     
      return () => {
        ctx.revert();
      }
    }, [])
    
  return (
    <div>
      
        <div
        ref={mainRef}
        className="containerp">


            <div className="row1">
            <div
            ref={card1Ref}
            className="cards card1">
       
       <h1 className='h1'>10m <span>+</span>
       </h1>
       <p className='p'>Global  <br />Recognition</p>
       
   </div>
   <div 
ref={card2Ref}
   className="cards card2">
 
       <h1 className='h1'>100 <span>+</span>
       </h1>
       <p className='p'>Awards $ <br /> Recognition</p>
       
   </div>
            </div>

            <div className="row2">
            <div
            ref={card3Ref}
            className="cards card3">
       
       <h1 className='h1' >10 <span>+</span>
       </h1>
       <p className='p'>Academy Awards $<br />Nomination</p>
       
   </div>
   <div 
   ref={card4Ref}
   className="cards card4">
    
    <h1 className='h1'>20 <span>+</span>
       </h1>
       <p className='p'>Academy Awards $<br />Nomination</p>
       
     
     
   </div>
   <div 
   ref={card5Ref}
   className="cards card5">

       <h1 className='h1'>40 <span>+</span>
       </h1>
       <p className='p'>Years of <br /> Experience</p>
      
   </div>
</div>
            </div>
            
           
    </div>
  )
}

export default Awards