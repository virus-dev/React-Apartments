import React from 'react'
import logo from '../img/logo.svg'

function Header() {
    return (
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
    )
}

export default Header
