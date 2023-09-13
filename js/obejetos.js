//criando obejetos
const Car = {
	marca: "Aston Martin",
	cor: "Preto",
	modelo: "Vulcan",
	km: 1500,
	combustivel: "hibrido",
	acelera: 200,

	velocidade: function (acelera) {
		return this.acelera + 1;
	},
};

//usar this ao inves da variavel do obj...
let vel = this.velocidade();
console.log(`Acelera,${vel}`);

// const Game ={
//     Desenvolvedora: "Capcom",
//     Franquia: "Moster Hunter",
//     Jogos:"6 jogos",
//     Maior:"Monster Hunter Word"
// }

// console.log(`A criadora da franquia ${Game.Franquia}, é a empresa japonesa ${Game.Desenvolvedora}\n
// E possui ${Game.Jogos} jogos no total, e seu mas conhecido é ${Game.Maior}`)

