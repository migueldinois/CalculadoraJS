function Somar(){

    let x = parseFloat(prompt("Qual o primeiro número da soma?", ""));
    // Utilizamos crazes (``) para conseguir colocar variaveis juntamente com strings, e com $ no começo de depois chaves
    alert(`O primeiro numero digitado pelo usuario é ${x}`)
    let y = parseFloat(prompt("Qual o segundo número da soma?", ""));
    alert(`O primeiro numero digitado pelo usuario é ${x}`)
    let soma = x+y;
    MostrarResultado(soma);
};

function Subtrair(){
    let x = parseFloat(prompt("Qual o primeiro número da subtração?", ""));
    alert(`O primeiro numero digitado pelo usuario é ${x}`)
    let y = parseFloat(prompt("Qual o segundo número da subtração?", ""));
    alert(`O primeiro numero digitado pelo usuario é ${x}`)
    let subtrair = x-y;
    MostrarResultado(subtrair);
};

function Dividir(){
    let x = parseFloat(prompt("Qual o primeiro número da Divisão?", ""));
    alert(`O primeiro numero digitado pelo usuario é ${x}`)
    let y = parseFloat(prompt("Qual o segundo número da Divisão?", ""));
    alert(`O primeiro numero digitado pelo usuario é ${x}`)
    let dividir = x / y;
    MostrarResultado(dividir);
};  

function Multiplicar(){
    let x = parseFloat(prompt("Qual o primeiro número da multiplicação?", ""));
    alert(`O primeiro numero digitado pelo usuario é ${x}`)
    let y = parseFloat(prompt("Qual o segundo número da multiplicação?", ""));
    alert(`O primeiro numero digitado pelo usuario é ${x}`)
    let multiplicar = x * y;
    MostrarResultado(multiplicar);
};

function MostrarResultado(resultado){
    document.getElementById('resultado').innerHTML = `<p>Resultado é: ${resultado}</p>`;
    let divResultado = document.getElementById('resultado');
    divResultado.style.display = 'flex'
};