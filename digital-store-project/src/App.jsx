import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";
import ProductViewPage from "./pages/ProductViewPage";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/productlist" element={<ProductListingPage />} />
            <Route path="/productview" element={<ProductViewPage />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
