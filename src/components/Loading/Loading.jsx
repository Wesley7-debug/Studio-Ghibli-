import React, { useEffect,  useState } from 'react';
import "./Loading.css";
import gsap from 'gsap';



const Loading = ({onFinish}) => {


 const [isLoaded, setisLoaded] = useState(true)
 
  useEffect (() =>{

    const tl = gsap.timeline()
tl.from(".images > div",{
  x:-80,
  opacity:0,
  ease:"power3.inOut",
  stagger:0.2,
})
tl.from(".click > p",{
  y:80,
  opacity:0,
  ease:"power3.inOut",
 
  
}, "+=0.3")

  } ,[])

 

  const handleRemove =() =>{

    const tlu = gsap.timeline({onComplete :() =>{
setisLoaded (false);
onFinish();
    }})
    tlu.to(".images > div",{
     scale:0,
      opacity:0,
      ease:"power3.inOut",
      delay:0.75,
      stagger:0.2,
    })
  .to(".click > p",{
      opacity:0,
      ease:"power3.inOut",
      
    
      
    })
    .to(".preloader" ,{
      opacity:0,
      display:'none',
     
    })
   
      }
    

  return isLoaded ? (
    
  <div className="preloader">
<div className="loader-head">
</div>
<div className="overlaye">
  <div className="images">
    <div className="imgn imgn1"><img src="/Images/spiritedaway.png" alt="" /></div>
    <div className="imgn imgn2"><img src="/Images/fanArts/art-6.jpg" alt="" /></div>
    <div className="imgn  imgn3"><img src="/Images/galley-img/galler-1.png" alt="" /></div>
    <div className="imgn  imgn4"><img src="/Images/galley-img/galler-2.png" alt="" /></div>
    <div className="imgn  imgn5"><img src="/Images/fanArts/art-4.jpg" alt="" /></div>
    <div className="imgn  imgn6"><img src="/Images/fanArts/art-1.jpg" alt="" /></div>
  </div>
</div>
<div 
onClick={handleRemove}
className="click">
 
  <p>Click for experience</p>


  </div>
  
  </div>
 
  )
  :(
    null
  )
}

export default Loading