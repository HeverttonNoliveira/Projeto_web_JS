//estrutura de decisão
// if(){}

let a = 10;
let b = 20;

// if estrutura basica
if (b > a) {
	console.log("É verdadeiro");
}

//if aninhado

// if(true){
//     if(true){
//         if(true){
//             console.log("Entrou na estrutura")
//         }
//     }
// }

if (a < b) {
	if (b > a) {
		if (a != b) {
			console.log("É verdadeiro");
		}
	}
}

// Dia 05/09

let c = 30;
let d = 40;

if (d > c) {
	console.log("É verdadeiro");
} else {
	console.log("É falso");
}

//Utilizando else if
let saudacao, periodo;
periodo = 10;

console.log(`Digite: \n 1-bom dia \n 2-boa tarde \n 3-boa noite`);

if (periodo === 1) {
	saudacao = "bom dia";
} else if (periodo === 2) {
	saudacao = "boa tarde";
} else if (periodo === 3) {
	saudacao = "boa noite";
} else {
	saudacao = "Nenhum periodo selecionado";
}

console.log(`E ai, ${saudacao}`);
