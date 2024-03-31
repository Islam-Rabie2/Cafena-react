import React , { useEffect } from 'react'

const Home = () => {

    useEffect(() => {
        const setHomeContentLeft = () => {
          const homeContent = document.querySelector(".home-content");
          homeContent.style.left = "50px";
        };
    
        setHomeContentLeft();
      }, []);
  return (
    <div className="home-section" id="home">
        <div className="home-content">
            <h1>Let's enjoy with our <br/> beautiful coffee</h1>
            <p>
                Affordable prices for everyone, so give us an opportunity <br/> for evaluation.
            </p>
            <div className="home-links">
                <div className="first">
                    <a href="#">testy coffee</a>
                </div>
                <div className="second">
                    <a href="#">read more</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home