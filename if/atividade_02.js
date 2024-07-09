let n1;
const leia = require("readline-sync");

n1 = leia.questionInt("\nDigite um numero: ");


if (n1 % 2 == 0 && n1 > 0 ){
    console.log(`\nO número ${n1} é par e positivo.`);
}
if (n1 % 2 == 0 && n1 < 0 ){
    console.log(`\nO número ${n1} é par e negativo.`);
}
if (n1 % 2 != 0 && n1 > 0 ){
    console.log(`\nO número ${n1} é impar e positivo.`);
}
if (n1 % 2 != 0 && n1 < 0 ){
    console.log(`\nO número ${n1} é impar e negativo.`);
}