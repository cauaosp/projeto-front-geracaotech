import AppSidebar from "@/components/Header/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "../src/components/Header/index";
import Footer from "./components/Footer";

const Layout = ({ children }) => {
  return (
    <SidebarProvider className="flex flex-col h-screen select-none">
      <AppSidebar />
      <Header />
      <main>{children}</main>
      <Footer />
    </SidebarProvider>
  );
};

export default Layout;
