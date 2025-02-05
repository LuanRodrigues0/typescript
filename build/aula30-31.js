"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = __importDefault(require("./classes"));
const classes_2 = require("./classes");
const p1 = new classes_1.default("Luan", 1.70);
console.log(p1.nome);
console.log(p1.altura);
const p2 = new classes_2.Objeto("Mesa");
console.log(p2.nome);
console.log(classes_2.Coisas);
