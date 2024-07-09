let A, B, C, soma;
const leia = require("readline-sync");

A = leia.questionInt("\nDigite o numero A: ");
B = leia.questionInt("Digite o numero B: ");
C = leia.questionInt("Digite o numero C: ");

soma = A + B;

if (soma > C){
    console.log(`\nA Soma de A(${A}) + B(${B}) é Maior do que C(${C})`);
}
if (soma < C){
    console.log(`\nA Soma de A(${A}) + B(${B}) é Menor do que C(${C})`);
}
if (soma == C){
    console.log(`\nA Soma de A(${A}) + B(${B}) é Igual a C(${C})`);
}
