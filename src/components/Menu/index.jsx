import { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react"; // Ícones do menu hambúrguer

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado do menu

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">Digiteam</h1>

        {/* Ícone do Menu para telas pequenas */}
        <button 
          className="md:hidden p-2 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <MenuIcon size={28} />} {/* Alterna ícone */}
        </button>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="/" className="hover:text-gray-400 transition">Home</a></li>
          <li><a href="/cadastro" className="hover:text-gray-400 transition">Cadastro</a></li>
          <li><a href="/login" className="hover:text-gray-400 transition">Login</a></li>
          <li><a href="#" className="hover:text-gray-400 transition">Contato</a></li>
        </ul>
      </div>

      {/* Menu Mobile (aparece quando isOpen = true) */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 p-4 flex flex-col space-y-4 text-center">
          <li><a href="#" className="hover:text-gray-400 transition">Home</a></li>
          <li><a href="#" className="hover:text-gray-400 transition">Sobre</a></li>
          <li><a href="#" className="hover:text-gray-400 transition">Serviços</a></li>
          <li><a href="#" className="hover:text-gray-400 transition">Contato</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Menu;