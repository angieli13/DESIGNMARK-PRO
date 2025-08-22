import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BuildYourGiant from './components/BuildYourGiant.jsx';
import Configurator from './components/Configurator.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Services from './components/Services.jsx';
import WhatWeDo from './components/WhatWeDo.jsx';
import CalendlyPage from './components/CalendlyPage.jsx';
import PackagesPage from './components/PackagesPage.jsx'; 
import './styles/App.css';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={
          <>
            <Home />
            <Services />
            <WhatWeDo />
            <Configurator />
            <BuildYourGiant />
            <Footer />
          </>
        }/>

        
        <Route path="/calendly" element={<CalendlyPage />} />

       
        <Route path="/packages" element={<PackagesPage />} />
      </Routes>
    </Router>
  );
}

export default App;

