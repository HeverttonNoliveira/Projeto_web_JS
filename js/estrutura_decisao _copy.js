//utilizando o switch
console.log("Escolha uma fruta:")
console.log("1-Banana \n 2-Maça\n 2-Morango\n 4-Sair\n")

let opcao,fruta
opcao = 2

switch(opcao){
    case 1: fruta = "Banana"
    break
    case 2: fruta = "Maça"
    break
    case 3: fruta = "Morango"
    break
    default: fruta = "Sair"
    break
}

console.log(`Você escolheu ${fruta}`)

