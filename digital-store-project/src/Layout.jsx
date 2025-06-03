import AppSidebar from "@/components/Header/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "../src/components/Header/index";
import Footer from "./components/Footer";

const Layout = ({ children }) => {
  return (
    <SidebarProvider className="flex-col container h-screen">
      <AppSidebar />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </SidebarProvider>
  );
};

export default Layout;
