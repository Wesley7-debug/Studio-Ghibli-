import { useEffect} from 'react';
import GallerData from './GallerData';
import "./Gallery.css";


const Gallery = () => {


useEffect(() => {

  const items = document.querySelector(".itemz");
  const itemElem = document.querySelectorAll(".item");
  const indicator = document.querySelector(".indicator");

  const defaultFlex = "0 1 20px";
  const HoverFlex =  "1 1 250px" ;

   const updateGallery = () =>{
    itemElem.forEach((item) =>{

      let flex = defaultFlex;

      if(item.isHovered) {
        flex = HoverFlex;

      };

      item.style.flex = flex;

    });


   } ;
   itemElem[0].isHovered =true;
   updateGallery ();




    updateGallery ();

   itemElem.forEach((item) =>{
    item.addEventListener("mouseenter" ,() =>{

      itemElem.forEach((otherUtem) =>{
        otherUtem.isHovered =otherUtem === item;
      })
          
      updateGallery ();
  
    })
   })
 items.addEventListener("mousemove" ,(e) =>{
  indicator.style.left =`${
    e.clientX - items.getBoundingClientRect().left
  }px`;
 })


  return () => {
    
  }
}, [])

     
  return (
    <div className="main-containerz">
  <div className="containerz">
    
      
    <div className="indicator"></div>
    <div className="itemz">
      {GallerData.map(({id,src}) =>(
        <div
        className="item">
          <img 
          key={id}
          src={src}alt="" />
        </div>
      )

      )}
    </div>
   
</div>
<div className="aside">Powerred by <span>FANS</span></div>

    </div>
     
      
 
  )
}

export default Gallery