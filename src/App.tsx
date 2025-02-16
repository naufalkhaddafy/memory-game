import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MemoryGame from "./MemoryGame";

function App() {
  return (
    <>
      <Container>
        <Header />
        <MemoryGame />
        <Footer />
      </Container>
    </>
  );
}

export default App;
