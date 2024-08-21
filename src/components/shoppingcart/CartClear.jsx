import styled from "styled-components";

const CartClear = ({ onClearAll }) => {
  return (
    <CartClearLayout onClick={onClearAll}>
      <div>전체 취소</div>
    </CartClearLayout>
  );
};

export default CartClear;

const CartClearLayout = styled.button`
  display: flex;
  align-items: center;
  border: none;
  justify-content: center;
  background-color: #bfbfbf;
  border-left: 1px solid;
  height: 41px;
  cursor: pointer;
  div {
    color: #fff;
    font-weight: 500;
    font-size: 18px;
  }
`;
