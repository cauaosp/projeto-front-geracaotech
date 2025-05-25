import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Header from "../src/components/Header/index";
import AppSidebar  from "@/components/Logo/app-sidebar"

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
