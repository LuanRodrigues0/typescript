//Curso de Typescript Completo #P11 Aprendendo sobre Type Assertion e Typecast em Typescript

let nvalor:number;
let svalor:string;
let uvalor:unknown;

uvalor=10;
nvalor=12;
svalor=nvalor.toString();


console.log(typeof(svalor))
console.log(svalor)



//conversão string para number
// nvalor=Number.parseInt(svalor)


//nvalor=<number><unknown>svalor

//nvalor=<number>uvalor; //Type Assertion
//svalor=<string>uvalor
//svalor+=10;

//console.log(typeof(uvalor))
//console.log(uvalor)

//console.log(typeof(nvalor))
//console.log(nvalor)

//console.log(typeof(svalor))
//console.log(svalor)