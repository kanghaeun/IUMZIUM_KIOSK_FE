import styled from "styled-components";

const VoiceArea = () => {
  return (
    <VoiceContainer>
      <Tone src="/voice.png" alt="Voice Icon" />
      <Voice>원하시는 메뉴를 말씀해 주시면 주문 도와드리겠습니다.</Voice>
    </VoiceContainer>
  );
};

export default VoiceArea;

const VoiceContainer = styled.div`
  text-align: center; /* 가운데 정렬 */
  margin-top: 30px;
`;

const Voice = styled.div`
  font-size: 26px;
  font-weight: 100;
  color: #fff;
  margin-top: 30px;
`;

const Tone = styled.img`
  height: auto;
  width: 300px;
  display: block; /* 이미지를 block 요소로 설정 */
  margin: 70px auto 50px auto; /* 좌우 가운데 정렬 및 위쪽 마진 */
`;
