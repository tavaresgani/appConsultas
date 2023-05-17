import React, { useContext, useState } from "react";
import { Container, Box, Card, Button, TextField } from "@mui/material"
import { ConsultasContext } from "../../context/ConsultasContext";

export default function CadastrarMedicos(){

    const {adicionarDoutor} = useContext(ConsultasContext)
    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        adicionarDoutor!({nome, email, telefone})
    }
    return (
        <Container maxWidth="sm">
            <Box 
             display="flex"
             justifyContent="center"
             alignItems="center"
             minHeight="100vh"
              >
                <Card elevation={3} sx={{padding: 4, borderRadius:2}}>
                    <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection:'column', gap:'10px'}}>
                        <TextField
                            label="Nome"
                            type="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                          />

                           <TextField
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />

                           <TextField
                            label="Telefone"
                            type="tel"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                          />
                        <Button type="submit">
                            Enviar

                        </Button>
                    </form>

                </Card>
            </Box>
        </Container>
    )
}