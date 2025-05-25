const Logo = () => {
  return (
    <div>
      {/* Versão Desktop */}
      <div className="hidden md:flex items-center gap-2">
        <img src="./Logo.svg" alt="logo" className="h-8 w-8" />
        <div className="text-4xl font-bold text-primary">Digital Store</div>
      </div>

      {/* Versão Mobile */}
      <div className="flex md:hidden items-center gap-3">
        <img src="./Logo.svg" alt="logo" className="h-6 w-6" />
        <div className="text-2xl font-bold text-primary">Digital Store</div>
      </div>
    </div>
  );
};

export default Logo;
