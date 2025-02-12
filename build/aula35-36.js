"use strict";
const obj = {
    cor1: "verde",
    cor2: "roxo",
    cor3: "vermelho",
    cor4: "azul"
};
let { cor1, cor2, cor3, cor4 } = obj;
let [nu1, nu2 = 0, ...nu3] = [10, 20, 30, 40, 50];
const fcores = () => {
    return ["verde", "Azul", "Preto", "vermelho"];
};
let [co1, co2, co3, co4] = fcores();
let texto = "Curso de typeScript";
let [...t] = texto.split(" ");
console.log(t);
