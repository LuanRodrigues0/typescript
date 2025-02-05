"use strict";
function F_teste(v, r) {
    return r;
}
console.log(F_teste(10, "gogo"));
console.log(F_teste(10, 23));
console.log(F_teste(true, false));
console.log(F_teste("test", 21));
class f_test {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
}
const ct1 = new f_test(1);
const ct2 = new f_test("olá");
console.log(ct1.valor);
console.log(ct2.valor);
