//Criando arrays
const carro = ["Fusca", "Ferrari", "Auldi", "BMW", "Bugatti"];
console.log(`Meu carro é ${carro[3]}`);

const game = ["overwhat", "call of duty", "Fifa", "Forza", "Resident evil"];
console.log(`Meu jogo favorito é ${game[4]}`);

//criar o array e inserir os elementos
const car = [];
car[0] = "BMW";
car[1] = "Maverick";
car[2] = "Porche";
car[3] = "Aston Martin";

console.log(`Carro escolhido foi ${car[0]}`);

//Percorrendo arrays com estruturas de repetição

const frutas = ["Banana", "Maça", "Laranja", "Abacaxi", "Uva", "Abacate"];

for (let i = 0; i < frutas.length; i++) {
	console.log(`Sua fruta ${frutas[i]}`);
}

const numeros = [50, 2, 9, 85, 95, 6, 1, 8];
let retorno = numeros.toString();
console.log(`${retorno}`);
