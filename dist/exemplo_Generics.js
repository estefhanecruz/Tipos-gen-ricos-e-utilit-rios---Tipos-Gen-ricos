"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Função onde a gente define o tipo de array que se quer obter, passa uma série de itens como parâmetro de
determinado tipo e ela nos retorna um array tipado do tipo definido */
function getArray(items) {
    return new Array().concat(items);
}
let numberArray = getArray([5, 10, 15, 20]);
numberArray.push(25);
console.log(numberArray);
// numberArray.push("this is not a number"); dá erro em tempo de compilação
let stringArray = getArray(["cats", "dogs", "birds"]);
stringArray.push("Rabbits");
console.log(stringArray);
//# sourceMappingURL=exemplo_Generics.js.map