import {useRef, useState, useEffect} from 'react';
import "./Hero.css";
import gsap from 'gsap';

const Hero = () => {
  const videFrameRef =useRef();
  const mainVideo = useRef();
  const miniVideoRef = useRef();


const [Currentindex, setCurrentindex] = useState(1);
const [Hasclicked, setHasclicked] = useState(false);
const [loadedVideos, setloadedVideos] = useState(false);
let videoIndex = 4;

const videoChange = (Currentindex % videoIndex) + 1;
const handlevideoLoad =() =>{
  setloadedVideos ((prev) =>prev+ 1)
}

const HandlevideoChange = () =>{
setHasclicked(true);
setCurrentindex  (videoChange)
}



 useEffect(() => {
  if (Hasclicked) {

    gsap.set('.miniVideo', {visibility:'visible'})
    gsap.to (".miniVideo", {
      transformOrigin:'center center',
      scale:1,
      duration:1,
      width:'100%',
      height:'100%',
      ease:"power1.inOut",
      onStart:() =>{miniVideoRef.current.play()}
    })
    
    gsap.from (mainVideo.current, {
      transformOrigin:'center center',
      scale:0,
      duration:.5,
      ease:"power1.inOut"
    })
  
  }
  
  return () => {
   
  }
}, [Currentindex])
//imports the videos from public
    const videoSrc = (index) => `Videos/hero-${index}.mp4`
  return (
    <section className='hero'>
      <div
      ref={videFrameRef}
      className="video-frame">
      <div className="videocontain">
    <div>
    <div 
    onClick={HandlevideoChange}
    className="minivideo">
        <video
        ref={miniVideoRef}
        className='mini-video-player'
        src={videoSrc(videoChange)}
        loop
        muted
        autoPlay
        onLoadedData={handlevideoLoad}
        />
    </div>
    <div className="main-video">
      <video 
      ref={mainVideo}
      className='main-vide1'
      src={videoSrc(Currentindex === videoIndex -1 ?1 : Currentindex)}
      loop
      muted
      autoPlay
      onLoadedData={handlevideoLoad}/>
   
    </div>
    </div>
      </div>
 
  
 </div>
 <div className="header-text">
  <h1 className='first-text'>WHIMSICAL</h1>
  <p className='hero-p-text'>We are a fun and Whimsical studio for anime</p>
 </div>

 <div className="footer-text">
  <h1 className='last-text'>ADVENTURE</h1>
 </div>
    </section>
  )
}

export default Hero