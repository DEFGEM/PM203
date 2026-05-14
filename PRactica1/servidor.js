console.log("Hola mundo desde js.servidro!!");

console.time("talProceso")
for (let i = 0; i < 1000000; i++) {
}
console.timeEnd("talProceso")

let usuarios = [
    { nombre: "Cristopher", edad: 20 },
    { nombre: "Maria", edad: 21 },
];
console.table(usuarios);