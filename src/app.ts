import { Cliente } from "./models/Cliente.js";
import { ContaCorrente } from "./models/ContaCorrente.js";


const cliente1 = new Cliente("João", "99999999999");
const cliente2 = new Cliente("User", "11111111111");

const conta1 = new ContaCorrente(cliente1);
const conta2 = new ContaCorrente(cliente2);

conta1.depositar(100);
console.log(conta1.getSaldo());

conta1.transferir(50, conta2);
console.log(conta1.getSaldo());
console.log(conta2.getSaldo());
