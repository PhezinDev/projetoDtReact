import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
function Login(){
    const emailRef = useRef();
    const senhaRef = useRef();
    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();

        try {
           const { data:token } = await api.post('/login', {
                email: emailRef.current.value,
                senha: senhaRef.current.value
            })
            localStorage.setItem('token', token)
            console.log(token)
            navigate('/listar-usuarios')
        } catch (error) {
            alert(error,"Senha ou email incorretos")
        }
   
    }

    return(
        <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
            <form onSubmit={handleSubmit} action="" className="flex flex-col gap-4">
                <input ref={emailRef} placeholder="Email" type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                <input ref={senhaRef} placeholder="Senha" type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400">Login</button>

            </form>

            <Link to="/" className="text-blue-700 hover:underline mt-4 block text-center">Não tem uma conta? Cadastre-se</Link>
        </div>
    )

}

export default Login;