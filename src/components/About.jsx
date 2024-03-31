import React from 'react'
import about1 from '../imgs/about1.jpg'
import about2 from '../imgs/about2.jpg'
import logo from '../imgs/logo.png'
const About = () => {
  return (
    <div className="bg-about" id="about">
    <div className="about-flex">
        <div className="about1">
            <div>
                <img src={about1} alt=""/>
            </div>
            <div className="image-logo">
                <img src={logo} alt=""/>
            </div>
        </div>

        <div className="about1">
            <div>
                <img src={about2} alt=""/>
            </div>
            <div className="about1-txt">
                <h3>opening hours & <br/> reservations</h3>
                <div className="txt-inside">
                    <section>saturday - friday</section>
                    <section>9.00am - 9.00pm</section>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default About