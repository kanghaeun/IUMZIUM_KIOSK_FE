// src/pages/App.js
import Container from "../components/common/Container";
import Category from "../components/main/Category";
import ProductGrid from "../components/main/ProductGrid";

function App() {
  return (
    <Container>
      <Category />
      <ProductGrid />
    </Container>
  );
}

export default App;
