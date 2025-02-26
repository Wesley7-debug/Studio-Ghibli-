import {useEffect} from 'react';
import   "./Showrea.css";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';






const Showrea = () =>{



//iterates and renders a div of card left and right
const generateRow = () =>{
 return [...Array(3)].map((_, index) =>(
    <div
        key={index}
        className='rows'>
            <div className="card card-left">
                <img src={`/Images/fanArts/art-${2 * (index +1) -1}.jpg`} alt="" />
            </div>
            <div className="card card-right">
                <img src={`/Images/fanArts/art-${2 * (index +1 )}.jpg`} alt="" />
            </div>
        </div>
 ))
}


useEffect(() => {


   
// Ensure GSAP and ScrollTrigger are available
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
  

  
      // Define movement values based on screen size
      const isMobile = window.innerWidth <= 768;
  
      const leftXValues = isMobile ? [-1600, -1600, -600] : [-800, -900, -400];
      const rightXValues = isMobile ? [1600, 1600, 600] : [800, 900, 400];
      const leftRotationValues = isMobile ? [-45, -40, -50] : [-30, -20, -35];
      const rightRotationValues = isMobile ? [45, 40, 50] : [30, 20, 35];
      const yValues = isMobile ? [200, -300, -700] : [100, -150, -400];
  
      gsap.utils.toArray(".rows").forEach((row, index) => {
        const cardLeft = row.querySelector(".card-left");
        const cardRight = row.querySelector(".card-right");
  
        // Animate the left card
        gsap.fromTo(
          cardLeft,
          { x: 0, y: 0, rotation: 0 },
          {
            x: leftXValues[index],
            rotation: leftRotationValues[index],
            scrollTrigger: {
              trigger: ".main",
              start: "top 70%",
              end: "150% bottom",
              scrub: true,
              onUpdate: (self) => {
                const progress = self.progress;
                gsap.set(cardLeft, {
                  x: progress * leftXValues[index],
                  y: progress * yValues[index],
                  rotation: progress * leftRotationValues[index],
                });
              },
            },
          }
        );
  
        // Animate the right card
        gsap.fromTo(
          cardRight,
          { x: 0, y: 0, rotation: 0 },
          {
            x: rightXValues[index],
            rotation: rightRotationValues[index],
            scrollTrigger: {
              trigger: ".main",
              start: "top 70%",
              end: "150% bottom",
              scrub: true,
              onUpdate: (self) => {
                const progress = self.progress;
                gsap.set(cardRight, {
                  x: progress * rightXValues[index],
                  y: progress * yValues[index],
                  rotation: progress * rightRotationValues[index],
                });
              },
            },
          }
        );
      });
    }
    
    gsap.to(".copy",{
      opacity:1,
      y:0,
      scrollTrigger: {
        trigger: ".main",
        start: "top 70%",
        end: "150% bottom",
        scrub: true,}
    })

    gsap.to(".buttonE",{
    opacity:1,
      y:0,
      scrollTrigger: {
        trigger: ".main",
        start: "top 70%",
        end: "150%  bottom",
        scrub: true,}
    })

  }, []);

   
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/gallery');
  };

    return (
       
      <div>
       
        <div className="main">
          {generateRow()}
          <div className="main-text">
            <div className="copy">
           <div className="line">
  Welcome to the
           </div>
            </div>
            <div className="copy">
            <div className="line">
 Heart of STUDIO GHBILI
             </div>
            </div>
            <div className="copy">
            <div className="line">
         view its favourite Characters
             </div>
            </div>
            <div className="copy">
            <div className="line">
         and FanArts 
             </div>
            </div>

            <div className="btn" >
           
      <button 
      onClick={handleClick}
      className='buttonE'>View Showreal</button>
   
            </div>
          </div>
        </div>


        
      </div>
        
      )
}


export default Showrea