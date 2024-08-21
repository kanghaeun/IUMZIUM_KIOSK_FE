import styled from "styled-components";
import CartItem from "./CartItem";
import { IoMdArrowDropright } from "react-icons/io";

const CartList = ({ items, onRemoveItem }) => {
  return (
    <CartListsLayout>
      {items.map((item, index) => (
        <CartItemWrapper key={item.id} isLast={index === items.length - 1}>
          <CartItem
            isNonItem={item.isNonItem}
            onRemove={() => onRemoveItem(item.id)}
          />
        </CartItemWrapper>
      ))}
      <StyledArrowIcon size={"5rem"} />
    </CartListsLayout>
  );
};

export default CartList;

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
