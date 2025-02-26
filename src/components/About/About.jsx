import React, { useEffect } from 'react';
import "./About.css"
import SplitType from 'split-type';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);
const About = () => {

  useEffect(() => {
    const textS = new SplitType('#text', { types:"words"});


    gsap.from(textS.words,{
      color: "#4b3f33",
      stagger:0.1,
      scrollTrigger:{
        trigger:".nept",
        start:"top 70%",
        scrub:2,
    
      }
    })
  
    return () => {
      
    }
  }, [])
  
  return (
  
     <div className='nept'>
  
  <div className="main-nept">
    <h1 className='ho' id='text'> Long ago in the heart of japan, 
      a dream took flights  with .Through delicate brushstrikes
       and boundless imaginations, the magic of storytelling found its soul imaginations Isao Takahata, with every
       wind-blown whispers and softly glowing
       ember, their words wove wonders into Reality held steady by Toshio Suzuki. on june 15 1985, Studio Ghbili was born.
       To craft tales that lingers  like fading fireflies , filling herats  with warmth
       longing and the quiet promise of adventure.</h1>
  </div>
</div>
    
   
  )
}

export default About