import React, { useState } from "react"
import Button from "../Button";
import Container from "../Container";
import Input from "../Input";
import { FiSearch } from "react-icons/fi"
import CepResult from "../CepResult";
import "./index.css"
import api from "../../services/api"

function App() {

  const [cep, setCep] = useState({});

  const [input, setInput] = useState("");

  const alertInput = async () => {
    if(input === '') {
        alert("Preencha algum CEP")
        return;
    }
    try {
        const {data} = await api.get(`${input}/json`)
        setCep(data)
        setInput("")
        return
    } catch {
        alert("Digite um CEP válido!")
        setInput('')
        return
    }

    } 
    return (
      <>
    <Container>
        <Input 
        className="FormInput"
        type="text"
        placeholder="  Digite seu CEP"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={() => alertInput()}><FiSearch size={25} color="#000" /></Button>
    </Container>
    {cep.cep ? (<CepResult cepp={cep.cep} Logradouro={cep.logradouro} Complemento={cep.complemento} Bairro={cep.bairro} Localidade={cep.localidade} UF={cep.uf} DDD={cep.ddd}/>) : (<div className="nonResult"><h2>Aguardando o CEP senhor.</h2></div>)}
    
    
    </>
  );
}

export default App;
