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
    info() {
        console.log(`Nome...:${this.nome}`);
        console.log(`Ram:...${this.ram}`);
        console.log(`Cpu:...${this.cpu}`);
        console.log(`Ligado:${this.Ligado ? "sim" : "não"}`);
        console.log("--------------------");
    }
    ligar() {
        this.Ligado = true;
    }
    desligar() {
        this.Ligado = false;
    }
}
const d1 = new computador("Games", 64, 12);
const d2 = new computador("rápido", 32, 7);
const d3 = new computador("Lesma", 128, 17);
d1.ligar();
d2.ligar();
d1.desligar();
d1.info();
d2.info();
d3.info();
