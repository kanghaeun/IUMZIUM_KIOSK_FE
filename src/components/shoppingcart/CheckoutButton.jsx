import styled from "styled-components";
import checkoutImage from "../../assets/checkout.png";
const CheckoutButton = () => {
  return (
    <ButtonContainer>
      <CheckoutImage src={checkoutImage} alt="Checkout" />
      <div>결제하기</div>
    </ButtonContainer>
  );
};

export default CheckoutButton;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 156px;
  cursor: pointer;
  background-color: #1b3c35;
  div {
    color: #fff;
    font-size: 20px;
  }
`;

const CheckoutImage = styled.img`
  width: 64px; // 이미지 크기를 조절하세요
  height: auto;
  margin-bottom: 10px;
`;
