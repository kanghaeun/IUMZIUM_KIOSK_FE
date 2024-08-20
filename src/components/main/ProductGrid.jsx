import { useState } from "react";
import styled from "styled-components";
import ProductModal from "../modal/ProductModal";
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
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <Grid>
        {products.map((product, index) => (
          <ProductCard key={index} onClick={() => handleProductClick(product)}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price}</ProductPrice>
          </ProductCard>
        ))}
      </Grid>
      <ProductModal
        isOpen={!!selectedProduct}
        onClose={closeModal}
        product={selectedProduct}
      />
    </>
  );
};

export default ProductGrid;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 155px);
  gap: 14px;
  justify-content: center;
  margin-bottom: 60px;
  margin-top: 100px;
`;

const ProductCard = styled.div`
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
