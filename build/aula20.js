"use strict";
class Conta {
    numero;
    titular;
    constructor(numero, titular) {
        this.numero = numero;
        this.titular = titular;
    }
}
class ContaPF extends Conta {
}
class ContaPJ extends Conta {
}
const cont1 = new ContaPF(123212, "Luan");
const cont2 = new ContaPJ(123334, "Test");
console.log(cont1.titular);
console.log(cont2.titular);
