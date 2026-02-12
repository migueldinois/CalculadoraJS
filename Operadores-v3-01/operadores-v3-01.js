// Pegando os inputs
const v1 = document.getElementById('valor01');
const v2 = document.getElementById('valor02');

// Pegando a div do resultado
const resultado = document.getElementById('resultado');

const operacao = ["SOMA", "SUBTRAIR", "MULTIPLICAR", "DIVIDIR", "PORCENTAGEM", "DESCONTO", "ACRESCIMO"]

function somar() {
    // Pegando valor em number dos inputs
    const valorv1 = parseFloat(v1.value);
    const valorv2 = parseFloat(v2.value);
    // isNan serve para dizer "Não é um numero" literalmente "Not-a-Number"
    if (isNaN(valorv1) || isNaN(valorv2)) {
        alert("Preencha todos os campos")

    } else {
        mensagemResultado(0, valorv1, valorv2)
    }

};

function subtrair() {


};


function multiplicar() {

};


function dividir() {

};

function porcentagem() {

};

function calcPagVista() {

};

function mensagemResultado(numero_operacao, valor01, valor02){ 
    
    let conta = 0;
    if (numero_operacao === 0) {
        conta = valor01 + valor02;
    }
    console.log(numero_operacao, conta)
    
    resultado.style.display = 'flex'
    resultado.innerHTML =
        `
    <ul>
        <li>Operação: <span>${operacao[numero_operacao]}</span> </li>
        <li>Valor 01 digitado pelo usuário: <span> ${valor01} </span> </li>
        <li>Valor 02 digitado pelo usuário: <span>${valor02}</span> </li>       
        <li>O resultado da operação é: <span>${conta}</span> </li>
    </ul>
    `


};


function limpar() {
    // Limpar o resultado (div no caso)
    resultado.style.display = 'none'
    // Limpar campos de valores
    v1.value = ''
    v2.value = ''

};
