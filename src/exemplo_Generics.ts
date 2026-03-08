/*Função onde a gente define o tipo de array que se quer obter, passa uma série de itens como parâmetro de 
determinado tipo e ela nos retorna um array tipado do tipo definido */
function getArray<T>(items: T[]): T[] {
	return new Array<T>().concat(items);
}

let numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25);
console.log(numberArray);
// numberArray.push("this is not a number"); dá erro em tempo de compilação

let stringArray = getArray<string>(["cats", "dogs", "birds"]);
stringArray.push("Rabbits");
console.log(stringArray);
