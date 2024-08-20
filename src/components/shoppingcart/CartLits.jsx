import { useState } from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import { IoMdArrowDropright } from "react-icons/io";

const CartLits = () => {
  const [items, setItems] = useState([1, 2, 3]); // 예시로 3개의 아이템

  return (
    <CartListsLayout>
      {items.map((item, index) => (
        <CartItemWrapper key={index} isLast={index === items.length - 1}>
          <CartItem />
        </CartItemWrapper>
      ))}
      <StyledArrowIcon size={"5rem"} />
    </CartListsLayout>
  );
};

export default CartLits;

const CartListsLayout = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const CartItemWrapper = styled.div`
  ${(props) =>
    !props.isLast &&
    `
    margin-right: 24px;
  `}
`;

const StyledArrowIcon = styled(IoMdArrowDropright)`
  color: #707070;
`;
