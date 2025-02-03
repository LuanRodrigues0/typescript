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
    get saldo() {
        return this.SaldoConta;
    }
    set saldo(saldoContaParam) {
        this.SaldoConta = saldoContaParam;
    }
    deposito(valor) {
        if (valor < 0) {
            console.log("valor inválido");
            return;
        }
        this.saldo += valor;
    }
    saque(valor) {
        if (valor < 0) {
            console.log("valor inválido");
            return;
        }
        if (valor <= this.SaldoConta) {
            this.saldo -= valor;
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
    saque(valor) {
        if (valor > 1000) {
            console.log("Valor de saque muito grande para essa conta");
        }
        else {
            super.saque(valor);
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
    saque(valor) {
        if (valor > 10000) {
            console.log("Valor de saque muito grande para essa conta");
        }
        else {
            super.saque(valor);
        }
    }
}
const cont1 = new ContaPF(9999, "Luan");
const cont2 = new ContaPJ(445455, "Test");
cont1.deposito(1000);
cont1.deposito(236);
cont1.deposito(444);
console.log(cont1.saldo);
