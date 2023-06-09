import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import useUser from "../../Hooks/useUser";

export default function ProductInformationOnTheProductPage() {
  const [product, setProduct] = useState({});
  let [amount, setAmount] = useState(1);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()
  const { id } = useParams();
  const { user } = useUser();
  const config = {
    headers: { Authorization: `Bearer ${user.token}` },
  };

  useEffect(() => {
    axios
      .get(`https://mypharma-api.onrender.com/products/${id}`, config)
      .then((resp) => {
        setProduct(resp.data);
      })
      .catch((err) => console.log(err));

    axios
      .get(`https://mypharma-api.onrender.com/cart`, config)
      .then((resp) => {
        setProducts(resp.data);
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
      .post(`https://mypharma-api.onrender.com/cart`, body, config)
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
          <ButtonBackToHomePage onClick={()=> navigate('/homePage')} className="back">
            Comprar mais
          </ButtonBackToHomePage>
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
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 10px;
  }
`;

const ImageProduct = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  img {
    width: 300px;
  }
  @media (max-width: 700px) {
    width: 100%;
    margin-bottom: 30px;
    margin-top: 30px;
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
    @media (max-width: 700px) {
      margin-bottom: 50px;
    }
  }
  .buy {
    transition: transform 0.2s ease-in-out;
    :hover {
      transform: scale(1.1);
    }
  }
  .back{
    transition: transform 0.2s ease-in-out;
    :hover {
      transform: scale(1.1);
    }
  }
  @media (max-width: 700px) {
    width: 100%;
    height: 100%;
    margin-left: 0;
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
  @media (max-width: 700px) {
    width: 100px;
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

const ButtonBackToHomePage = styled.div`
  color: #52b6ff;
  background-color: white;
  border-radius: 5px;
  display: flex;
  width: 100%;
  position: absolute;
  bottom: -35px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
  height: 30px;
  cursor: pointer;
`
