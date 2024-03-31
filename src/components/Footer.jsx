import React from 'react'
import logo from '../imgs/logo.png'
const Footer = () => {
  return (
    <div className="footer" id="contact">
        <div className="footer-flex">
            <div className="footer1">
                <div>
                    <img src={logo} alt=""/>
                </div>
                <section>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium modi nobis qui? Vero cumque iure velit quibusdam.
                </section>
                <div className="footer-links">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                </div>
            </div>

            <div className="footer1">
                <h3>contact info</h3>
                <div className="location">
                    <span><i className="fas fa-map-marker-alt"></i></span>
                    <a href="#">our location</a>
                    <section>egypt, el giza, kz</section>
                </div>
                <div className="location">
                    <span><i className="fas fa-phone"></i></span>
                    <a href="#">our phone</a>
                    <section>+015-544-084-94</section>
                    <section>+015-544-084-94</section>
                </div>
            </div>
            <div className="footer1">
                <h3>subscribe</h3>
                <form action="">
                    <input type="email" name="" id="" placeholder="your Email"/>
                    <a href="#">subscribe</a>
                </form>
                <div class="check">
                    <input type="checkbox" name="" id="inpt"/>
                    <label for="inpt">I have read and agree to all terms & conditions.</label>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Footer