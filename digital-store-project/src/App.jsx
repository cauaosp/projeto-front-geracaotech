import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductListInPage from "./pages/ProductListInPage";
import ProductViewPage from "./pages/ProductViewPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productlist" element={<ProductListInPage />} />
          <Route path="/productview" element={<ProductViewPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
