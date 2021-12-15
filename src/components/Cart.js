import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const Cart = () => {
  const allitems = useSelector((state) => state.cart.value);
  console.log(allitems);
  return (
    <div>
      <Link to="/">Go To Home</Link>
      <h1>CART ITEMS</h1>
      {allitems &&
        allitems.cartItems.map((item) => (
          <ProductCard item={item} pa={"cart"} />
        ))}
      <button
        style={{
          width: "200px",
          backgroundColor: "orange",
          padding: "10px",
          border: "none",
          borderRadius: "7px",
        }}
      >
        Proceed to checkout
      </button>
    </div>
  );
};

export default Cart;
