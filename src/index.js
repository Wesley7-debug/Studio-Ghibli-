import  { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Showrea from './components/Showrea/Showrea';
import Hero from './components/Hero/Hero';
import Parallac from './components/Parallax/Parallac';
import About from './components/About/About';
import Awards from './components/Awards/Awards';
import Work from './components/Works/Work';
import Footer from './components/Footer/Footer';
import Nav from './components/NavBar/Nav';
import Gallery from './components/Gallery/Gallery';
import Loading from './components/Loading/Loading';  // Loading animation component

const Index = () => {
  const [darkMode, setdarkMode] = useState(false);
  const [loading, setLoading] = useState(false); // Track loading state



  



  return (
    <Router>
      {
        !loading && <Loading onFinish={() =>{ setLoading(true)}}/>
      }
      {loading && (
        <div className={darkMode ? "dark" : 'body'}>
  <>
            <Nav darkMode={darkMode} setdarkMode={setdarkMode} /> {/* Un-commented Nav */}
         
              <Routes>
                <Route path="/" element={
                  <>
                  <Hero/>
                  <Parallac/>
                  <About/>
                  <Awards/>
                  <Showrea/>
                  <Work/>
                  </>
                } />
                <Route path="/parallax" element={<Parallac />} />
                <Route path="/about" element={<About />} />
                <Route path="/awards" element={<Awards />} />
                <Route path="/showrea" element={<Showrea />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/work" element={<Work />} />
              </Routes>
           
            <Footer />

          </>
        )
      </div>
 
        )}
      
      </Router>
        
  );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);

export default Index;
