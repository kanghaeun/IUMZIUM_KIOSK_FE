import styled, { css } from "styled-components";
import Container from "../components/common/Container";
import { useState } from "react";
import ShoppingCart from "../components/shoppingcart/ShoppingCart";

function App() {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };
  return (
    <Container>
      <CategoryContainer>
        <Category
          isActive={activeCategory === "coffee"}
          onClick={() => handleCategoryClick("coffee")}
        >
          커피
        </Category>
        <Category
          isActive={activeCategory === "tea"}
          onClick={() => handleCategoryClick("tea")}
        >
          차
        </Category>
        <Category
          isActive={activeCategory === "ade"}
          onClick={() => handleCategoryClick("ade")}
        >
          에이드
        </Category>
        <Category
          isActive={activeCategory === "decaf"}
          onClick={() => handleCategoryClick("decaf")}
        >
          디카페인
        </Category>
      </CategoryContainer>
      <ShoppingCart />
    </Container>
  );
}

export default App;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Category = styled.div`
  flex: 1;
  text-align: center;
  padding: 10px;
  font-size: 25px;
  background-color: white;
  color: black;
  cursor: pointer;
  ${({ isActive }) =>
    isActive &&
    css`
      border-bottom: 2px solid black;
    `}
`;
