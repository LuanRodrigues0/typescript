//Curso de Typescript Completo #P15 Aprendendo sobre parâmetros REST com SPREAD em Typescript

//sem rest

// function fsoma2(v1:number,v2:number, v3:number){
//     return v1+v2+v3
// }

// console.log(fsoma2(12,2,5))


//com rest

function fsoma2(...n:number[]){
    

    let s:number=0
    for(let en of n){
        s+=en
    }

    //forEach ou for off duas maneiras que vão funcionar.
     
    // let s:number=0
    // n.forEach((en)=>{
    //     s+=en;
    // })
    // return s
}

console.log(fsoma2(25,25,25,25,25))
