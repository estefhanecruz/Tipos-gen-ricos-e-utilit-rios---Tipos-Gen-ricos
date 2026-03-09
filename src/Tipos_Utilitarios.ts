//  interface define o formato obrigatório do usuário, exigindo um id e nome
interface User {
	id: number;
	name: string;
}

/*O Partial<User> é um Utility type que transforma todas as propriedades
da interface User em opcionais. Sem ele haveria erro em tempo de compilação porque o id está 
faltando*/
const updateUser: Partial<User> = { name: "Murilo" };
console.log(updateUser);
/*Em resumo, este código serve para lidar com atualizações parciais de dados, 
onde você não precisa enviar o objeto inteiro, apenas o que deseja mudar.
 */

// O contrário pode ser feito:
interface User0 {
	id?: number; // Opcional
	name?: string; // Opcional
}
/*Para fazer o oposto, utilizamos o utilitário Required<T>. Ele remove a característica de
"opcional" (aquelas marcadas com ?) e obriga a definição de todas as propriedades. */

//Se o id ou o nome não forem colocados, dá erro em tempo de compilação
const updateUser1: Required<User0> = { id: 86541, name: "Julia" };
console.log(updateUser1);

// Dá para tornar um objeto Readonly
const user: Readonly<User> = { id: 64465, name: "Rafael" };
// user.id = 5521; -> Erro de compilação: Cannot assign to 'id' because it is a read-only property.

type Status = "active" | "inactive" | "deleted"; //Define os tipos de Status

type ActiveStatus = Exclude<Status, "deleted">;
/*Exclude<Status, "deleted">: Remove um tipo de uma união. O ActiveStatus vira apenas 
"active" | "inactive", porque você disse: "pegue o Status, mas exclua o 'deleted'". */

type BasicStatus = Extract<Status, "active" | "deleted">;
/*Extract<Status, "active" | "deleted">: É o oposto do Exclude. Ele busca a intersecção. 
O BasicStatus vira "active" | "deleted", pois ele extrai apenas o que existe em ambos os lados. */

type Name = string | null | undefined;
type ValidName = NonNullable<Name>;
/*NonNullable<Name>: Remove especificamente null e undefined de qualquer tipo. 
O ValidName passa a ser apenas string.  */
