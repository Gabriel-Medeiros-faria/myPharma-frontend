import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import useUser from "../../Hooks/useUser";

export default function ListProduct(props) {
  const {products, setProducts, setFixedProducts} = props
  const {user} = useUser()
  const config = {
    headers: { "Authorization": `Bearer ${user.token}` }
}

  useEffect(() => {
    axios
      .get(`https://mypharma-api.onrender.com/products`, config)
      .then((resp) => {
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
  @media (max-width: 700px) {
      justify-content:center;
    }
`;
