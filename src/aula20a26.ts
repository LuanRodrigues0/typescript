//Curso de Typescript Completo #P20 Aprendendo sobre P.O.O. #P5 Entendendo HERANÇA em Typescript

//Public:Acessado por qualquer lugar
//Private: Acessado somente na própria classe
//protected: Acessado somente na própria classe e nas classes filhos.

//Classe Abstrata
 abstract class Conta{
     private readonly  numero:number;
     private SaldoConta:number;
    protected titular:string;
    constructor(titular:string){
       this.numero=this.GerarNumeroConta();
       this.titular=titular;
       this.SaldoConta=0
    }

    private GerarNumeroConta():number{
          return Math.floor(Math.random()*100000)+1
    }
    info(){
      console.log(`Titular:${this.titular}`)
      console.log(`Número:${this.numero}`)
     
    }

      get  saldo():number{ //getter
         return this.SaldoConta
    }
     private set saldo(saldoContaParam){// setter
           this.SaldoConta=saldoContaParam
      }

      
    protected deposito(valor:number){
      if(valor < 0){
         console.log("valor inválido")
         return
      } 
        this.saldo+=valor
    }

    protected saque(valor:number){
      if(valor < 0){
         console.log("valor inválido")
         return
      }
      if(valor <= this.SaldoConta){
      this.saldo-=valor
      }else{
         console.log("Não foi possível sacar! saldo insuficiente.")
      }
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

   public deposito(valor: number){
      if(valor >1000){
         console.log("Valor muito grande para esse tipo de conta")
      }else{
         super.deposito(valor)
      }
         
   }

   public saque(valor:number){
      if(valor>1000){
         console.log("Valor de saque muito grande para essa conta")
      }else{
         super.saque(valor)
      }
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
   public deposito(valor: number){
      if(valor >10000){
         console.log("Valor muito grande para esse tipo de conta")
      }else{
         super.deposito(valor)
      }
         
   }

   public saque(valor:number){
      if(valor>10000){
         console.log("Valor de saque muito grande para essa conta")
      }else{
         super.saque(valor)
      }
   }
   
    
}

const cont1=new ContaPF(9999,"Luan") 
const cont2=new ContaPJ(445455,"Test") 

// console.log(cont2.titular)
// console.log(cont2.numero)

// cont1.info()
// cont2.info()


cont1.deposito(1000)
cont1.deposito(236)
cont1.deposito(444)
//cont1.saque(680)

        console.log(cont1.saldo)




// cont2.deposito(10000)
// console.log(cont2.saldo())
