import styled from "styled-components";
import {
  calculateTotalQuantity,
  calculateTotalPrice,
} from "../../utils/calculateTotal";

const OrderDetailContent = ({ details }) => {
  const totalQuantity = calculateTotalQuantity(details);
  const totalPrice = calculateTotalPrice(details);

  return (
    <OrderDetailsWrapper>
      {details.map((detail, index) => (
        <OrderDetailItem key={index} detail={detail} />
      ))}
      <TotalInfoWrapper>
        <TotalQuantity>
          총 수량 <span>{totalQuantity}</span> 개
        </TotalQuantity>
        <TotalPrice>
          총 결제금액 <span>{totalPrice.toLocaleString()}</span>원
        </TotalPrice>
      </TotalInfoWrapper>
    </OrderDetailsWrapper>
  );
};

const OrderDetailItem = ({ detail }) => {
  const { name, price, options, quantity } = detail;

  return (
    <DetailItemWrapper>
      <ProductInfo>
        <ProductName>{name}</ProductName>
        <OptionsList>
          {options.map((option, index) => (
            <OptionItem key={index}>{option}</OptionItem>
          ))}
        </OptionsList>
        <Quantity>수량: {quantity}개</Quantity>
      </ProductInfo>
      <ProductPrice>{price}</ProductPrice>
    </DetailItemWrapper>
  );
};

const OrderDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 360px; /* 필요한 경우 이 높이를 조정하세요 */
  overflow-y: auto;
`;

const DetailItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProductName = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const OptionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const OptionItem = styled.div`
  font-size: 16px;
  color: #666;
`;

const Quantity = styled.div`
  font-size: 16px;
  color: #666;
`;

const ProductPrice = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const TotalInfoWrapper = styled.div`
  position: absolute;
  margin-top: 395px;
  margin-left: 315px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const TotalQuantity = styled.div`
  font-size: 20px;
  margin-bottom: 15px;

  span {
    font-weight: bold;
    color: #1b3c35;
    margin: 0 8px;
  }
`;

const TotalPrice = styled.div`
  font-size: 20px;
  color: #333;

  span {
    font-weight: bold;
    color: #1b3c35;
    margin: 0 8px;
  }
`;

export default OrderDetailContent;
