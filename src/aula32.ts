namespace Veiculos{

 export class Carro{
    nome:string
    motor:Motores.Motor
    
    constructor(nome:string){
        this.nome=nome
        this.motor=new Motores.Motor(3,100)
        
    }
}
}

namespace Motores{
 
   class Turbo{
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

const car1=new Veiculos.Carro("speed")

console.log(car1.nome)
console.log(car1.motor)
//console.log(car1.turbo)
