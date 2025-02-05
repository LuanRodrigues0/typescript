//Trabalhando com Módulos em Typescript #P1 - Curso de Typescript Completo #P30

import { pessoa, objeto } from "./classes"
//ou
//import { objeto } from "./classes"

const p1=new pessoa("Luan",1.70)

console.log(p1.nome)
console.log(p1.altura)


const p2=new objeto("Mesa")
console.log(p2.nome)