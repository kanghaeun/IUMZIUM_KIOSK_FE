import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/common/Container";
import Category from "../components/main/Category";
import ProductGrid from "../components/main/ProductGrid";
import TopArea from "../components/main/TopArea";
import ShoppingCart from "../components/shoppingcart/ShoppingCart";
import VoiceArea from "../components/main/VoiceArea";
import ProductModal from "../components/modal/ProductModal";
import OrderDetailsContent from "../components/modal/OrderDetailContent";

function App() {
  const navigate = useNavigate();
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [orderType, setOrderType] = useState("");

  const handleShowOrderDetails = () => {
    setShowOrderDetails(true);
  };

  const handleCloseOrderDetails = () => {
    setShowOrderDetails(false);
  };

  const handlePayment = () => {
    handleClosePaymentModal();
    navigate("/receipt"); // ReceiptPage로 이동
  };

  const handleShowPaymentModal = (type) => {
    setOrderType(type);
    setShowOrderDetails(false);
    setShowPaymentModal(true);
  };

  const handleClosePaymentModal = () => {
    setShowPaymentModal(false);
    setShowOrderDetails(true);
  };

  // 임의의 주문 상세 정보 데이터
  const sampleOrderDetails = [
    {
      name: "아메리카노",
      price: "₩ 4,500",
      options: ["ICE", "Grande", "샷 추가"],
      quantity: 2,
    },
    {
      name: "카페라떼",
      price: "₩ 5,000",
      options: ["HOT", "Tall", "바닐라 시럽"],
      quantity: 1,
    },
    {
      name: "카푸치노",
      price: "₩ 5,500",
      options: ["HOT", "Venti"],
      quantity: 1,
    },
  ];

  return (
    <>
      <Container>
        <TopArea>
          <Category />
          <ProductGrid />
          <ShoppingCart onCheckout={handleShowOrderDetails} />
        </TopArea>
        <VoiceArea />
      </Container>
      <ProductModal
        isOpen={showOrderDetails}
        onClose={handleCloseOrderDetails}
        title="주문 세부내역"
        buttons={[
          {
            label: "닫기",
            onClick: handleCloseOrderDetails,
            style: {
              backgroundColor: "#C5C7C9",
              color: "white",
              padding: "20px 100px",
              fontSize: "20px",
              fontWeight: "bold",
            },
          },
          {
            label: "매장",
            onClick: () => handleShowPaymentModal("매장"),
            style: {
              backgroundColor: "#729F96",
              color: "white",
              padding: "20px 40px",
              fontSize: "20px",
              fontWeight: "bold",
              marginRight: "10px",
            },
          },
          {
            label: "포장",
            onClick: () => handleShowPaymentModal("포장"),
            style: {
              backgroundColor: "#729F96",
              color: "white",
              padding: "20px 40px",
              fontSize: "20px",
              fontWeight: "bold",
            },
          },
        ]}
      >
        <OrderDetailsContent details={sampleOrderDetails} />
      </ProductModal>
      <ProductModal
        isOpen={showPaymentModal}
        onClose={handleClosePaymentModal}
        title="카드결제"
        buttons={[
          {
            label: "이전",
            onClick: handleClosePaymentModal,
            style: {
              backgroundColor: "#C5C7C9",
              color: "white",
              padding: "20px 100px",
              fontSize: "20px",
              fontWeight: "bold",
            },
          },
          {
            label: "결제",
            onClick: handlePayment,
            style: {
              backgroundColor: "#729F96",
              color: "white",
              padding: "20px 100px",
              fontSize: "20px",
              fontWeight: "bold",
            },
          },
        ]}
      >
        <div>
          <p>{orderType} 주문입니다.</p>
          <p>카드결제 내용</p>
        </div>
      </ProductModal>
    </>
  );
}

export default App;
