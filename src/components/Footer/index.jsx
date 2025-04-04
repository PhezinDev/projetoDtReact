import { Facebook, Instagram, Twitter, ArrowUp } from "lucide-react";

const Footer = () => {
  // Função para rolar para o topo da página
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="fixed bottom-0 w-full bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Meu Site. Todos os direitos reservados.</p>

        {/* Ícones de Redes Sociais */}
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-gray-400 transition">
            <Facebook size={24} />
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            <Instagram size={24} />
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            <Twitter size={24} />
          </a>
        </div>

        {/* Botão "Voltar ao Topo" */}
        <button
          onClick={scrollToTop}
          className="mt-4 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-full flex items-center mx-auto transition"
        >
          <ArrowUp size={20} className="mr-2" /> Topo
        </button>
      </div>
    </footer>
  );
};

export default Footer;