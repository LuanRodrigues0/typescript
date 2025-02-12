//Praticando Desestruturação em Typescript - Curso de Typescript Completo #P35


const obj={
    cor1:"verde",
    cor2:"roxo",
    cor3:"vermelho",
    cor4:"azul"
}
 let {cor1,cor2,cor3,cor4}=obj

 let [nu1,nu2=0,...nu3]=[10,20,30,40,50] //n3 passa a  receber o restante dos valores
 
 const fcores=()=>{
return ["verde","Azul","Preto","vermelho"]
 }

 let [co1,co2,co3,co4]=fcores()

 let texto="Curso de typeScript"

 let [...t]=texto.split(" ")
 console.log(t)
 
 //console.log(co1)
 //console.log(co2)
 //console.log(co3)
 //console.log(co4)

 
//let av ,[aa,bb,cc,ff]=[10,20,30,44]
//console.log(aa)

//ou
//let av=[10,20,30,44]
//let [aa,bb,cc,ff]=av
//console.log(aa)

//aa=av[0]
//bb=av[1]
//cc=av[2]
//ff=av[3]