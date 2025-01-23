"use strict";
const teste = (txt) => {
    console.log(txt);
};
const Fsoma2 = (n1) => {
    let s = 0;
    n1.forEach((e) => {
        s += e;
    });
    return s;
};
teste("CFBCursos");
teste("cueso de typescript");
teste("Youtube");
teste();
let numeross = [12, 23, 43];
console.log(Fsoma2(numeross));
