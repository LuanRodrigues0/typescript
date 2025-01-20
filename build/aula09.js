"use strict";
var dias;
(function (dias) {
    dias[dias["domingo"] = 0] = "domingo";
    dias[dias["segunda"] = 1] = "segunda";
    dias[dias["ter\u00E7a"] = 2] = "ter\u00E7a";
    dias[dias["quarta"] = 3] = "quarta";
    dias[dias["quinta"] = 4] = "quinta";
    dias[dias["sexta"] = 5] = "sexta";
    dias[dias["sabado"] = 6] = "sabado";
})(dias || (dias = {}));
const d = new Date();
var cores;
(function (cores) {
    cores["branco"] = "#fff";
    cores["preto"] = "#000";
    cores["vermelho"] = "#f00";
    cores["verde"] = "#0f0";
    cores["azul"] = "#00f";
})(cores || (cores = {}));
console.log(cores.branco);
console.log(cores['branco']);
var TipoUsuario;
(function (TipoUsuario) {
    TipoUsuario[TipoUsuario["User"] = 34] = "User";
    TipoUsuario[TipoUsuario["ADM"] = 56] = "ADM";
    TipoUsuario[TipoUsuario["Super"] = 34] = "Super";
})(TipoUsuario || (TipoUsuario = {}));
console.log(TipoUsuario.ADM);
const tp = TipoUsuario.User;
console.log(tp);
