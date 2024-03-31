import React from "react";
import img1 from "../imgs/img1.jpg";
import img2 from "../imgs/img2.jpg";
import img3 from "../imgs/img3.jpg";

const Service = () => {
  const Arr = [
    { img: `${img1}`, Section: "for drinks", sub: "coffee & drinks" },
    { img: `${img2}`, Section: "for entertainment", sub: "beans & sweets" },
    { img: `${img3}`, Section: "for food", sub: "croissant & cakes" },
  ];

  return (
    <div className="bg-service">
      {Arr.map((e) => {
        return (
          <div key={e.id} className="service-one">
            <img src={e.img} alt="" />
            <div className="overlay">
              <div className="over-txt">
                <p>{e.Section}</p>
                <h2>{e.sub}</h2>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Service;
