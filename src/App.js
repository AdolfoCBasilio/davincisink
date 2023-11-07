import React, { useState, useEffect } from "react";
import logo from './images/logoVertical.png'
import davinciLogo from './images/Group 74.svg'
import whatsappLogo from './images/icons8-whatsapp (1).svg'
import facebookLogo from './images/icons8-facebook.svg'
import instagramLogo from './images/icons8-instagram.svg'
import tiktokLogo from './images/icons8-tiktok (1).svg'
import pinterestLogo from './images/icons8-pinterest.svg'
import './App.css'
import { Enlace } from "./components/Enlace";
import ProgressBar from "./components/ProgressBar/ProgressBar";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="container-loading" >
        <div className="container-logo">
          <img className="logo-style" src={logo} alt="Da Vinci's Ink Logo" />
        </div>
        <ProgressBar/>
      </div>
    );
  }

  return (
    <div className="container">

      <div style={{display:'flex',flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
        <h1>Da Vinci's Ink</h1>
        <ul>
          <Enlace url="https://walink.co/85f91a"texto="WhatsApp" imagenUrl={whatsappLogo}/>
          <Enlace url="https://www.instagram.com/adolfocbg/"texto="Instagram" imagenUrl={instagramLogo}/>
          <Enlace url="https://www.facebook.com/AdolfoC.BasilioGeniz"texto="Facebook" imagenUrl={facebookLogo}/>
          <Enlace url="https://www.tiktok.com/@adolfocbasilio"texto="TikTok" imagenUrl={tiktokLogo}/>
          <Enlace url="#"texto="Da Vinci´s Ink" imagenUrl={davinciLogo}/>
          <Enlace url="https://www.pinterest.com.mx" texto="Busca diseños aqui" imagenUrl={pinterestLogo} />
        </ul>
      </div>

      <div style={{ background: '#FEB801', height: '2vh', width: '100%' }}></div>
    </div>
  );
}

export default App;
