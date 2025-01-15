//Curso de Typescript Completo #P06 Aprendendo mais sobre Array e Readonly Array em Typescript

//declarações que posso utilizar para variáveis
//let numeros=[12,23,565,]; 
//let numeros:Array<number|string>=[12,23,565,"PABLO"];
//let numeros:(number|string)[]=[12,23,565,"PABLO"];

//Arrys comuns
let numeros:number[]=[12,23,565,]; 

numeros.push(20);
numeros.unshift(143);//faz o mesmo que o push, mas coloca o valor no início do array
numeros.pop();//Retira o último elemento do Array
numeros.shift();//retira do início do Array


console.log(numeros)

//Readonly Array
//Array somente leitura, não podem ser alterados.
let numeros_ro:ReadonlyArray<number>=[100,200,300]
console.log(numeros_ro)








//declarações que posso utilizar para variáveis
//let numeros=[12,23,565,]; 
//let numeros:Array<number|string>=[12,23,565,"PABLO"];
//let numeros:(number|string)[]=[12,23,565,"PABLO"];