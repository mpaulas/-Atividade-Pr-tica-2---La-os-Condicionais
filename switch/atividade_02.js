let opcao, nome, salario, novoSalario;
const leia = require("readline-sync");

console.log("\n1 - Gerente ");
console.log("2 - Vendedor ");
console.log("3 - Supervisor ");
console.log("4 - Motorista ");
console.log("5 - Estoquista ");
console.log("6 - Técnico de T.I ");

nome = leia.question("\nNome do Colaborador: ");
opcao = leia.questionInt("Cargo: ");
salario = leia.questionFloat("Salario: R$ ");


switch(opcao){
    case 1:
        novoSalario = salario + (0.1 * salario);
        console.log(`\nNome do colaborador: ${nome}`);
        console.log(`Cargo: Gerente`);
        console.log(`Salário: R$ ${novoSalario.toFixed(2)}`);
        break;
    case 2:
        novoSalario = salario + (0.07 * salario);
        console.log(`\nNome do colaborador: ${nome}`);
        console.log(`Cargo: Vendedor`);
        console.log(`Salário: R$ ${novoSalario.toFixed(2)}`);
        break;
    case 3:
        novoSalario = salario + (0.09 * salario);
        console.log(`\nNome do colaborador: ${nome}`);
        console.log(`Cargo: Supervisor`);
        console.log(`Salário: R$ ${novoSalario.toFixed(2)}`);
        break;
    case 4:
        novoSalario = salario + (0.06 * salario);
        console.log(`\nNome do colaborador: ${nome}`);
        console.log(`Cargo: Motorista`);
        console.log(`Salário: R$ ${novoSalario.toFixed(2)}`);
        break;
    case 5:
        novoSalario = salario + (0.05 * salario);
        console.log(`\nNome do colaborador: ${nome}`);
        console.log(`Cargo: Estoquista`);
        console.log(`Salário: R$ ${novoSalario.toFixed(2)}`);
        break;
    case 6:
        novoSalario = salario + (0.08 * salario);
        console.log(`\nNome do colaborador: ${nome}`);
        console.log(`Cargo: Tecnico de T.I`);
        console.log(`Salário: R$ ${novoSalario.toFixed(2)}`);
        break;
}