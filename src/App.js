import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PrimarySearchAppBar from "./components/AppBar";
import Home from "./pages/Home";
import Tour from "./pages/Tour";

function App() {
  return (
    <BrowserRouter>
      <PrimarySearchAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Tour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
