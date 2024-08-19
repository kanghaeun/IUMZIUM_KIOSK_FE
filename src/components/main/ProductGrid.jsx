// src/components/main/ProductGrid.js
import styled from "styled-components";

const products = [
  { name: "초코라떼", price: "₩ 6,800", image: "coffee.png" },
  { name: "초코라떼", price: "₩ 6,800", image: "coffee.png" },
  { name: "초코라떼", price: "₩ 6,800", image: "coffee.png" },
  { name: "초코라떼", price: "₩ 6,800", image: "coffee.png" },
  { name: "초코라떼", price: "₩ 6,800", image: "coffee.png" },
  { name: "초코라떼", price: "₩ 6,800", image: "coffee.png" },
  { name: "초코라떼", price: "₩ 6,800", image: "coffee.png" },
  { name: "초코라떼", price: "₩ 6,800", image: "coffee.png" },
];

const ProductGrid = () => {
  return (
    <Grid>
      {products.map((product, index) => (
        <ProductCard key={index}>
          <ProductImage src={product.image} alt={product.name} />
          <ProductName>{product.name}</ProductName>
          <ProductPrice>{product.price}</ProductPrice>
        </ProductCard>
      ))}
    </Grid>
  );
};

export default ProductGrid;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 190px);
  gap: 14px;
  justify-content: center;
  margin-bottom: 80px;
  margin-top: 80px;
`;

const ProductCard = styled.div`
  position: relative;
  width: 190px;
  height: 250px;
  background-color: #ffffff;
  border: 0.4px solid #2d2d2d;
  box-sizing: border-box;
  border-radius: 8px;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const ProductName = styled.div`
  position: relative;
  bottom: 20px;
  font-size: 18px;
`;

const ProductPrice = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 17px;
  color: #333;
`;
