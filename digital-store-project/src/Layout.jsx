import AppSidebar from "@/components/Header/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "../src/components/Header/index";

const Layout = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <Header />
        {children}
        {/* <Footer /> */}
      </main>
    </SidebarProvider>
  );
};

export default Layout;
