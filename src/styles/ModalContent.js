import styled from "styled-components";

export const ModalOverlay = styled.div`
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

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 670px;
  height: 750px;
  box-shadow: 3px 3px 7px 7px rgba(55, 55, 55, 0.5);
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  background-color: #f4f4f4;
  height: 78px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  margin: 0;
  font-weight: 500;
  color: #485d59;
`;

export const ModalBody = styled.div`
  flex: 1;
  padding: 80px;
  overflow-y: auto;
`;

export const ModalFooter = styled.div`
  padding: 0 80px 50px 80px;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  padding: ${(props) => props.padding || "10px 20px"};
  font-size: 16px;
  cursor: pointer;
  background-color: ${(props) => props.backgroundColor || "#f0f0f0"};
  border: none;
  border-radius: 4px;
  color: ${(props) => props.color || "black"};
`;
