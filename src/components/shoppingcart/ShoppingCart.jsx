import { useState } from "react";
import CartClear from "./CartClear";
import CartList from "./CartLits";
import CartTotal from "./CartTotal";
import CheckoutButton from "./CheckoutButton";
import styled from "styled-components";

const ShoppingCart = ({ onCheckout }) => {
  const [items, setItems] = useState([
    { id: 1, isNonItem: false },
    { id: 2, isNonItem: false },
    { id: 3, isNonItem: false },
  ]);

  const handleClearAll = () => {
    setItems((prevItems) =>
      prevItems.map((item) => ({ ...item, isNonItem: true }))
    );
  };

  const handleRemoveItem = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isNonItem: true } : item
      )
    );
  };

  return (
    <div>
      <ShoppingCartLayout>
        <CartList items={items} onRemoveItem={handleRemoveItem} />
        <CashContainer>
          <CartTotal />
          <CartClear onClearAll={handleClearAll} />
        </CashContainer>
        <CheckoutButton onCheckout={onCheckout} />
      </ShoppingCartLayout>
    </div>
  );
};

export default ShoppingCart;

const ShoppingCartLayout = styled.div`
  display: flex;
  width: 658px;
  height: 112px;
  border: 1px solid;
`;

const CashContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 147px;
  height: 112px;
`;
