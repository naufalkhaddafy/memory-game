import { useState } from "react";
import Card from "./components/Card";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { CardCollections } from "./utils";
import Timer from "./components/Timer";

function App() {
  const [cards, setCards] = useState(CardCollections);
  return (
    <>
      <Container>
        <Header />
        <div className="mt-20">
          <div className="mt-10 text-center font-mono font-bold text-xl">
            <Timer />
          </div>
          <div className="p-2 my-5 grid grid-cols-4 gap-2 justify-self-center place-items-center">
            {cards.map(() => (
              <Card />
            ))}
          </div>
        </div>
        <Footer />
      </Container>
    </>
  );
}

export default App;
