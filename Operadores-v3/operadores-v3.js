function Somar(){
    const verifica01 = document.getElementById('valor01').value;
    const verifica02 = document.getElementById('valor02').value;

    
    if(verifica01 === '' || verifica02 === ''){
        alert("Preencha todos os campos")
        
    }else {
        let v1 = parseFloat(document.getElementById('valor01').value);
        let v2 = parseFloat(document.getElementById('valor02').value);
        document.getElementById('resultado').style.display = 'flex';
        const resultado = document.getElementById('resultado');
        resultado.innerHTML =
        `
        <ul>
            <li>Operação: <span>SOMA</span> </li>
            <li>Valor 01 digitado pelo usuário: <span> ${v1} </span> </li>
            <li>Valor 02 digitado pelo usuário: <span>${v2}</span> </li>       
            <li>O resultado da operação é ${v1} + ${v2} = <span>${v1 + v2}</span> </li>
        </ul>
        `
    }

};

function Subtrair(){
    const verifica01 = document.getElementById('valor01').value;
    const verifica02 = document.getElementById('valor02').value;

    
    if(verifica01 === '' || verifica02 === ''){
        alert("Preencha todos os campos")
        
    }else {
        let v1 = parseFloat(document.getElementById('valor01').value);
        let v2 = parseFloat(document.getElementById('valor02').value);
        document.getElementById('resultado').style.display = 'flex';
        const resultado = document.getElementById('resultado');
        resultado.innerHTML =
        `
        <ul>
            <li>Operação: <span>SUBTRAÇÃO</span> </li>
            <li>Valor 01 digitado pelo usuário: <span> ${v1} </span> </li>
            <li>Valor 02 digitado pelo usuário: <span>${v2}</span> </li>       
            <li>O resultado da operação é ${v1} - ${v2} = <span>${v1 - v2}</span> </li>
        </ul>
        `
    }

};


function Multiplicar(){
    const verifica01 = document.getElementById('valor01').value;
    const verifica02 = document.getElementById('valor02').value;

    
    if(verifica01 === '' || verifica02 === ''){
        alert("Preencha todos os campos")
        
    }else {
        let v1 = parseFloat(document.getElementById('valor01').value);
        let v2 = parseFloat(document.getElementById('valor02').value);
        document.getElementById('resultado').style.display = 'flex';
        const resultado = document.getElementById('resultado');
        resultado.innerHTML =
        `
        <ul>
            <li>Operação: <span>MULTIPLICAR</span> </li>
            <li>Valor 01 digitado pelo usuário: <span> ${v1} </span> </li>
            <li>Valor 02 digitado pelo usuário: <span>${v2}</span> </li>       
            <li>O resultado da operação é ${v1} x ${v2} = <span>${v1 * v2}</span> </li>
        </ul>
        `
    }

};


function Dividir(){
    const verifica01 = document.getElementById('valor01').value;
    const verifica02 = document.getElementById('valor02').value;

    
    if(verifica01 === '' || verifica02 === ''){
        alert("Preencha todos os campos")
        
    }else {
        let v1 = parseFloat(document.getElementById('valor01').value);
        let v2 = parseFloat(document.getElementById('valor02').value);
        document.getElementById('resultado').style.display = 'flex';
        const resultado = document.getElementById('resultado');
        resultado.innerHTML =
        `
        <ul>
            <li>Operação: <span>DIVIDIR</span> </li>
            <li>Valor 01 digitado pelo usuário: <span> ${v1} </span> </li>
            <li>Valor 02 digitado pelo usuário: <span>${v2}</span> </li>       
            <li>O resultado da operação é ${v1} / ${v2} = <span>${v1 / v2}</span> </li>
        </ul>
        `
    }

};

function Porcentagem(){
    const verifica01 = document.getElementById('valor01').value;
    const verifica02 = document.getElementById('valor02').value;

    
    if(verifica01 === '' || verifica02 === ''){
        alert("Preencha todos os campos")
        
    }else {
        let v1 = parseFloat(document.getElementById('valor01').value);
        let v2 = parseFloat(document.getElementById('valor02').value);
        document.getElementById('resultado').style.display = 'flex';
        const resultado = document.getElementById('resultado');
        resultado.innerHTML =
        `
        <ul>
            <li>Operação: <span>MULTIPLICAR</span> </li>
            <li>Valor 01 digitado pelo usuário: <span> ${v1} </span> </li>
            <li>Valor 02 digitado pelo usuário: <span>${v2}</span> </li>       
            <li>O resultado da operação é ${v1}  ${v2} = <span>${(v1 * v2) / 100}</span> </li>
        </ul>
        `
    }

};



function Limpar(){
    // Limpar o resultado (div no caso)
    document.getElementById('resultado').style.display = 'none';
    // Limpar campos de valores
    document.getElementById('valor01').value = ''
    document.getElementById('valor02').value = ''

};
