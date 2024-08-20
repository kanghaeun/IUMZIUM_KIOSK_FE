import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 155px);
  gap: 14px;
  justify-content: center;
  margin-bottom: 60px;
  margin-top: 100px;
`;

export const ProductCard = styled.div`
  position: relative;
  width: 155px;
  height: 205px;
  background-color: #ffffff;
  border: 0.4px solid #2d2d2d;
  box-sizing: border-box;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

export const ProductName = styled.div`
  position: relative;
  bottom: 20px;
  font-size: 18px;
`;

export const ProductPrice = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 17px;
  color: #333;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  font-size: 20px;
  background-color: #f0f0f0;
  border: none;
  cursor: pointer;
`;

export const QuantityDisplay = styled.div`
  width: 40px;
  text-align: center;
  font-size: 18px;
`;

export const OptionSection = styled.div`
  margin-bottom: 20px;
`;

export const OptionTitle = styled.h3`
  margin-bottom: 10px;
`;

export const OptionButton = styled.button`
  margin-right: 10px;
  padding: 5px 10px;
  background-color: ${(props) => (props.selected ? "#2196F3" : "#f0f0f0")};
  color: ${(props) => (props.selected ? "white" : "black")};
  border: none;
  cursor: pointer;
`;
