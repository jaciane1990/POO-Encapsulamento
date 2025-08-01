import './App.css'
import React, { useState } from "react";
import { ContaBancaria } from './models/ContaBancaria';

const conta = new ContaBancaria("Jaciane", 0);

const App: React.FC = () => {
  const [valor, setValor] = useState<string>("");
  const [mensagem, setMensagem] = useState<string>("");
  const [saldo, setSaldo] = useState<string>(conta.consultarSaldo());

 
const handleDeposito = () => {
  const numero = Number(valor);
  if (isNaN(numero) || numero <= 0) {
    setMensagem("Digite um valor válido para depositar.");
    return;
  }
  const resultado = conta.depositar(numero);
  setMensagem(resultado);
  setSaldo(conta.consultarSaldo());
};

const handleSaque = () => {
  const numero = Number(valor);
  if (isNaN(numero) || numero <= 0) {
    setMensagem("Digite um valor válido para sacar.");
    return;
  }
  const resultado = conta.sacar(numero);
  setMensagem(resultado);
  setSaldo(conta.consultarSaldo());
};



  return (
    <div style={{ 
      padding: "20px",
      color: "blue",
      }}>
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

      <p style={{ 
        marginTop: "20px", 
        fontWeight: "bold", 
        color: "red",
        backgroundColor: "#fef2f2",  // fundo suave
        borderRadius: "8px",
        fontFamily: "Segoe UI, sans-serif",
        fontSize: "15px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        transition: "opacity 0.3s ease-in-out"

        }}>⚠️{mensagem}</p>
    </div>
)}

export default App;