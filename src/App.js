import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//assets
import logo from "./images/logoVertical.png";

//Components
import ProgressBar from "./components/ProgressBar/ProgressBar";
import { Home } from "./pages/Home/Home";
import Contact from "./pages/contact/Contact";


function App() {
  const [loading, setLoading] = useState(true);
  // const [linksVisible, setLinksVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // const handleLinkClick = () => {
  //   setLinksVisible(false);
  // };

  if (loading) {
    return (
      <div className="container-loading">
        <div className="container-logo">
          <img className="logo-style" src={logo} alt="Da Vinci's Ink Logo" />
        </div>
        <ProgressBar />
      </div>
    );
  }

  return (
    <div>

      <Contact />

      <Router>
        {/* {linksVisible(true)} */}
        {/* {linksVisible && (
        <div>
        <Link to="/home" onClick={handleLinkClick}>
        Home Link
        </Link>
        <br />
        <Link to="/about" onClick={handleLinkClick}>
        About Link
        </Link>
        </div>
      )} */}
        <Routes>
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/home" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
