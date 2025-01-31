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
        if (valor < 0) {
            console.log("valor inválido");
            return;
        }
        this.SaldoConta += valor;
    }
    saque(valor) {
        if (valor < 0) {
            console.log("valor inválido");
            return;
        }
        if (valor <= this.SaldoConta) {
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
cont1.saque(680);
console.log(cont1.saldo());
