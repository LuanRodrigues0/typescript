"use strict";
var Veiculos;
(function (Veiculos) {
    class Carro {
        nome;
        motor;
        constructor(nome) {
            this.nome = nome;
            this.motor = new Motores.Motor(3, 100);
        }
    }
    Veiculos.Carro = Carro;
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
const car1 = new Veiculos.Carro("speed");
console.log(car1.nome);
console.log(car1.motor);
