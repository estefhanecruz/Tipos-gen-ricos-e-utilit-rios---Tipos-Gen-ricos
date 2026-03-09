/*Cenário:
Você tem um tipo que representa um usuário. Esse tipo possui algumas propriedades que nem sempre
são obrigatórias. Você precisará usar os tipos utilitários Required e Partial para modificar esse 
comportamento, fazendo com que as proriedades sejam todas obrigatórias ou todas opcionais, 
dependendo do caso. 

Tarefa:
    -Crie um tipo User com as propriedades id, name e email, sendo que name e email são opcionais.
    - Use o tipo utilitário required para criar um tipo FullUser onde toda as propriedades de User
    são obrigatórias.
    - Use o tipo utilitário Partial para criar um tipo UserUpdate onde todas as propriedades de 
    User são opcionais.

Requisitos:
    - O tipo User deve ter as propriedades id, name e email. As propriedades  name e email devem 
    ser opcionais.
    - O tipo FullUser deve tornar todas as propriedades de User obrigatórias.
    O tipo UserUpdate deve permitir que qualquer propriedade de User seja opcional.

*/
interface User {
	id: number;
	name?: string;
	email?: string;
}

const FullUser: Required<User> = {
	id: 5262,
	name: "Carolina",
	email: "carolina@email",
};

const userUpdate: Partial<User> = {
	id: 6855,
};

console.log(FullUser);
console.log(userUpdate);
