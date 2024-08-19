import Container from "../components/common/Container";
import Category from "../components/main/Category";
import ProductGrid from "../components/main/ProductGrid";
import Voice from "../components/main/Voice";

function App() {
  return (
    <>
      <Container>
        <Category />
        <ProductGrid />
      </Container>
      <Voice />
    </>
  );
}

export default App;
