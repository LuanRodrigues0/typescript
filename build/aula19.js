"use strict";
class computador1 {
    id = 0;
    nome;
    ram = 0;
    cpu = 0;
    Ligado = false;
    constructor(n, ram, cpu) {
        this.nome = n;
        this.ram = ram;
        this.cpu = cpu;
        this.Ligado = false;
        this.id = 0;
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
    apuRam(qtde) {
        if (qtde >= 0 && qtde <= 1000) {
            this.ram = qtde;
        }
        else {
            console.log(`O valor de ${qtde} é inválido para o pc ${this.nome}`);
        }
    }
}
const dd1 = new computador1("Games", 64, 12);
const dd2 = new computador1("rápido", 32, 7);
const dd3 = new computador1("Lesma", 128, 17);
dd1.ligar();
dd2.ligar();
dd1.desligar();
dd1.apuRam(-100);
dd1.info();
dd2.info();
dd3.info();
