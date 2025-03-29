import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Languages, Menu, X } from "lucide-react";
import { ShoppingCart } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <header className="bg-white shadow-md w-full sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-gray-900">
            ESS Shop
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-blue-500 hover:text-blue-100">
              Hi, Guest User
            </a>
            <Languages className="text-blue-500 hover:text-blue-100" />
            <ShoppingCart className="text-blue-500 hover:text-blue-100" />
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold">Menu</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>
              <nav className="flex flex-col space-y-4">
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
