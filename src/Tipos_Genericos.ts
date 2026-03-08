function identify<T>(value: T): T {
	return value;
}

//O código da função identify permanece o mesmo, porém o tipo de retorno é dinâmico
const num = identify<number>(45);
const text = identify<string>("Hello World");
