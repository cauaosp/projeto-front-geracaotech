const Layout = ({ children }) => {
  return (
    <div>
      <h1 className="absolute top-0 bg-blue h-fit w-fit">MENUS</h1>
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
