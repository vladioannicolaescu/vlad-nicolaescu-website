import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HomeSection from './Sections/Home';
import AboutSection from './Sections/About';
import ExperienceSection from './Sections/Experience';
import PortfolioSection from './Sections/Portfolio';
import ContactSection from './Sections/Contact';
import FooterBar from './components/Footer';

function App() {
  return (
    // For single-page implementation:
    <div id="app">
      <NavBar/>
      <HomeSection/>
      <AboutSection/>
      <ExperienceSection/>
      <PortfolioSection/>
      <ContactSection/>
      <FooterBar/>
    </div>

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
