import { Link, useNavigate } from "react-router-dom"
import svg from "/public/login-animate.svg"
import { FaRegUserCircle } from "react-icons/fa"

export default function Loginpage(){
    const navigate = useNavigate()

    return (
       <div className="w-full h-screen flex">
        <div className="w-[40%] h-full flex items-center justify-center ">
            <div className="w-[60%] h-[40%] p-[45px] flex justify-center flex-col">
                <h1 className="text-black font-bold text-[20px] w-full h-[60%] p-4 ">Faça seu LOGIN</h1>

                <label htmlFor="user" className="text-black">E-mail</label>
                <input type="usuario" id="user"className="w-full rounded-md p-[10px] text-black m-2 bg-gray-200" placeholder="user@gmail.com"/>

                <FaRegUserCircle />

                <label htmlFor="pass" className="text-black">senha</label>
                <input type="password" id="pass" className="w-full rounded-md p-[10px] text-black m-2 bg-gray-200" placeholder="Password"  />

                <div className="w-full flex justify-between p-2">
                <div className="w-full text-[15px] text-black"> 
                    <input type="checkbox" />
                    Lembra de mim
                </div>
                <div className=" w-full text-[15px] text-black">Esqueci minha senha</div>
                </div>
                     

                    <button type="submit" className="w-[250px] h-[70px] rounded-md text-white
                         bg-[#6366EE] cursor-pointer hover:bg-[#9A86F4]/80"> 
                                  Entrar
                    </button>

                    <p className="w-full h-full flex">Não tem conta ainda?<Link to="/cadastro" className="flex text-[#6366EE] font-bold pl-2">Cadastrar-se</Link></p>
            </div>
        </div>
        <div className="w-[60%] h-full flex bg-[#6366EE] items-center justify-center rounded-l-lg flex-col">
            <img width={600} src={svg} alt="imagem-animda" />
            <p className="text-white font-bold w-[300px] text-[20px] text-center">A melhor experiencia de login que você já teve na sua vida</p>
        </div>
       </div>
    )
}