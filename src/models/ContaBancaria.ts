export class ContaBancaria {
  private titular: string;
  private saldo: number;

  constructor(titular: string, saldoInicial: number = 0) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  // Função para visualizar o saldo
  consultarSaldo(): string {
    return `Saldo atual de ${this.titular}: R$ ${this.saldo.toFixed(2)}`;
  }

  // Função para fazer depósito
  depositar(valor: number): string {
    if (valor <= 0) {
      return "Valor de depósito inválido.";
    }
    this.saldo += valor;
    return `Depósito de R$ ${valor.toFixed(2)} realizado com sucesso.`;
  }

  // Função para fazer saque
  sacar(valor: number): string {
    if (valor <= 0) {
      return "Valor de saque inválido.";
    }
    if (valor > this.saldo) {
      return "Saldo insuficiente para realizar o saque.";
    }
    this.saldo -= valor;
    return `Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`;
  }
}

// Exemplo de uso
const minhaConta = new ContaBancaria("Maria", 1000);

console.log(minhaConta.consultarSaldo());
console.log(minhaConta.depositar(500));
console.log(minhaConta.sacar(300));
console.log(minhaConta.consultarSaldo());