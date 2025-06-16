import Header from "../src/components/Header/index";
import Footer from "./components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen select-none">
      <Header />
      <main className="bg-slate-50">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
