"use strict";
var Veiculos;
(function (Veiculos) {
    let Cores;
    (function (Cores) {
        Cores[Cores["preto"] = 0] = "preto";
        Cores[Cores["azul"] = 1] = "azul";
        Cores[Cores["vermelho"] = 2] = "vermelho";
        Cores[Cores["prata"] = 3] = "prata";
        Cores[Cores["amarelo"] = 4] = "amarelo";
        Cores[Cores["Branco"] = 5] = "Branco";
    })(Cores || (Cores = {}));
    class Carro {
        nome;
        motor;
        cor;
        constructor(nome, motor, cor) {
            this.nome = nome;
            this.cor = Cores[cor];
            this.motor = motor;
        }
        ligar() {
            this.motor.liga = true;
        }
        desligar() {
            this.motor.liga = false;
        }
        get minhaCor() {
            return this.cor;
        }
        get meuNome() {
            return this.nome;
        }
        get estaLigado() {
            return (this.motor.ligad ? "sim" : "Não");
        }
        get MinhaPotencia() {
            return this.motor.poten;
        }
    }
    class CarroEsportivo extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(3, 200, new Motores.Turbo(100)), 1);
        }
    }
    Veiculos.CarroEsportivo = CarroEsportivo;
    class CarroPopular extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(7, 335), 4);
        }
    }
    Veiculos.CarroPopular = CarroPopular;
})(Veiculos || (Veiculos = {}));
var Motores;
(function (Motores) {
    class Turbo {
        potencia;
        constructor(poten) {
            this.potencia = poten;
        }
        get poten() {
            return this.potencia;
        }
    }
    Motores.Turbo = Turbo;
    class Motor {
        ligado;
        cilindros;
        potencia;
        constructor(pot, cilin, turbo) {
            this.ligado = false;
            this.potencia = pot;
            this.cilindros = cilin;
            this.potencia = pot + (turbo ? +turbo.poten : 0);
        }
        set liga(ligado) {
            this.ligado = ligado;
        }
        get ligad() {
            return this.ligado;
        }
        get poten() {
            return this.potencia;
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
const carro1 = new Veiculos.CarroEsportivo("Rapido", 3);
const carro2 = new Veiculos.CarroPopular("top", 0);
carro1.ligar();
carro2.ligar();
console.log(`Nome: ${carro1.meuNome}`);
console.log(`Cor: ${carro1.minhaCor}`);
console.log(`Potência: ${carro1.MinhaPotencia}`);
console.log(`EstáLigado?: ${carro1.estaLigado}`);
console.log(`-----------------------------------`);
console.log(`Nome: ${carro2.meuNome}`);
console.log(`Cor: ${carro2.minhaCor}`);
console.log(`Potência: ${carro2.MinhaPotencia}`);
console.log(`EstáLigado?: ${carro2.estaLigado}`);
console.log(`-----------------------------------`);
