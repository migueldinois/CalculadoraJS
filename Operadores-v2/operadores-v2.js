


function Somar() {

    // Converter o valor inserido no formulário (prompt) em float (ponto flutuante). 
    // Let funciona apenas no escopo da função.
    let v1 = parseFloat(prompt('Digite o valor 01:'));
    let v2 = parseFloat(prompt('Digite o valor 02:'));
    // Exibir a div resultado. Quando o site carrega ela está com display: none;
    document.getElementById('resultado').style.display = 'flex';

    // Escrever o resultado no documento HTML, utilizando o template de strings (entre crase frase ${variável})
    const escreverCodigo =  document.getElementById('resultado')
    escreverCodigo.innerHTML= `
    <h2>Memórida de Cálculo</h2>
    <ul>
        <li>Operação: SOMA </li>
        <li>Valor 01 digitado pelo usuário: ${v1}</li>
        <li>Valor 02 digitado pelo usuário:${v2}</li>       
        <li>O resultado da operação é ${v1} + ${v2} =   ${v1 + v2}</li>
    </ul>
    `;    
    console.log(escreverCodigo)
}

function Subtrair() {

    // Converter o valor inserido no formulário (prompt) em float (ponto flutuante). 
    // Let funciona apenas no scopo da função.
    let v1 = parseFloat(prompt('Digite o valor 01:'));
    let v2 = parseFloat(prompt('Digite o valor 02:'));
    // Exibir a div resultado. Quando o site carrega ela está com display: none;
    document.getElementById('resultado').style.display = 'flex';

    // Escrever o resultado no documento HTML.
    document.getElementById('resultado').textContent = `O resultado é ${v1 - v2}.`;    
}

function Multiplicar() {

    // Converter o valor inserido no formulário (prompt) em float (ponto flutuante). 
    // Let funciona apenas no scopo da função.
    let v1 = parseFloat(prompt('Digite o valor 01:'));
    let v2 = parseFloat(prompt('Digite o valor 02:'));
    // Exibir a div resultado. Quando o site carrega ela está com display: none;
    document.getElementById('resultado').style.display = 'flex';

    // Escrever o resultado no documento HTML.
    document.getElementById('resultado').textContent = `O resultado é ${v1 * v2}.`;    
}

function Dividir() {

    // Converter o valor inserido no formulário (prompt) em float (ponto flutuante). 
    // Let funciona apenas no scopo da função.
    let v1 = parseFloat(prompt('Digite o valor 01:'));
    let v2 = parseFloat(prompt('Digite o valor 02:'));
    // Exibir a div resultado. Quando o site carrega ela está com display: none;
    document.getElementById('resultado').style.display = 'flex';

    // Escrever o resultado no documento HTML.
    document.getElementById('resultado').textContent = `O resultado é ${v1 / v2}.`;    
}

function Porcentagem() {

    // Converter o valor inserido no formulário (prompt) em float (ponto flutuante). 
    // Let funciona apenas no scopo da função.
    let v1 = parseFloat(prompt('Digite o valor 01:'));
    let v2 = parseFloat(prompt(`Quantos % de ${v1} você quer exibir?`));
    // Exibir a div resultado. Quando o site carrega ela está com display: none;
    document.getElementById('resultado').style.display = 'flex';

    // Escrever o resultado no documento HTML.
    document.getElementById('resultado').textContent = `O resultado é ${(v1*v2)/100}.`;    
}

function Limpar() {
    // O elemento div resulta será escondido.
    document.getElementById('resultado').style.display = 'none';
}





