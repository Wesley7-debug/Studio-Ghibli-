import React, { useEffect, useRef } from 'react';
import "./Footer.css"
import SplitType from 'split-type';
import gsap from 'gsap';

const Footer = () => {
    const explodingTxtRef = useRef(null);
useEffect(() => {
    
//const explodingTxt = document.querySelectorAll ('.explode')
   const yPrecento =  25;
   const yPrecentOffest = 15;
   const xPercento = 100;
   const rotationRandom = 15;


   const getYpercentage = () =>{
    return Math.floor( Math.random () *51) - yPrecento;
   }

   const getXpercentage = () =>{
    return Math.floor( Math.random () *201) - xPercento;
   }

   const getrotatioNpercentage = () =>{
    return Math.floor( Math.random () *30) -rotationRandom;
   }
const explodingTExt = () =>{
    const textElement = 
    explodingTxtRef.current.querySelectorAll ('.explode');
 
 
    textElement.forEach((textElem) => {
 
     const splitText =  new SplitType(textElem,{
         types:"chars,lines,words"
       })
 
     gsap.to(splitText.chars,{
         x: getXpercentage(),
         y: getYpercentage (),
         rotate: getrotatioNpercentage (),
     })
    });
}
 


  
        explodingTxtRef.current.addEventListener ("mousemove" , explodingTExt )
   


  return () => {
   
  }
}, [])

  return (
    <div className="all">
<div className="foot-contain">
        <div className="upp-text">
         <div className="text">
 <h1 className='pluin'>Public Notice</h1>
 <p className='plain'>This is a fan made website for Studio Ghbili lovers </p>
            </div>
            <div className='text2'>
            <p className='text22'> 
              <a href="https://www.ghibli.jp" target="_blank">official page</a> </p>
            </div>
        </div>
        <div className="middle-text">
            <div   
              
            className="wesl">
            <div className="wes">
            EUGENE WESLEY
         </div>
         
         <div
          ref={explodingTxtRef}
         className="explode">
         <div className="  wes1">
         +234-9015652663
           
         </div>
         <div className="wes2">
       <a href="https://www.instagram.com/wesleydeveugene?igsh=d3M0Z29wMHZrNjZj&utm_source=ig_contact_invite
       " target="_blank" >INSTA </a> 
        <a href="
https://x.com/EugeneDevWesley?t=7Lw3IIdRbVdL97BN8kBOHw&s=09
" target="_blank">TWITTER</a> 
         </div>
            
         </div>

         </div>
         
         
        </div>
        <div className="down-text">
     <p className='plaine'>all rights reserved @fan-website 2024</p>
        </div>
    </div>
    </div>
    
  )
}

export default Footer