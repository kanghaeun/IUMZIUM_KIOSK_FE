// CartNonItem.js
import styled from "styled-components";
import shoppingBasket from "../../assets/shopping-basket.png";

const CartNonItem = () => {
  return (
    <CartNonItemLayout>
      <ShoppingBasketImg src={shoppingBasket} alt="shopping-basket" />
    </CartNonItemLayout>
  );
};

export default CartNonItem;

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

const ShoppingBasketImg = styled.img`
  display: flex;
`;
