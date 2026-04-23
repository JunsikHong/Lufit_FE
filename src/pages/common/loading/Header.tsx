const Header = () => {
  return (
    <header className="w-full h-20 border-b border-gray-200 bg-white flex items-center justify-between px-6">
      <div className="flex items-center">
        <div className="h-6 w-24 bg-gray-200 rounded-md animate-pulse" />
      </div>
      <div className="flex items-center gap-5">
        <div className="h-10 w-10 bg-gray-200 rounded-full animate-pulse" />
        <div className="h-10 w-10 bg-gray-200 rounded-full animate-pulse" />
      </div>
    </header>
  );
};

export default Header;