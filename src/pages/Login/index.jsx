import { Link, useNavigate } from "react-router-dom"
import svg from "/public/login-animate.svg"

export default function Loginpage(){
    const navigate = useNavigate()

    return (
       <div className="w-full h-screen flex">
        <div className="w-[40%] h-full flex items-center justify-center">
           <Link to="/cadastro">Cadastrar</Link>
           <button
           onclick={() => navigate("/cadastro")}
           >Cadastrar</button>
           <button
            onclick={() => window.location.href = "/cadastro"} 
            >
            Cadastrar
            </button>
        </div>
        <div className="w-[60%] h-full flex bg-[#6366EE] items-center justify-center rounded-l-lg flex-col">
            <img width={600} src={svg} alt="imagem-animda" />
            <p className="text-white font-bold w-[300px] text-[20px] text-center">A melhor experiencia de login que você já teve na sua vida</p>
        </div>
       </div>
    )
}