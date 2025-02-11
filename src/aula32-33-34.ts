namespace Veiculos{
   enum  Cores{"preto","azul","vermelho","prata","amarelo","Branco"}
  abstract class Carro{
    private nome:string
   private motor:Motores.Motor
   private cor:string
    
    constructor(nome:string,motor:Motores.Motor,cor:Cores){
        this.nome=nome
        this.cor=Cores[cor]
        this.motor=motor
        // this.motor=new Motores.Motor(3,100)
        
    }
    public ligar(){
        this.motor.liga=true
    }
    public desligar(){
        this.motor.liga=false
    }

    get minhaCor(){
        return this.cor
    }

    get meuNome(){
        return this.nome
    }

    get estaLigado(){
        return (this.motor.liga?"sim":"Não")
    }
    get MinhaPotencia(){
        return this.motor.poten 
    }
 }
  export class CarroEsportivo extends Carro{
    constructor(nome:string,cor:Cores){
        super(nome, new Motores.Motor(3,200,new Motores.Turbo(100)),1)
    }
  }

}

namespace Motores{
 
  export class Turbo{
   private potencia:number
    constructor(poten:number){
       this.potencia=poten
    }
    get poten(){
        return this.potencia
    }
  }   

 export class Motor{
    private ligado:boolean
    private cilindros:number
    private potencia:number
    constructor(pot:number,cilin:number,turbo?:Turbo){
        this.ligado=false
        this.potencia=pot
        this.cilindros=cilin
        this.potencia=pot + (turbo?+turbo.poten:0)

    }
    set liga(liga:boolean){
        this.ligado=liga
    }
    get liga(){
        return this.liga
    }

    get poten(){
        return this.potencia
    }

   
  }
}


