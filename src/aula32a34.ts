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
        return (this.motor.ligad?"sim":"Não")
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
  export class CarroPopular extends Carro{
    constructor(nome:string,cor:Cores){
        super(nome, new Motores.Motor(7,335),4)
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
    set liga(ligado:boolean){
        this.ligado=ligado
    }
    get ligad(){
        return this.ligado
    }

    get poten(){
        return this.potencia
    }

   
  }
}



const carro1= new Veiculos.CarroEsportivo("Rapido",3)
const carro2= new Veiculos.CarroPopular("top",0)

carro1.ligar()
carro2.ligar()

console.log(`Nome: ${carro1.meuNome}`)
console.log(`Cor: ${carro1.minhaCor}`)
console.log(`Potência: ${carro1.MinhaPotencia}`)
console.log(`EstáLigado?: ${carro1.estaLigado}`)
console.log(`-----------------------------------`)
console.log(`Nome: ${carro2.meuNome}`)
console.log(`Cor: ${carro2.minhaCor}`)
console.log(`Potência: ${carro2.MinhaPotencia}`)
console.log(`EstáLigado?: ${carro2.estaLigado}`)
console.log(`-----------------------------------`)


