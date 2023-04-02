import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";

export default function ListProduct(props) {
  const {products, setProducts, setFixedProducts} = props

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_DB_URL}products`)
      .then((resp) => {
        console.log(resp.data);
        setFixedProducts(resp.data)
        setProducts(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ListProductContainer>
        {products.map((prod) => {
          return (
            <Product
              id={prod._id}
              name={prod.name}
              description={prod.description}
              image={prod.image}
              price={prod.price}
            />
          );
        })}
      </ListProductContainer>
    </>
  );
}

const ListProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
`;