//-----------------productinfo.js--------------

import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const ProductInfo = (prod) => {
  const { resId } = useParams();
  const [ProdData, SetProdData] = useState("");
  useEffect(() => {
    fetchProductInfo();
  }, []);

  const fetchProductInfo = async () => {
    const data = await fetch(`https://dummyjson.com/products/${resId}`);
    const response = await data.json();
    SetProdData(response);
    console.log(response);
  };
  return (
    <div className="clickcards">
      <h1>Product</h1>
      <div className="detail">
        <div>
          <img className="prodimg" src={ProdData.images}></img>
        </div>
        <div className="dtailinfo">
          <h2>{ProdData.title}</h2>
          <p>{ProdData.description}</p>
          <h3>Price-{ProdData.price}$</h3>
          <h4>Rating-{ProdData.rating}⭐</h4>
          <button className="cartbutton">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
