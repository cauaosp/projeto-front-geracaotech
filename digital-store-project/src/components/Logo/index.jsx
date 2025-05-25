const Logo = () => {
  return (
    <div className="flex items-center gap-4">
      {/* Versão Desktop */}
      <div className="hidden md:flex items-center gap-2">
        <img src="./Logo.svg" alt="logo" className="h-8 w-8" />
        <div className="text-2xl font-bold text-primary">Digital Store</div>
      </div>

      {/* Versão Mobile */}
      <div className="flex md:hidden items-center gap-2">
        <img src="./Logo.svg" alt="logo" className="h-8 w-8" />
        <div className="text-xl font-bold text-primary">Digital Store</div>
      </div>
    </div>
  );
};

export default Logo;
