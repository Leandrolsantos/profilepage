 // Função para capturar a informação
 function capturarInformacao() {
    // Captura a informação usando o prompt
    var informacaoDigitada = prompt("Olá, qual o seu nome ?");

    // Verifica se a informação não é nula ou vazia
    if (informacaoDigitada !== null && informacaoDigitada !== "") {
      // Exibe a informação na página HTML
      document.getElementById("resultado").innerText = " " + informacaoDigitada;
    } else {
      alert("Você não digitou nenhuma informação.");
    }
  }

  // Chama a função assim que a página é carregada
  window.onload = capturarInformacao;