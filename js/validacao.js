  function validaDataNascimento(input) {
      const dataRecebida = new Date(input.value)

      maiorQue18(dataRecebida)
  }

  function maiorQue18(data) {
      const dataAtual = new Date()
  }