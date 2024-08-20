import styled from "styled-components";

const ProductModal = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ProductImage src={product.image} alt={product.name} />
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.price}</ProductPrice>
        {/* 여기에 추가적인 상품 정보를 넣을 수 있습니다 */}
      </ModalContent>
    </ModalOverlay>
  );
};

export default ProductModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 670px;
  height: 750px;
  box-shadow: 3px 3px 7px 7px rgba(55, 55, 55, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 80%;
  height: auto;
  margin-bottom: 20px;
`;

const ProductName = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProductPrice = styled.div`
  font-size: 20px;
  color: #333;
`;
