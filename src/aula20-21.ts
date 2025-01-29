//Curso de Typescript Completo #P20 Aprendendo sobre P.O.O. #P5 Entendendo HERANÇA em Typescript


class Conta{
     public numero:number;
    public titular:string;
    constructor(titular:string){
       this.numero=this.GerarNumeroConta();
       this.titular=titular;
    }

    GerarNumeroConta():number{
          return Math.floor(Math.random()*100000)+1
    }
}

class ContaPF extends Conta{
   cpf:number;
   constructor(cpf:number,titular:string){
      super(titular)
     this.cpf=cpf
   }
}
class ContaPJ extends Conta{
   cnpj:number;
   constructor(cnpj:number,titular:string){
      super(titular)
     this.cnpj=cnpj
   }
    
}

const cont1=new ContaPF(9999,"Luan") 
const cont2=new ContaPJ(445455,"Test") 

console.log(cont2.titular)
console.log(cont2.numero)