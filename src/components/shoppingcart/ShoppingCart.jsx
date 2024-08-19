import CartClear from "./CartClear";
import CartLits from "./CartLits";
import CartTotal from "./CartTotal";
import CheckoutButton from "./CheckoutButton";
import styled from "styled-components";

const ShoppingCart = () => {
  return (
    <div>
      <ShoppingCartLayout>
        <CartLits />
        <CashContainer>
          <CartTotal />
          <CartClear />
        </CashContainer>
        <CheckoutButton />
      </ShoppingCartLayout>
    </div>
  );
};

export default ShoppingCart;

const ShoppingCartLayout = styled.div`
  display: flex;
  width: 90%;
  height: 112px;
  border: 1px solid;
`;

const CashContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  width: 147px;
  height: 112px;
`;
