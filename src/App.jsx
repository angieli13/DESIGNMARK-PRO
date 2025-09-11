import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BuildYourGiant from './components/BuildYourGiant.jsx';
import Configurator from './components/Configurator.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Services from './components/Services.jsx';
import WhatWeDo from './components/WhatWeDo.jsx';
import CalendlyPage from './components/CalendlyPage.jsx';
import PackagesPage from './components/PackagesPage.jsx'; 
import LoginPage from './components/LoginPage.jsx'; 
import './styles/App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home */}
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

        {/* Calendly */}
        <Route path="/calendly" element={<CalendlyPage />} />

        {/* Paquetes */}
        <Route path="/packages" element={<PackagesPage />} />

        {/* Login */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;

