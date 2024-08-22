import styled from "styled-components";
import Container from "./common/Container";
import TopArea from "./main/TopArea";
import { FaWonSign } from "react-icons/fa6";

const OrderDetail = () => {
  return (
    <Container>
      <TopArea>
        <Header>주문 세부내역</Header>
        <DetailContent>
          <DetailText>
            <span>카페라떼</span>
            <div>ICED</div>
            <div>Small</div>
            <div>샷 추가, 휘핑크림</div>
          </DetailText>
          <Price>
            <FaWonSign size={"20px"} />
            <span>6,800</span>
          </Price>
        </DetailContent>
        <TotalInfoWrapper>
          <TotalQuantity>
            총 수량 <span>{3}</span> 개
          </TotalQuantity>
          <TotalPrice>
            총 결제금액 <span>{(6, 800)}</span>원
          </TotalPrice>
        </TotalInfoWrapper>
      </TopArea>
    </Container>
  );
};

export default OrderDetail;

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

const DetailContent = styled.div`
  line-height: 18px;

  display: flex;
  span {
    font-size: 20px;
    font-weight: bold;
    color: black;
    margin-bottom: 0.5rem;
  }
  div {
    font-size: 13px;
    color: #898888;
  }
`;
const Header = styled.div`
  font-size: 25px;
  opacity: 0.7;
  display: flex;
  color: #1b3c35;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  margin-bottom: 4rem;
`;
const DetailText = styled.div``;
const Price = styled.span`
  display: flex;
  justify-content: center;
  font-size: 20px;
  padding-left: 30rem;
`;
