import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { DetailPokemon } from "./pages/DetailPokemon";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:id" element={<DetailPokemon />} />
      </Routes>
    </>
  );
}

export default App;
