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
            return (this.motor.liga ? "sim" : "Não");
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
        set liga(liga) {
            this.ligado = liga;
        }
        get liga() {
            return this.liga;
        }
        get poten() {
            return this.potencia;
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
