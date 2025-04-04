import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import PaginaInicial from "./pages/Inicial"
import Cadastro from "./pages/Cadastro"
import Login from "./pages/Login"
import ListarUsuarios from "./pages/Lista"
import Teste from "./pages/Teste"
import Menu from "./components/Menu"
import Footer from "./components/Footer"


function App() {
  return (
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path="/" element={<PaginaInicial/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/listar-usuarios" element={<ListarUsuarios/>} />
        <Route path="teste" element={<Teste/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
