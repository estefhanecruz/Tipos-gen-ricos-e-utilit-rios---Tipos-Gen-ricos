"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*O Partial<User> é um Utility type que transforma todas as propriedades
da interface User em opcionais. Sem ele haveria erro em tempo de compilação porque o id está
faltando*/
const updateUser = { name: "Murilo" };
console.log(updateUser);
/*Para fazer o oposto, utilizamos o utilitário Required<T>. Ele remove a característica de
"opcional" (aquelas marcadas com ?) e obriga a definição de todas as propriedades. */
//Se o id ou o nome não forem colocados, dá erro em tempo de compilação
const updateUser1 = { id: 86541, name: "Julia" };
console.log(updateUser1);
// Dá para tornar um objeto Readonly
const user = { id: 64465, name: "Rafael" };
/*NonNullable<Name>: Remove especificamente null e undefined de qualquer tipo.
O ValidName passa a ser apenas string.  */
//# sourceMappingURL=Tipos_Utilitarios.js.map