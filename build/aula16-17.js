"use strict";
class computador {
    nome;
    ram = 0;
    cpu = 0;
    Ligado = false;
    constructor(n, ram, cpu) {
        this.nome = n;
        this.ram = ram;
        this.cpu = cpu;
        this.Ligado = false;
    }
}
const d1 = new computador("Games", 64, 12);
const d2 = new computador("rápido", 32, 7);
const d3 = new computador("Lesma", 128, 17);
console.log(d1.nome);
console.log(d2.nome);
console.log(d3.nome);
