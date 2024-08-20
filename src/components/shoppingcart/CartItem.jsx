import styled from "styled-components";
import shoppingBasket from "../../assets/shopping-basket.png";
import { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const CartItem = ({ onRemove }) => {
  const [quantity, setQuantity] = useState(1);
  const [isCartNonItem, setIsCartNonItem] = useState(false);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  const handleRemove = () => {
    setIsCartNonItem(true);
  };

  return isCartNonItem ? (
    <CartNonItemLayout>
      <ShoppingBasketImg src={shoppingBasket} alt="shopping-basket" />
    </CartNonItemLayout>
  ) : (
    <CartItemLayout>
      <DeleteButton onClick={handleRemove}>
        <TiDelete color="#B6B6B6" size={"22px"} />
      </DeleteButton>
      <ImagePlaceholder>음료사진</ImagePlaceholder>
      <QuantityControl>
        <Button onClick={decreaseQuantity}>
          <CiCircleMinus />
        </Button>
        <Quantity>{quantity}</Quantity>
        <Button onClick={increaseQuantity}>
          <CiCirclePlus />
        </Button>
      </QuantityControl>
    </CartItemLayout>
  );
};

export default CartItem;

const CartItemLayout = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid;
  border-radius: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`;

const CartNonItemLayout = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid;
  border-radius: 8px;
  background-color: #e2e2e2;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;

const ShoppingBasketImg = styled.img`
  display: flex;
`;

const ImagePlaceholder = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  margin: 15px 0;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;

const Quantity = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin: 0 5px;
`;
