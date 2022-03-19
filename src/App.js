import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mailcontent from "./Components/Mailcontent/Mailcontent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mailcontent" element={<Mailcontent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
