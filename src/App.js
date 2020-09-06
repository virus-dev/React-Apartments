import React from 'react';
import logo from './img/logo.svg'

function App() {
  return (
    <div className="Page">
      <header>
        <div className="container">
          <div className="header__inner">
            <div className="header__logo">
              <img src={logo}></img>
              <div className="header__logo__text"> 
                <div>React</div> 
                <div>Apartments</div> 
              </div>
            </div>  
          </div>  
        </div>
      </header>
    </div>
  );
}

export default App;
