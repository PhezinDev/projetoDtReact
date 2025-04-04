function PaginaInicial() {
    return(
        <main className="flex-grow flex items-center justify-center text-center p-10 mt-16">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Bem-vindo ao Meu Site</h1>
          <p className="text-gray-600 text-lg mb-6">
            Este é um exemplo de uma página inicial moderna e responsiva.
          </p>
          <a href="#"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition">
            Saiba Mais
          </a>
        </div>
      </main>
    )
}

export default PaginaInicial;