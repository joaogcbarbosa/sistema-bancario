import { Cliente } from "./Cliente.js";

export class ContaCorrente {

    private agencia: string = "0001";
    private saldo: number = 0;

    constructor(
        private readonly cliente: Cliente
    ) {}

    getAgencia(): string {
        return this.agencia;
    }

    setAgencia(novaAgencia: string): void {
        this.agencia = novaAgencia;
    }

    getSaldo(): number {
        return this.saldo;
    }

    getCliente(): Cliente {
        return this.cliente;
    }

    depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
        }
    }

    sacar(valor: number): void {
        if (valor <= this.getSaldo()) {
            this.saldo -= valor;
        }
    }

    transferir(valor: number, conta: ContaCorrente): void {
        this.sacar(valor);
        conta.depositar(valor);
    }

}
