import './App.css'
import React, { useState } from "react";
import { ContaBancaria } from './models/ContaBancaria';

const conta = new ContaBancaria("Maria", 1000);

const App: React.FC = () => {
  const [valor, setValor] = useState<string>("");
  const [mensagem, setMensagem] = useState<string>("");
  const [saldo, setSaldo] = useState<string>(conta.consultarSaldo());

 
const handleDeposito = () => {
  const numero = Number(valor);
  const resultado = conta.depositar(numero);
  setMensagem(resultado);
  setSaldo(conta.consultarSaldo());
};

const handleSaque = () => {
  const numero = Number(valor);
  const resultado = conta.sacar(numero);
  setMensagem(resultado);
  setSaldo(conta.consultarSaldo());
};


  return (
    <div style={{ padding: "20px" }}>
      <h2>🏦 Conta Bancária</h2>
      <p>{saldo}</p>

     <input
  type="number"
  value={valor}
  onChange={(e) => setValor(e.target.value)}
  placeholder="Digite o valor"
  style={{ padding: "8px", fontSize: "16px", width: "200px" }}
/>

      <div style={{ marginTop: "10px" }}>
        <button onClick={handleDeposito}>Depositar</button>
        <button onClick={handleSaque}>Sacar</button>
      </div>

      <p style={{ marginTop: "20px", fontWeight: "bold" }}>{mensagem}</p>
    </div>
  );
};

export default App;