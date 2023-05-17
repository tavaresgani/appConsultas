import React from "react";
import { BrowserRouter, Route, Routes, Link as RouterLink } from "react-router-dom"
import AgendarConsultas from "./components/ListarConsultas";
import CadastrarMedicos from "./components/CadastrarMedicos";
import ListarConsultas  from "./components/ListarConsultas";

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/cadastrar" element={<CadastrarMedicos/>} />
                <Route path="/agendar" element={<AgendarConsultas/>} />
                <Route path="/listar" element={<ListarConsultas/>} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;