//Curso de Typescript Completo #P09 Aprendendo sobre ENUM em Typescrip

enum dias{
    domingo=0,
    segunda=1,
    terça=2,
    quarta=3,
    quinta=4,
    sexta=5,
    sabado=6
}

console.log(dias.domingo)
console.log(dias['domingo'])
console.log(dias[1])

const d = new Date();
console.log(d.getDay())
console.log(dias[d.getDay()])