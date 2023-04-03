import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import useUser from "../../Hooks/useUser";

export default function ProductInformationOnTheProductPage() {
  const [product, setProduct] = useState({});
  let [amount, setAmount] = useState(1);
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const { user } = useUser();
  const config = {
    headers: { Authorization: `Bearer ${user.token}` },
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_DB_URL}products/${id}`, config)
      .then((resp) => {
        console.log(resp.data);
        setProduct(resp.data);
      })
      .catch((err) => console.log(err));

    axios
      .get(`${process.env.REACT_APP_DB_URL}cart`, config)
      .then((resp) => {
        setProducts(resp.data);
        console.log(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function PostProductToCart() {
    const body = {
      productId: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      amount: amount,
      userId: user.id,
    };

    axios
      .post(`${process.env.REACT_APP_DB_URL}cart`, body, config)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  }

  function subAmount() {
    if (amount > 1) {
      setAmount((amount -= 1));
    }
    return;
  }

  return (
    <>
      <ProductInformationContainer>
        <ImageProduct>
          <img src={product.image} alt="Imagem do produto" />
        </ImageProduct>
        <InfoProduct>
          <PriceAndAddAmount>
            <p className="price">R${product.price},00</p>
            <Amount>
              <span onClick={() => subAmount()}>-</span> {amount}{" "}
              <span onClick={() => setAmount((amount += 1))}>+</span>
            </Amount>
          </PriceAndAddAmount>

          <p className="title">{product.name}</p>
          <p className="description">{product.description}</p>
          <ButtonToAddCart onClick={() => PostProductToCart()} className="buy">
            Comprar
          </ButtonToAddCart>
        </InfoProduct>
      </ProductInformationContainer>
    </>
  );
}

const ProductInformationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 60%;
`;

const ImageProduct = styled.div`
  width: 35%;
  img {
    width: 100%;
    height: 300px;
  }
`;

const InfoProduct = styled.div`
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: initial;
  width: 30%;
  height: 300px;
  position: relative;
  .price {
    font-size: 30px;
    margin-bottom: 20px;
  }
  .title {
    font-size: 20px;
    margin-bottom: 10px;
    color: #52b6ff;
  }
  .description {
    font-size: 15px;
  }
  .buy {
    transition: transform 0.2s ease-in-out;
    :hover {
      transform: scale(1.1);
    }
  }
`;

const Amount = styled.div`
  background-color: #dfdfdf;
  margin-left: 20px;
  font-size: 25px;
  width: 100%;
  height: 62%;
  display: flex;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  span {
    cursor: pointer;
    margin: 5px;
  }
`;

const PriceAndAddAmount = styled.div`
  display: flex;
  width: 100%;
`;

const ButtonToAddCart = styled.div`
  background-color: #52b6ff;
  border-radius: 5px;
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 0;
  justify-content: center;
  align-items: center;
  height: 30px;
  color: white;
  cursor: pointer;
`;
