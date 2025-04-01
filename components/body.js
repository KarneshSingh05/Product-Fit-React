// --------Body.js-----------

import React, { useEffect, useState } from "react";
import { useState } from "react";
import { Link } from "react-router";
import { Instock } from "./productinfo";
import { Card } from "./Card";
import { Instock } from "./Card";
import { Shimmer } from "./shimmer";

export const Body = () => {
  const [info, setRes] = useState([]);
  const [searchRes, setSearch] = useState("");
  const [newProduct, setNewProduct] = useState([]);
  const InstockOrNot = Instock(Card);
  useEffect(() => {
    console.log("use effect");

    const data = async () => {
      const response = await fetch("https://dummyjson.com/products");

      const readData = await response.json();
      console.log(readData);
      setRes(readData.products);
      setNewProduct(readData.products);
    };
    data();
  }, []);

  return info.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="search"
          value={searchRes}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            let filterProduct = newProduct.filter((products) => {
              return products.title
                .toLowerCase()
                .includes(searchRes.toLowerCase());
            });
            setRes(filterProduct);
          }}
        >
          search
        </button>
      </div>
      <div className="all-products">
        <button
          onClick={() => {
            let beauty = newProduct.filter((products) => {
              return products.category === "beauty";
            });
            setRes(beauty);
          }}
        >
          Beauty
        </button>
        <button
          onClick={() => {
            let fragrances = newProduct.filter((products) => {
              return products.category === "fragrances";
            });
            setRes(fragrances);
          }}
        >
          Fragrances
        </button>
        <button
          onClick={() => {
            let furniture = newProduct.filter((products) => {
              return products.category === "furniture";
            });
            setRes(furniture);
          }}
        >
          Furniture
        </button>
        <button
          onClick={() => {
            let groceries = newProduct.filter((products) => {
              return products.category === "groceries";
            });
            setRes(groceries);
          }}
        >
          Groceries
        </button>
        <button
          onClick={() => {
            let Allitems = newProduct.filter((products) => {
              return products;
            });
            setRes(Allitems);
          }}
        >
          All-Items
        </button>
      </div>
      <div className="product-card">
        {info.map((elem) => {
          return (
            <Link key={elem.id} to={`/products/${elem.id}`}>
              {/* {elem.availabilityStatus === "Low Stock" ? (
                <InstockOrNot products={elem}></InstockOrNot>
              ) : (
                <Card key={elem.id} products={elem}></Card>
              )} */}

              {/* <Card key={elem.id} products={elem}></Card> */}
              <InstockOrNot products={elem}></InstockOrNot>
            </Link>
          );
        })}
      </div>
    </>
  );
};
