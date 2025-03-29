const Footer = () => {
  return (
    <div>
      {" "}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              Home
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Shop
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              About
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Blog
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
