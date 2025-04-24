// Capturar os valores das notas e armazenar em um array
const notas = [
    Number(document.getElementById("nota1").value),
    Number(document.getElementById("nota2").value),
    Number(document.getElementById("nota3").value),
    Number(document.getElementById("nota4").value)
];

// Referência ao elemento de resultado
const resultado = document.getElementById("resultado");

// Validar notas
if (notas.some(nota => isNaN(nota) || nota < 0 || nota > 10)) {
    resultado.innerText = "Por favor, insira notas válidas entre 0 e 10.";
    resultado.style.color = "red";
    return;
}

// Calcular Média
const soma = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;

// Determinar status (APROVADO ou REPROVADO)
const status = soma < 6 ? "REPROVADO" : "APROVADO";

// Exibir o resultado
resultado.innerText = `Sua média é ${soma.toFixed(2)}. Você está ${status}.`;
resultado.style.color = soma < 6 ? "red" : "green";