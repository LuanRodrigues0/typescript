"use strict";
class Conta {
    numero;
    titular;
    constructor(titular) {
        this.numero = this.GerarNumeroConta();
        this.titular = titular;
    }
    GerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`Titular:${this.titular}`);
        console.log(`Número:${this.numero}`);
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
}
const cont1 = new ContaPF(9999, "Luan");
const cont2 = new ContaPJ(445455, "Test");
cont1.info();
cont2.info();
