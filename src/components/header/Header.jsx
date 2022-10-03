import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div>
      <nav className="nav container">
        <a href="index.html" className="nav__logo">Smith</a>



        <div className="nav__menu">
            <ul className="nav__list grid">
                <li className="nav__item">
                    <a href="" className="nav__link">
                        <i className="uil uil-estate nav__icon">
                            Home
                        </i>
                    </a>
                </li>

                <li className="nav__item">
                    <a href="" className="nav__link">
                        <i className="uil uil-user nav__icon">
                            
                        </i>About
                    </a>
                </li>

                <li className="nav__item">
                    <a href="" className="nav__link">
                        <i className="uil uil-file-alt nav__icon">
                            
                        </i>Skills
                    </a>
                </li>

                <li className="nav__item">
                    <a href="" className="nav__link">
                        <i className="uil uil- nav__icon">
                            
                        </i>
                    </a>
                </li>

                <li className="nav__item">
                    <a href="" className="nav__link">
                        <i className="uil uil- nav__icon">
                            
                        </i>
                    </a>
                </li>

                <li className="nav__item">
                    <a href="" className="nav__link">
                        <i className="uil uil- nav__icon">
                            
                        </i>
                    </a>
                </li>
            </ul>
            
        </div>
      </nav>
    </div>
  )
}

export default Header
 