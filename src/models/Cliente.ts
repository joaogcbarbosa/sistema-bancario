export class Cliente {
    constructor(
        private readonly nome: string,
        private readonly cpf: string
    ) {}

    getNome(): string {
        return this.nome;
    }

    getCpf(): string {
        return this.cpf;
    }
}
