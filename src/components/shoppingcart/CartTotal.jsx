import styled from "styled-components";
import { FaWonSign } from "react-icons/fa6";

const CartTotal = () => {
  return (
    <CartTotalLayout>
      <TextContainer>
        <TotalText>총 결제금액</TotalText>
        <AmountContainer>
          <WonSignWrapper>
            <FaWonSign color="#008468" />
          </WonSignWrapper>
          <AmountText>6,800</AmountText>
        </AmountContainer>
      </TextContainer>
    </CartTotalLayout>
  );
};

export default CartTotal;

const CartTotalLayout = styled.div`
  width: 135px;
  height: 71px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  border-bottom: 1px solid;
`;

const TextContainer = styled.div`
  margin-right: 10px;
  width: 100%;
`;

const TotalText = styled.div`
  font-size: 15px;
  margin-bottom: 7px;
  text-align: right;
`;

const AmountContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 10px;
`;

const WonSignWrapper = styled.div`
  color: #008468;
  font-size: 18px;
  display: flex;
  align-items: center;
`;

const AmountText = styled.div`
  color: #008468;
  font-size: 18px;
  margin-left: 5px;
`;
