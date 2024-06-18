import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hizmetler from './pages/Hizmetler';
import Iletisim from './pages/Iletisim';
import Kurumsal from './pages/Kurumsal';
import LandingPage from './Layout/LandingPage';
import Enerji from './pages/Enerji';
import Ges from './pages/Ges';
import Kgys from './pages/Kgsy';
import Pts from './pages/Pts';
import NotFound from './pages/NotFound';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/hizmetlerimiz' element={<Hizmetler />} />
          <Route path='/iletisim' element={<Iletisim />} />
          <Route path='/kurumsal' element={<Kurumsal />} />
          <Route path='/enerji' element={<Enerji />} />
          <Route path='/ges' element={<Ges />} />
          <Route path='/kgys_kurumlari' element={<Kgys />} />
          <Route path='/pts-eds' element={<Pts />} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
