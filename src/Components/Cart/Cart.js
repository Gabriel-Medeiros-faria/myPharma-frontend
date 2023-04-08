import styled from "styled-components";
import { BsTrash } from "react-icons/bs";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { BsArrow90DegLeft } from "react-icons/bs";
import UseUser from "../../Hooks/useUser";

export default function Cart(props) {
  const { setOpenCart } = props;
  const [products, setProducts] = useState([]);
  const [loadProductToCart, setLoadProductToCart] = useState(false);
  const { user } = UseUser();
  const config = {
    headers: { Authorization: `Bearer ${user.token}` },
  };
  let totalPrice = 0;
  products.map((prod) => (totalPrice += prod.price * prod.amount));

  useEffect(() => {
    axios
      .get(`https://mypharma-api.onrender.com/cart`, config)
      .then((resp) => {
        setProducts(resp.data);
      })
      .catch((err) => console.log(err));
  }, [loadProductToCart]);

  function deleteProductToCart(id) {
    axios
      .delete(`https://mypharma-api.onrender.com/cart/${id}`, config)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));

    if (loadProductToCart) {
      setLoadProductToCart(false);
    }
    if (!loadProductToCart) {
      setLoadProductToCart(true);
    }
  }

  return (
    <>
      <CartContainer>
        <p className="titleCart">Seus produtos: R${totalPrice},00</p>
        <BsArrow90DegLeft className="back" onClick={() => setOpenCart(false)} />
        {products.map((prod) => {
          return (
            <ProductCart>
              <img src={prod.image} alt="Imagem do produto" />
              <BsTrash
                className="trash"
                onClick={() => deleteProductToCart(prod.productId)}
              />
              <p className="titleProduct">{prod.name}</p>
              <p className="priceProduct">R$ {prod.price},00</p>
              <p className="amountProduct">Quantidade - {prod.amount}</p>
            </ProductCart>
          );
        })}
      </CartContainer>
    </>
  );
}

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  background-color: white;
  width: 35%;
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  overflow-y: scroll;
  .titleCart {
    margin: 10px 0 30px 0;
    font-size: 20px;
  }
  .back {
    cursor: pointer;
    position: absolute;
    left: 20px;
    top: 15px;
  }
  @media (max-width: 700px) {
    width: 70%;
    .back {
      top: 35px;
    }
  }
`;

const ProductCart = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 10px;
  width: 75%;
  padding: 7px;
  img {
    width: 60%;
    margin-bottom: 5px;
  }

  .titleProduct {
    color: #52b6ff;
  }

  .priceProduct {
    margin-top: 5px;
    font-size: 15px;
  }

  .amountProduct {
    margin-top: 5px;
    font-size: 15px;
  }

  .trash {
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
  }
`;
