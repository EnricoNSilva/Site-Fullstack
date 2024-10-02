let randomico = Math.floor(Math.random() * 100); // gera o número 
let tentativasmaiores = []; // Armazena números maiores
let tentativasmenores = []; // Armazena números menores

function verificador() {
    let num = parseInt(document.getElementById('num').value);
    let resultado = document.getElementById('result');
    let maiores = document.getElementById('gran');
    let menores = document.getElementById('peq');

    if (isNaN(num)) {
        resultado.innerHTML = 'Por favor, insira um número válido';
        return;
    }
    if (num === randomico) {
        resultado.innerHTML = 'Número igual';
        resultado.style.color = 'green';
    } else if (num > randomico) {
        resultado.innerHTML = 'Número muito grande';
        resultado.style.color = 'red';

        if (!tentativasmaiores.includes(num)) {
            tentativasmaiores.push(num); // Adiciona ao array de maiores
            tentativasmaiores.sort((a, b) => a - b); // Ordena o array
            maiores.innerHTML = tentativasmaiores.join(', '); // Exibe os números
        }
    } else if (num < randomico) {
        resultado.innerHTML = 'Número muito pequeno';
        resultado.style.color = 'red';

        if (!tentativasmenores.includes(num)) {
            tentativasmenores.push(num); 
            tentativasmenores.sort((a, b) => a - b);
            menores.innerHTML = tentativasmenores.join(', '); 
        }
    }
}

