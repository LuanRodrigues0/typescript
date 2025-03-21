"use strict";
class Conta {
    numero;
    SaldoConta;
    titular;
    constructor(titular) {
        this.numero = this.GerarNumeroConta();
        this.titular = titular;
        this.SaldoConta = 0;
    }
    GerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`Titular:${this.titular}`);
        console.log(`Número:${this.numero}`);
    }
    saldo() {
        return this.SaldoConta;
    }
    deposito(valor) {
        this.SaldoConta += valor;
    }
    saque(valor) {
        if (valor >= this.SaldoConta) {
            this.SaldoConta -= valor;
        }
        else {
            console.log("Não foi possível sacar! saldo insuficiente.");
        }
    }
}
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
    info() {
        console.log("Tipo: PF");
        super.info();
        console.log(`CPF......${this.cpf}`);
        console.log("----------------------------");
    }
    deposito(valor) {
        if (valor > 1000) {
            console.log("Valor muito grande para esse tipo de conta");
        }
        else {
            super.deposito(valor);
        }
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
    }
    info() {
        console.log("Tipo: PJ");
        super.info();
        console.log(`CNPJ.....${this.cnpj}`);
        console.log("----------------------------");
    }
    deposito(valor) {
        if (valor > 10000) {
            console.log("Valor muito grande para esse tipo de conta");
        }
        else {
            super.deposito(valor);
        }
    }
}
const cont1 = new ContaPF(9999, "Luan");
const cont2 = new ContaPJ(445455, "Test");
cont1.deposito(1000);
cont1.deposito(236);
cont1.deposito(444);
console.log(cont1.saldo());
cont2.deposito(10000);
console.log(cont2.saldo());
