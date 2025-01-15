//Curso de Typescript Completo #P05 Entendendo como funciona UNION TYPES em Typescript

//let vteste:string|number|boolean; //conceito de union types

let vteste:any;
vteste="Luan";
vteste=500;
vteste=true


let cursos=["JavaScript","TypeScript","C#",786,true];
let valores=[10, 200, 3000]

cursos.push("React");
cursos.push(10000);
valores.push(2212,);

console.log(cursos)
console.log(valores)
console.log(vteste)


//conceito de union types: Pode colocar tipos diferentes na mesma variável. obs: Use com cuidado, somente em casos necessários.