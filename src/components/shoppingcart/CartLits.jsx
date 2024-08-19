import styled from "styled-components";
import CartItem from "./CartItem";
import { IoMdArrowDropright } from "react-icons/io";

const CartLits = () => {
  return (
    <CartListsLayout>
      <CartItem />
      <CartItem />
      <CartItem />
      <IoMdArrowDropright size={"5rem"} />
    </CartListsLayout>
  );
};

export default CartLits;
const CartListsLayout = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
`;
