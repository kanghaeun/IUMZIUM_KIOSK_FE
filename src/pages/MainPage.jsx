import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const MainPage = () => {
  return (
    <Container>
      <h1>Welcome to the Main Page</h1>
    </Container>
  );
};

export default MainPage;
