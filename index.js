var si= Number(prompt('Digite seu saldo inicial:'))
var vc= Number(prompt('Digite o valor da compra que você deseja realizar:'))
let sf= si-vc;
if(vc<=si){
    alert('A compra ocorrreu corretamente. Seu saldo agora é de ' +sf)
}
else if (vc>si){
    alert('A compra deu errado. Seu saldo é insuficiente.')
}
var n1= Number(prompt ('Digite um número inteiro'))
var n2= Number(prompt ('Digite outro número inteiro agora'))
var sinal= prompt ('Digite um desses sinais para realizar alguma operação com esses 2 números: +(subtração) -(subtração) *(multiplicação) /(divisão)')
let a= n1+n2;
let b= n1-n2;
let c= n1*n2;
let d= n1/n2;
if (sinal==='+'){
    alert('O resultado é ' +a)
}
else if (sinal==='-'){
    alert('O resultado é ' +b)
}
if (sinal==='*'){
    alert('O resultado é ' +c)
}
else if(sinal==='/'){
    alert('O resultado é ' +d)
}
alert('Agora você digitará alguns numéros e irá aparecer a soma e a média deles')
var n01= Number(prompt ('1° número'))
var n02=Number(prompt ('2° número'))
var n03=Number(prompt ('3° número'))
var n04=Number(prompt ('4° número'))
let soma=n01+n02+n03+n04;
let média=soma/4
alert('A soma é ' +soma)
alert('A média é ' +média)
