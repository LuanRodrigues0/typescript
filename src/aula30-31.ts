//Trabalhando com Módulos em Typescript #P1 - Curso de Typescript Completo #P30


import Pessoa  from "./classes"
import { Objeto, Coisas } from "./classes"
//ou
//import { objeto } from "./classes"

const p1=new Pessoa("Luan",1.70)

console.log(p1.nome)
console.log(p1.altura)


const p2=new Objeto("Mesa")
console.log(p2.nome)

console.log(Coisas)