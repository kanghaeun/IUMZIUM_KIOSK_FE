import styled from "styled-components";
const Container = styled.div`
  width: 820px; /* iPad Air 논리 해상도 (가로) */
  height: 1180px; /* iPad Air 논리 해상도 (세로) */
  background-color: #1b3c35;
  /* border: 1px solid #ccc; */
  margin: 0 auto;
  position: fixed; // relative 대신 fixed 사용
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  touch-action: none; // 터치 스크롤 방지
`;

export default Container;
