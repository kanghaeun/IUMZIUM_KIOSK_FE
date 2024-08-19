import styled from "styled-components";

const CartClear = () => {
  return (
    <CartClearLayout>
      <div>전체 취소</div>
    </CartClearLayout>
  );
};

export default CartClear;
const CartClearLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #bfbfbf;
  height: 41px;
  div {
    color: #fff;
    font-weight: 500;
    font-size: 18px;
  }
`;
