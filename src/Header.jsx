import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center px-8 py-5 border-b border-gray-300 bg-white">
      <h1 className="text-xl font-light tracking-wide uppercase">JM Photography</h1>
      <nav className="flex space-x-8">
        {["About", "Gallery", "Contact"].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            className="relative text-lg font-light tracking-wide text-gray-600 transition-all duration-300 hover:text-black"
          >
            {item}
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all duration-300 ease-in-out hover:w-full"></span>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
