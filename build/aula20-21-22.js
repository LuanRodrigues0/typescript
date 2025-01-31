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
        console.log(`Conta PF criada: ${titular}`);
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
        console.log(`Conta Pj criada: ${titular}`);
    }
}
const cont1 = new ContaPF(9999, "Luan");
const cont2 = new ContaPJ(445455, "Test");
cont1.info();
