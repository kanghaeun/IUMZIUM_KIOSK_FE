// src/components/Category.js
import { useState } from "react";
import styled, { css } from "styled-components";

const categories = [
  { id: "coffee", name: "커피" },
  { id: "tea", name: "차" },
  { id: "ade", name: "에이드" },
  { id: "decaf", name: "디카페인" },
];

const Category = () => {
  const [activeCategory, setActiveCategory] = useState("coffee");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <CategoryContainer>
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          isActive={activeCategory === category.id}
          onClick={() => handleCategoryClick(category.id)}
        >
          {category.name}
        </CategoryItem>
      ))}
    </CategoryContainer>
  );
};

export default Category;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 72px;
`;

const CategoryItem = styled.div`
  flex: 1;
  text-align: center;
  padding: 10px;
  font-size: 25px;
  background-color: white;
  color: black;
  cursor: pointer;
  position: relative;

  ${({ isActive }) =>
    isActive &&
    css`
      font-weight: bold;
      color: #1b3c35;

      &::after {
        content: "";
        position: absolute;
        bottom: -13px;
        left: 50%;
        transform: translateX(-50%);
        width: 90%;
        height: 2px;
        background-color: #1b3c35;
      }
    `}
`;
