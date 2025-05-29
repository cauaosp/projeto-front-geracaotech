import AppSidebar from "@/components/Header/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "../src/components/Header/index";
import Footer from "./components/Footer";

const Layout = ({ children }) => {
  return (
    <SidebarProvider className="flex-col container h-screen overflow-auto">
      <AppSidebar />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer className="" />
    </SidebarProvider>
  );
};

export default Layout;
