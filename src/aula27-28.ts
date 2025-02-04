interface curso{
    titulo:string;
    des:string;
   
    iniciarCurso?(teste:string):void;
}


let curso1:cursoProg
let curso2:cursoArt
let curso3:cursoProg

interface cursoProg extends curso{
    aula:number;
    MaxAlunos?:number;
}

interface cursoArt extends curso{
    aula:number;
    MaxAlunos?:number;
}

curso1={
    titulo:"TypeScript", des:"Curso de typescript",aula:100, MaxAlunos:50
 
 }

curso2={
    titulo:"JavaScript",
    des:"Curso de JavaScript",
    aula:200,
    MaxAlunos:100
 
 }

 curso3={
    titulo:"Jt",
    des:"teste",
    aula:200,
    
 
 }




console.log(curso1)
console.log(curso2)
console.log(curso3)