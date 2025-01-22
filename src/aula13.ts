//Curso de Typescript Completo #P13 Funções em Typescript #P2 Parâmetros Padrões e Opcionais

function soma(n1:number=0,n2:number=0):number{
    return n1+n2
}

console.log(soma())

function novoUser(user:string, pass:string,nome?:string):void{

    let dados=[user,pass,nome]
    console.log(dados)

}

novoUser('tadala','123',)