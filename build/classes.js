"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objeto = exports.pessoa = void 0;
class pessoa {
    nome;
    altura;
    constructor(nome, altura) {
        this.nome = nome;
        this.altura = altura;
    }
}
exports.pessoa = pessoa;
class objeto {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
exports.objeto = objeto;
