import React , { useEffect } from 'react'
import logo from '../imgs/logo.png'
import menuOn from '../imgs/menu.png'


const Navbar = () => {

  useEffect(() => {
    const myNav = () => {
      const bar = document.querySelector(".bar");
      const nav = document.querySelector(".navigation");
      
      bar.onclick = () => {
        if (nav.style.left === "0%") {
          nav.style.left = "-100%"
        } else {
          nav.style.left = "0%"
        }
      };
    };

    myNav();
  }, []);

  return (
          <header>
        <div className="logo">
            <img className='logo' src={logo} alt="logo"/>
        </div>
        <nav className="navigation">
            <li className='li-link'><a className='link' href="#home">home</a></li>
            <li><a className='link' href="#shop">shop</a></li>
            <li><a className='link' href="#menu">menu</a></li>
            <li><a className='link' href="#about">about</a></li>
            <li><a className='link' href="#contact">contact</a></li>
        </nav>
        <div className="bars">
            <img src={menuOn} alt="menu" className="bar"/>
        </div>
    </header>
  )
}

export default Navbar