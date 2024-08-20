import Container from "../components/common/Container";
import TopArea from "../components/main/TopArea";
import VoiceArea from "../components/main/VoiceArea";
import styled from "styled-components";

const ReceiptPage = () => {
  return (
    <Container>
      <TopArea>
        <Title>
          <StyledText> AICOSS 산학 연계 해커톤점 </StyledText>에서
          <br />
          <StyledOrderCompleted>주문완료 되었습니다</StyledOrderCompleted>
        </Title>
        <ReceiptImage src="/receipt.png" alt="영수증 이미지" />
      </TopArea>
      <VoiceArea />
    </Container>
  );
};

export default ReceiptPage;

const Title = styled.div`
  font-size: 32px;
`;

const StyledText = styled.span`
  font-size: 32px;
  font-weight: 700;
  color: #1b3c35; // 색상 설정
`;

const StyledOrderCompleted = styled.span`
  margin-top: 15px;
  display: block;
  font-size: 65px;
  font-weight: 500;
`;

const ReceiptImage = styled.img`
  width: 95%;
  height: 620px;
  margin-top: 68px;
  margin-left: 3%;
`;
