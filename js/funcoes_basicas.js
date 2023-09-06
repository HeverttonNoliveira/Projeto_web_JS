//funções

function somaNumero(){
    let num1 = 10, num2 = 20, resp =0
    resp = num1 + num2
    console.log(`O resultado da soma é ${resp}`)

}
somaNumero();

//execução função com dois parâmetros
function somaDeDoisNumero(num3,num4){
    let resp = 0
    resp = num3 + num4
    console.log(`A soma vai ser de ${resp}`)

}
somaDeDoisNumero(30,40)

//execução função com parâmetros e com return
function somanum(num5,num6){
    let resp = 0
    resp = num5+num6
    return resp;
}
let resposta = somanum(6,6)
console.log(`O resultado é ${resposta}`)

//Outro modo
function somanum1(num6,num7){
    let resp=0
    resp = num6+num7
    return resp;
}
somanum1(8,8)
console.log(`A resposta é de ${somanum1(8,8)+somanum1(8,8)}`)



//com caracter
function somacaracter(name1,name2){
    let resp=0
    resp = name1+name2
    return resp;
}
somacaracter("Hevertton","Oliveira")
console.log(`Meu name é ${somacaracter("Hevertton","Oliveira")}`)

//Modo resumido
function somaNumeros(num8,num9){
    return (num8+num9)
}
somaNumeros(5,5)
console.log(`Resposta: ${somaNumeros(5,5)}`)


