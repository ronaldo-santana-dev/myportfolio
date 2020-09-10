import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home.jsx';
import QuemSou from './pages/quem-sou/QuemSou.jsx';
import Especialidades from './pages/especialidades/Especialidades.jsx'
import Projetos from './pages/projetos/Projetos.jsx'
import Contato from './pages/contato/Contato.jsx'
import Erro from './pages/error/Erro.jsx'
const routes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/quem-sou' element={<QuemSou />} />
                <Route path='/especialidades' element={<Especialidades />} />
                <Route path='/projetos' element={<Projetos />} />
                <Route path='/contato' element={<Contato />} />
                <Route path='*' element={<Erro />} /> 
                
            </Routes>
        </BrowserRouter>
    )
}

export default routes;