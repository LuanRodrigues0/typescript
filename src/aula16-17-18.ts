//Curso de Typescript Completo #P18 Aprendendo sobre P.O.O. #P3 Métodos de classes em Typescript


class computador{
    nome:string;
    ram:number=0;
    cpu:number=0;
    Ligado:boolean=false;

    constructor(n:string,ram:number,cpu:number){
         this.nome=n;
         this.ram=ram;
         this.cpu=cpu;
         this.Ligado=false;
         
    }

    info():void{
        console.log(`Nome...:${this.nome}`)
        console.log(`Ram:...${this.ram}`)
        console.log(`Cpu:...${this.cpu}`)
        console.log(`Ligado:${this.Ligado?"sim":"não"}`)
        console.log("--------------------")
        
    }
    ligar():void{
        this.Ligado=true
    }
    desligar():void{
        this.Ligado=false
    }
    
}


//Instanciar
const d1= new computador("Games",64,12); 
const d2= new computador("rápido",32,7);
const d3= new computador("Lesma",128,17);

d1.ligar()
d2.ligar()
d1.desligar()

d1.info()
d2.info()
d3.info()

