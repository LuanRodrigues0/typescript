let dados={
    nome:"Carlinhos",
    idade:54,
    status:"A",
    ola:()=>{console.log("OLÁ")},
    info:(p:string)=>{console.log(p)}

}

dados.nome="Dalva";

console.log(typeof(dados));
console.log(dados);

dados.ola()
dados.info(dados.nome)