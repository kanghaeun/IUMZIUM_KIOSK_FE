import styled from "styled-components";
import shoppingBasket from "../../assets/shopping-basket.png";
import { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const CartItem = ({ onRemove, isNonItem }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  return isNonItem ? (
    <CartNonItemLayout>
      <ShoppingBasketImg src={shoppingBasket} alt="shopping-basket" />
    </CartNonItemLayout>
  ) : (
    <CartItemLayout>
      <DeleteButton onClick={onRemove}>
        <TiDelete color="#B6B6B6" size={"22px"} />
      </DeleteButton>
      <ImagePlaceholder>음료사진</ImagePlaceholder>
      <QuantityControl>
        <Button onClick={decreaseQuantity}>
          <FaMinus color="#7A7A7A" />
        </Button>
        <Quantity>{quantity}</Quantity>
        <Button onClick={increaseQuantity}>
          <FaPlus color="#7A7A7A" />
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
  top: 0px;
  right: -5px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
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
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d9d9d9;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
`;

const Quantity = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin: 0 5px;
`;
