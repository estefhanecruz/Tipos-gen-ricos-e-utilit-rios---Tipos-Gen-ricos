"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Você está criando uma função que manipula dados de diferentes tipos, mas precisa
garantir que o tipo de entrada seja consistente. Para isso, você utilizará tipos
genéricos para permitir que a função trabalhe com qualquer tipo, mantendo a
segurança do tipo ao mesmo tempo.

Tarefa:
- Crie uma função genérica printArray que recebe um array de qualquer tipo e
imprime os valores do array no console.
- Crie uma função genérica getFirstElement que recebe um array de qualquer tipo
e retorna o primeiro elemento do array.
- Ambas as funções devem ser genéricas, ou seja, capazes de lidar com arrays de
 diferentes tipos (números, strings, objetos etc)
- Use a função printArray para exibir os valores de um array de números e um array
 de strings
- Use a função getFirstElement para obter o primeiro elemento do array de números
 e um array de objetos.

*/
function printArray(items) {
    // Para cada item dentro de items, execute esta função console.log que o imprime.
    items.forEach((item) => console.log(item));
}
function getFirstElement(items) {
    return items[0];
}
/*
- Por que o retorno não é void?
Diferente da função anterior, o objetivo aqui é devolver uma informação para ser usada depois.
O retorno é T (o tipo genérico) porque, se você passar um array de números, ela te devolve um número.
O | undefined é uma boa prática: caso o array esteja vazio, o primeiro elemento não existirá, e o TypeScript nos avisa sobre isso.
- Detalhes do funcionamento:
items[0]: Acessamos o índice zero, que é sempre a primeira posição de qualquer array em programação.
return: Esta palavra-chave "expulsa" o valor de dentro da função para que você possa guardá-lo em uma variável, como fiz nos exemplos acima.
Percebeu como o tipo de retorno T se adapta automaticamente ao que você envia para a função?*/
printArray([2, 3, 6, 9, 4, 7]);
printArray(["2,3,6,9,4,7"]);
console.log(getFirstElement([2, 3, 6, 9, 4, 7]));
console.log(getFirstElement([
    { nome: "Julia", idade: 26 },
    { nome: "Rafael", idade: 28 },
]));
//# sourceMappingURL=exercicio.js.map