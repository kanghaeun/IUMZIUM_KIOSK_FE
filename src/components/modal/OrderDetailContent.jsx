import styled from "styled-components";

const OrderDetailsContent = ({ details }) => {
  return (
    <OrderDetailsWrapper>
      {details.map((detail, index) => (
        <OrderDetailItem key={index} detail={detail} />
      ))}
    </OrderDetailsWrapper>
  );
};

const OrderDetailItem = ({ detail }) => {
  const { name, price, options } = detail;

  return (
    <DetailItemWrapper>
      <ProductInfo>
        <ProductName>{name}</ProductName>
        <OptionsList>
          {options.map((option, index) => (
            <OptionItem key={index}>{option}</OptionItem>
          ))}
        </OptionsList>
      </ProductInfo>
      <ProductPrice>{price}</ProductPrice>
    </DetailItemWrapper>
  );
};

// Styled Components
const OrderDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
`;

const ProductName = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const OptionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const OptionItem = styled.div`
  font-size: 16px;
  color: #666;
`;

const ProductPrice = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export default OrderDetailsContent;
