import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import ProductCard from "./ProductCard";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import { Button } from "./ProductCard";

const Product = () => {
  const [allData, setAllData] = useState([]);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    const getProducts = async () => {
      const result = await axios({
        method: "get",
        url: "https://fakestoreapi.com/products",
      });
      setAllData(result.data);
      setLoading(false);
      //   console.log(result);
    };

    getProducts();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginLeft: "100px",

          marginBottom: "30px",
        }}
      >
        <Link to="/cart" style={{ textDecoration: "none", fontSize: "26px" }}>
          <Button style={{ backgroundColor: "transparent" }}>Go to Cart</Button>
        </Link>
      </div>
      <div>
        {Loading && <h1>Loading Products...</h1>}
        {allData &&
          allData.map((item, index) => (
            <ProductCard item={item} pa={"product"} />
          ))}
      </div>
    </div>
  );
};

export default Product;
