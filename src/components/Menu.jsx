import React, { useState } from "react";
import items from "../Data/MenuData";
const Menu = () => {
  const [itemsData, setItemsData] = useState(items);
  return (
    <div>
      <div class="bg-menu" id="menu">
        <div class="menu-title">
          <section>what happens here</section>
          <h2>time for coffee</h2>
          <hr />
        </div>
        <div class="menu-flex">
          {itemsData.length >= 1 ? (
            itemsData.map((item) => {
              return (
                <div key={item.id} class="menu1">
                  <div class="small-image">
                    <img src={item.img} alt="" />
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                  </div>
                  <div class="line"></div>
                  <div>
                    <h4>{item.price}</h4>
                  </div>
                </div>
              );
            })
          ) : (
            <h3>There are no products</h3>
          )}
        </div>
        <div class="menu-link">
          <a href="#">view menu</a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
