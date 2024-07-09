let opcao, quantidade, total;
const leia = require("readline-sync");

console.log("\n1 - Cachorro Quente - R$ 10.00");
console.log("2 - X - Salada - R$ 15.00");
console.log("3 - X - Bacon - R$ 18.00");
console.log("4 - Bauru - R$ 12.00");
console.log("5 - Refrigerante - R$ 8.00");
console.log("6 - Suco de Laranja - R$ 13.00");


opcao = leia.questionInt("\nDigite a opcao desejada: ");
quantidade = leia.questionInt("Digite a quantidade: ");


switch(opcao){
    case 1:
        total = quantidade * 10.00;
        console.log("\nProduto: Cachorro Quente");
        console.log(`Quantidade: ${quantidade}`);
        console.log(`Valor total: R$ ${total.toFixed(2)}`);
        break;
    case 2:
        total = quantidade * 15.00;
        console.log("\nProduto: X - Salada");
        console.log(`Quantidade: ${quantidade}`);
        console.log(`Valor total: R$ ${total.toFixed(2)}`);
        break;
    case 3:
        total = quantidade * 18.00;
        console.log("\nProduto: X - Bacon");
        console.log(`Quantidade: ${quantidade}`);
        console.log(`Valor total: R$ ${total.toFixed(2)}`);
        break;
    case 4:
        total = quantidade * 12.00;
        console.log("\nProduto: Bauru");
        console.log(`Quantidade: ${quantidade}`);
        console.log(`Valor total: R$ ${total.toFixed(2)}`);
        break;
    case 5:
        total = quantidade * 8.00;
        console.log("\nProduto: Refrigerante");
        console.log(`Quantidade: ${quantidade}`);
        console.log(`Valor total: R$ ${total.toFixed(2)}`);
        break;
    case 6:
        total = quantidade * 13.00;
        console.log("\nProduto: Suco de Laranja");
        console.log(`Quantidade: ${quantidade}`);
        console.log(`Valor total: R$ ${total.toFixed(2)}`);
        break;
}