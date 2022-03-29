import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HomeSection from './Sections/Home';
import AboutSection from './Sections/About';
import PortfolioSection from './Sections/Portfolio';
import ContactSection from './Sections/Contact';
import FooterBar from './components/Footer';

function App() {
  return (
    // For single-page implementation:
    <>
      <NavBar/>
      <HomeSection/>
      <AboutSection/>
      <PortfolioSection/>
      <ContactSection/>
      <FooterBar/>
    </>

    // For multi-page implementation: 

    // <Router>
    //   <NavBar/>
    //   <Routes>
    //       <Route path='/' element={<HomeSection/>} />
    //       <Route path='/about' element={<AboutSection/>} />
    //       <Route path='/portfolio' element={<PortfolioSection/>} />
    //       <Route path='/contact' element={<ContactSection/>} />
    //   </Routes>
    // </Router>
  );
}

export default App;
