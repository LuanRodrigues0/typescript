//Curso de Typescript Completo #P12 Aprendendo sobre Funções em Typescript #P1

function logar(User:string,pass:string):void{
  console.log(`User: ${User}`)
  console.log(`Pass: ${pass}`)

}

logar('Luan','2232')

function soma2(n1:number,n2:number):number{
  let r=n1+n2    
  return r;

}

let n_res=soma2(10,5)
let s_res:string=soma2(2,8).toString()

console.log(n_res)
console.log(s_res)