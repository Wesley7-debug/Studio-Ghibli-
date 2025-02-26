import React, { useEffect , useRef} from 'react';
import "./Work.css";
import studioGhibliMovies from './studioGhibliMovies';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import UpAnim from './UpAnim/UpAnim';

gsap.registerPlugin(ScrollTrigger);
const Work = () => {

  const pannel = useRef([])
useEffect(() => {
  const ctx = gsap.context(() =>{
    pannel.current.forEach((panel , index) => {
      const isLast = index ===pannel.length - 1;



      gsap.timeline({
        scrollTrigger:{
          trigger: panel,
          start:"top top",
          scrub:1,
        },
      })
      //animate pannels
      .to(pannel.current,{
        ease:"none",
        startAt:{filter : 'brightness(100%) blur (0px)'},
        filter: isLast ?'none' : 'brightness(50%) blur (10px)',
        scale:0.9,
        borderRadius:40,
      })
    });

  })

  return () => {
    ctx.revert();
  }
}, [])



  return (
    <>

    <UpAnim/>
    <div className="sectionv">
  
  {studioGhibliMovies.map(({id , title , backgroundcolor, description , img}) =>(
    <div
 
    className="main-contentz">
      
      <div
      ref ={(el) =>(pannel.current[id] =el)}
      key={id}
      style={{ backgroundColor: backgroundcolor}}
       className="descr">
        
   <div className="textd">
   <h4 className='textr'>{title}</h4>
   <p className='tExtx'>{description}</p>
   </div>
      
   <div className="img-holf"><img src={img} alt={title} /></div>

      </div>
    </div>
  ))}

</div>

    </>
   
  )
   
}

export default Work