import Container from "../components/common/Container";
import Category from "../components/main/Category";
import ProductGrid from "../components/main/ProductGrid";
import TopArea from "../components/main/TopArea";

function App() {
  return (
    <>
      <Container>
        <TopArea>
          <Category />
          <ProductGrid />
        </TopArea>
      </Container>
    </>
  );
}

export default App;
