import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/common/Container";
import Category from "../components/main/Category";
import ProductGrid from "../components/main/ProductGrid";
import TopArea from "../components/main/TopArea";
import ShoppingCart from "../components/shoppingcart/ShoppingCart";
import VoiceArea from "../components/main/VoiceArea";
import ProductModal from "../components/modal/ProductModal";
import OrderDetailContent from "../components/modal/OrderDetailContent";
import {
  calculateTotalQuantity,
  calculateTotalPrice,
} from "../utils/calculateTotal";
import styled from "styled-components";

function App() {
  const navigate = useNavigate();
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [orderType, setOrderType] = useState("");
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("coffee");
  const [orderImg, setOrderImg] = useState("");
  const [apiUrl, setApiUrl] = useState("");

  const onClickImg = (selectImg) => {
    setOrderImg(selectImg);
  };

  useEffect(() => {
    fetchProducts();
  }, [apiUrl, activeCategory]);

  const fetchProducts = async () => {
    try {
      let url;
      if (apiUrl) {
        url = apiUrl;
        // Extract category from apiUrl and update activeCategory
        const urlParams = new URLSearchParams(new URL(apiUrl).search);
        const category = urlParams.get("category");
        if (category) {
          setActiveCategory(category);
        }
      } else {
        url = `https://52.78.120.182.nip.io/api/drink/?category=${activeCategory}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setApiUrl(""); // Reset apiUrl when category changes manually
  };

  const handleShowOrderDetails = () => {
    setShowOrderDetails(true);
  };

  const handleCloseOrderDetails = () => {
    setShowOrderDetails(false);
  };

  const handlePayment = () => {
    handleClosePaymentModal();
    navigate("/receipt");
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

  const handleSpeechComplete = (text, api) => {
    if (api) {
      setApiUrl(api);
    }
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
      name: "카페라떼",
      price: "₩ 5,000",
      options: ["HOT", "Tall", "바닐라 시럽"],
      quantity: 1,
    },
  ];

  const totalQuantity = calculateTotalQuantity(sampleOrderDetails);
  const totalPrice = calculateTotalPrice(sampleOrderDetails);

  return (
    <>
      <Container>
        <TopArea>
          <Category
            onCategoryChange={handleCategoryChange}
            activeCategory={activeCategory}
          />
          <ProductGrid products={products} />
          {/*<ShoppingCart
            onCheckout={handleShowOrderDetails}
            onClickImg={onClickImg}
          />*/}
        </TopArea>
        <VoiceArea onSpeechComplete={handleSpeechComplete} />
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
              marginRight: "-46px",
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
        <OrderDetailContent details={sampleOrderDetails} />
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
            label: "승인 요청",
            onClick: handlePayment,
            style: {
              backgroundColor: "#729F96",
              color: "white",
              padding: "20px 84px",
              fontSize: "20px",
              fontWeight: "bold",
            },
          },
        ]}
      >
        <div>
          <CardImage src="/card.png"></CardImage>
          <TotalInfoWrapper>
            <TotalQuantity>
              총 수량 <span>{totalQuantity}</span> 개
            </TotalQuantity>
            <TotalPrice>
              총 결제금액 <span>{totalPrice.toLocaleString()}</span>원
            </TotalPrice>
          </TotalInfoWrapper>
        </div>
      </ProductModal>
    </>
  );
}

const TotalInfoWrapper = styled.div`
  position: absolute;
  margin-top: 71px;
  margin-left: 315px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const TotalQuantity = styled.div`
  font-size: 20px;
  margin-bottom: 15px;

  span {
    font-weight: bold;
    color: #1b3c35;
    margin: 0 8px;
  }
`;

const TotalPrice = styled.div`
  font-size: 20px;
  color: #333;

  span {
    font-weight: bold;
    color: #1b3c35;
    margin: 0 8px;
  }
`;

const CardImage = styled.img`
  width: 430px;
  height: auto;
  margin-left: 40px;
`;

export default App;
