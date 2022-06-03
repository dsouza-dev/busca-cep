import React from 'react'
import "./index.css"

const CepResult = ({cepp, Logradouro, Complemento, Bairro, Localidade, UF, DDD}) => {
  return (
    <div className='resultContainer'>
        <h2>Resultado</h2>
        <ul>
            <li>Cep: {cepp}</li>
            <li>Logradouro: {Logradouro}</li>
            <li>Complemento: {Complemento}</li>
            <li>Bairro: {Bairro}</li>
            <li>Localidade: {Localidade}</li>
            <li>UF: {UF}</li>
            <li>DDD: {DDD}</li>
        </ul>
    </div>
)}

export default CepResult;