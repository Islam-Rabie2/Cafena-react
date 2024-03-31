import React, { useState } from "react";
import items from "../Data/ShopData";
import Category from "./Category";
const Shop = () => {
  const [itemsData, setItemsData] = useState(items);
  // fillteer By Category
  const fillterByCategory = (cat) => {
    if (cat === "all") {
      setItemsData(items);
    } else {
      const newArr = items.filter((i) => i.category === cat);
      setItemsData(newArr);
    }
  };

  return (
      <div className="bg-shop" id="shop">
        <Category fillterByCategory={fillterByCategory} />

        <div className="shop-flex consts">
          {itemsData.length >= 1 ? (
            itemsData.map((item) => {
              return (
                <div key={item.id} className="shop1 mix coffee">
                  <div className="shop-image">
                    <img src={item.img} alt="" />
                    <div className="price">{item.dffer}</div>
                    <div className="social">
                      <a href="#">
                        <i class="far fa-heart"></i>
                      </a>
                      <a href="#">
                        <i className="fas fa-shopping-cart"></i>
                      </a>
                      <a href="#">
                        <i className="fas fa-share-alt"></i>
                      </a>
                      <a href="#">
                        <i className="fas fa-search"></i>
                      </a>
                    </div>
                  </div>
                  <h2>{item.name}</h2>
                  <div className="stars">
                    <i className="fas fa-star gold"></i>
                    <i className="fas fa-star gold"></i>
                    <i className="fas fa-star gold"></i>
                    <i className="fas fa-star gold"></i>
                    <i className="far fa-star"></i>
                  </div>
                  <article>{item.prise}</article>
                  <span>{item.discount}</span>
                </div>
              );
            })
          ) : (
            <h3>There are no products</h3>
          )}

         
        </div>
      </div>
  );
};

export default Shop;
