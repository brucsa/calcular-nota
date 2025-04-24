// Valores das Notas
function media() {
    const n1 = Number(document.getElementById("nota1").value)
    const n2 = Number(document.getElementById("nota2").value)
    const n3 = Number(document.getElementById("nota3").value)
    const n4 = Number(document.getElementById("nota4").value)

    // Validar notas
    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)) {
        resultado.innerText = "Por favor, insira notas válidas.";
        resultado.style.color = "red";
        return;
        
    }

    // Calcular Média
    let soma = (n1 + n2 + n3 + n4) / 4

    // Resultado
    const status = soma < 6 ? "REPROVADO" : "APROVADO";
    resultado.innerText = `Sua média é ${soma.toFixed(2)}. Você está ${status}.`;
    resultado.style.color = soma < 6 ? "red" : "green";
}