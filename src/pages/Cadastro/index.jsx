import { useRef } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
function Cadastro(){
    const nomeRef = useRef();
    const emailRef = useRef();
    const senhaRef = useRef();
    async function handleSubmit(e){
        e.preventDefault();

        try {
            await api.post('/cadastro', {
                nome: nomeRef.current.value,
                email: emailRef.current.value,
                senha: senhaRef.current.value
            })
            alert("Usuário cadastrado com sucesso")
        } catch (error) {
            alert(error,"Erro ao cadastrar usuário")
        }
    }
    return(
        <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Cadastro</h2>
            <form onSubmit={handleSubmit} action="" className="flex flex-col gap-4">
                <input ref={nomeRef} placeholder="Nome" type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" />
                <input ref={emailRef} placeholder="Email" type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                <input ref={senhaRef} placeholder="Senha" type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400">Cadastrar</button>

            </form>

            <Link to="/login" className="text-blue-700 hover:underline mt-4 block text-center">Já tem uma conta? Faça login</Link>
        </div>
    )

}

export default Cadastro;