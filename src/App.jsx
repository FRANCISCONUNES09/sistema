import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Loginpage from './pages/Login'
import Cadastropage from './pages/Cadastro'


export default function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Loginpage />} />
      <Route path='/cadastro' element={<Cadastropage />} />
      </Routes>
    </BrowserRouter>
  )
}