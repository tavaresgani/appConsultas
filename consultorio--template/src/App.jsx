import React from "react";
import { BrowserRouter, Route, Routes, Link as RouterLink } from "react-router-dom"
import AgendarConsultas from "./components/ListarConsultas";
import CadastrarMedicos from "./components/CadastrarMedicos";
import ListarConsultas  from "./components/ListarConsultas";
import { Box, Button } from "@mui/material"

function App(){
    return(
      <ConsultasProvider>
        <BrowserRouter>
          <Box
           display="flex"
           flexDirection="column"
           alignItems="center"
           style={{minHeight: '100vh', textAlign: 'center'}}>
            <nav>
              <Button
              componente={RouterLink}
              to="/cadastrar"
              variant="contained"
              color="primary"
              style={{marginRight:'10px'}}
              >
                Registrar Médico
              </Button>
           
              <Button
              componente={RouterLink}
              to="/agendar"
              variant="contained"
              color="primary"
              style={{marginRight:'10px'}}
              >
                Agendar Consultas
              </Button>
           
              <Button
              componente={RouterLink}
              to="/cadastrar"
              variant="contained"
              color="primary"
              style={{marginRight:'10px'}}
              >
                Listar Consultas
              </Button>
            </nav>
            <Routes>
                <Route path="/cadastrar" element={<CadastrarMedicos/>} />
                <Route path="/agendar" element={<AgendarConsultas/>} />
                <Route path="/listar" element={<ListarConsultas/>} />
            </Routes>
            </Box>
        </BrowserRouter>
        </ConsultasProvider>

    );
}

export default App;