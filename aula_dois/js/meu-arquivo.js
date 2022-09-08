function ConverterReal() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    var valorEmReal = valorEmDolarNumerico * 5.21;

  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$ " + valorEmReal.toFixed(2);
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function ConverterDolar() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    var valorEmDolar = valorEmDolarNumerico / 5.21;

  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$ " + valorEmDolar.toFixed(2);
    elementoValorConvertido.innerHTML = valorConvertido;
  }

  notalFinalFixada = notaFinal.toFixed(1)