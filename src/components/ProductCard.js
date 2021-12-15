import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setAddToCart } from "../redux/features/addToCart";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  height: 150px;
  width: 200px;
`;

const Dcontainer = styled.div`
  height: max-content;
  width: 350px;
  margin-right: 10px;
  margin-left: 10px;
`;

const Title = styled.p`
  font-size: ${(props) => props.fontSize}
  font-weight: 600;
`;

export const Button = styled.button`
  width: max-content;
  height: max-content;
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: none;
  border: 2px solid orange;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    border: 2px solid green;
    background-color: white;
  }
`;

const ProductCard = ({ item, pa }) => {
  const dispatch = useDispatch();
  const allitems = useSelector((state) => state.cart.value);
  console.log(allitems.cartItems.length, "hhhhh");
  console.log(item);

  const addToCart = (e, item) => {
    if (allitems.cartItems.length == 0) {
      const da = [item];
      dispatch(setAddToCart(da));
      alert("Item added to cart");
    } else {
      let newCart = [...allitems.cartItems, item];
      dispatch(setAddToCart(newCart));
      alert("Item added to cart");
    }
  };
  return (
    <Container>
      <Image src={item.image} />
      <Dcontainer>
        <Title>{item.title}</Title>
        <Title style={{ fontSize: "12px" }}>$ {item.price}</Title>
        <Title style={{ fontSize: "12px" }}>{item.description}</Title>
      </Dcontainer>
      {pa == "product" && (
        <Button onClick={(e) => addToCart(e, item)}>Add</Button>
      )}
    </Container>
  );
};

export default ProductCard;
