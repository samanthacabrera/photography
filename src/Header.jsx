const Header = () => {
  return (
    <header className="fixed w-full flex justify-between items-center px-8 py-5 border-b border-gray-300 bg-white z-10">
       <h1 className="text-xl font-light tracking-wide uppercase">
        <a href="#" className="transition-opacity duration-300 hover:opacity-70">
          JM Photography
        </a>
      </h1>
      <nav className="flex space-x-8">
        {["About", "Gallery"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative text-lg font-light tracking-wide transition-all duration-300 hover:opacity-70"
          >
            {item}
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all duration-300 ease-in-out hover:w-full"></span>
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
