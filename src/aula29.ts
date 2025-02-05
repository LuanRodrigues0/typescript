//Aprende o que é GENERICS em Typescript - Curso de Typescript Completo #P29
//componente que pode funcionar em ou com vários tipos

function F_teste<T,U>(v:T,r:U):U{
    return r
}

console.log(F_teste<number,string>(10,"gogo"))
console.log(F_teste<number,number>(10,23))
console.log(F_teste<boolean,boolean>(true,false))
console.log(F_teste<string,number>("test",21))

class f_test<T>{
    public valor:T
    constructor(valor:T){
        this.valor=valor
    } 
}

const ct1=new f_test<number>(1)

const ct2=new f_test<string>("olá")

console.log(ct1.valor)
console.log(ct2.valor)