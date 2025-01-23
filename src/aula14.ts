//Curso de Typescript Completo #P14 Arrow Function
//Função Anônima

const teste=(txt?:string):void=>{
    console.log(txt)
}

const Fsoma2=(n1:number[]):number=>{
    let s:number =0;
    n1.forEach((e)=>{
        s+=e
    })
    return s
}

teste("CFBCursos");
teste("cueso de typescript");
teste("Youtube");
teste();

let numeross:number[]=[12,23,43]

console.log(Fsoma2(numeross))

