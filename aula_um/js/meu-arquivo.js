
function Calcular() {
    var bim1 = parseInt(document.getElementById("bim1").value);
    var bim2 = parseInt(document.getElementById("bim2").value);
    var bim3 = parseInt(document.getElementById("bim3").value);
    var bim4 = parseInt(document.getElementById("bim4").value);
    var notaFinal = (bim1 + bim2 + bim3 + bim4) / 4;
    var notalFinalFixada = notaFinal.toFixed(1);
    var resultado = document.getElementById("resultado");

    resultado.innerHTML = "A média final do(a) aluno(a) foi " + notalFinalFixada + ".";
   
}



var notaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4

var notaFixada = notaFinal.toFixed(1)

console.log("Bem vindo " + nome)
console.log(notaFixada)

// isso é um comentário