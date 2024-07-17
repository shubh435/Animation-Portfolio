import React from 'react';
import './App.css';
import { cartImage, dribbleImage, instagramImage, logoImage, telegramImage } from './assets/assets';

function App() {
  return (
    <div className="container">
      <nav>
          <img src={logoImage} className="logo" />
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Portfolio</a></li>
        </ul>
        <img src={cartImage} className="cart-icon" />
      </nav>

      <div className="text-box">
        <p>I'm</p>
        <h1>Shubham</h1>
        <h3>I help companies make a beautifull websites</h3>
        <div className="row">
          <a href="https://shubh435.github.io">Explore my portfolio</a>
          <a href="https://www.linkedin.com/in/shubhamsarode-dev/" target='_blank'>Connetct with me <span>&#x27F6;</span></a>
          <span
            >You can explore More about my portfolio <br />
            Personal lif experience Here.</span
          >
        </div>
      </div>
      <div className="social-icons">
        <a href="https://github.com/shubh435"><img src={dribbleImage} title="Github" /></a>
        <a href="https://github.com/shubh435"><img src={instagramImage} title="Instagram" /></a>
        <a href="https://github.com/shubh435"><img src={telegramImage} title="Telegram" /></a>
      </div>
    </div>
  );
}

export default App;
