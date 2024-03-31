import React from 'react'
import gallery1 from '../imgs/gallery1.jpg'
import gallery2 from '../imgs/gallery2.jpg'
import gallery3 from '../imgs/gallery3.jpg'
import gallery4 from '../imgs/gallery4.jpg'
import gallery5 from '../imgs/gallery5.jpg'
import gallery6 from '../imgs/gallery6.jpg'

const Gallery = () => {
  return (
    <div className="bg-gallery">
    <div className="gallery-flex">
        <div className="image-one event">
            <img src={gallery1} alt=""/>
            <div className="overlay"></div>
        </div>
        <div className="inside-gallery">
            <div className="left">
                <div className="event">
                    <img src={gallery2} alt=""/>
                    <div className="overlay"></div>
                </div>
                <div className="event">
                    <img src={gallery3} alt=""/>
                    <div className="overlay"></div>
                </div>
            </div>

            <div className="right">
                <div className="event">
                    <img src={gallery4} alt=""/>
                    <div className="overlay"></div>
                </div>
                <div className="event">
                    <img src={gallery5} alt=""/>
                    <div className="overlay"></div>
                </div>
            </div>
        </div>

        <div className="last-image event">
            <img src={gallery6} alt=""/>
            <div className="overlay"></div>
        </div>
    </div>
</div>
  )
}

export default Gallery