import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import ProductListInPage from "./pages/ProductListInPage";
import ProductViewPage from "./pages/ProductViewPage";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/productlist" element={<ProductListInPage />} />
            <Route path="/productview" element={<ProductViewPage />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
