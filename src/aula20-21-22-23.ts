//Curso de Typescript Completo #P20 Aprendendo sobre P.O.O. #P5 Entendendo HERANÇA em Typescript

//Public:Acessado por qualquer lugar
//Private: Acessado somente na própria classe
//protected: Acessado somente na própria classe e nas classes filhos.


class Conta{
     protected numero:number;
    protected titular:string;
    constructor(titular:string){
       this.numero=this.GerarNumeroConta();
       this.titular=titular;
    }

    private GerarNumeroConta():number{
          return Math.floor(Math.random()*100000)+1
    }
    info(){
      console.log(`Titular:${this.titular}`)
      console.log(`Número:${this.numero}`)
     
    }
}

class ContaPF extends Conta{
   cpf:number;
   constructor(cpf:number,titular:string){
      super(titular)
     this.cpf=cpf
     
   }

   info(){
      console.log("Tipo: PF")
      super.info()
      console.log(`CPF......${this.cpf}`)
      console.log("----------------------------")
   }
}
class ContaPJ extends Conta{
   cnpj:number;
   constructor(cnpj:number,titular:string){
      super(titular)
     this.cnpj=cnpj
    
   }

   info(){
      console.log("Tipo: PJ")
      super.info()
      console.log(`CNPJ.....${this.cnpj}`)
      console.log("----------------------------")
   }
    
}

const cont1=new ContaPF(9999,"Luan") 
const cont2=new ContaPJ(445455,"Test") 

// console.log(cont2.titular)
// console.log(cont2.numero)

cont1.info()
cont2.info()

