let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


//let titulo= document.querySelector ('h1');
//título.innerHTML=('jogo do número secreto')
// document.querySelector vai chamar a tag h1 do html
//titulo.innerHTML= ('Jogo do número secreto');
// o innerHTML vai modificar o conteudo sem ter que mudar o html
//let parágrafo= document.querySelector ('p');
//parágrafo.innerHTML=('Escolha um número de 1 a 10');

//  outra forma de se fazer:
function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}
function exibirMensgaemInicial() {
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número de 1 a 10');
}
exibirMensgaemInicial();

function verificarChute() {
  let chute = document.querySelector('input').value;

  if (chute == numeroSecreto) {
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativa = `Você acertou com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela('p', `${mensagemTentativa}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
    //document.getElementById Retorna a referência do elemento através do seu ID
    //removeattribute serve para remover um atributo no caso o disabled sem mexer no html
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', 'O número secreto é menor');
    } else {
      exibirTextoNaTela('p', 'O número secreto é maior');
    }
    tentativas++;
    limparCampo();
  }
}

// o console log vai ajudar a chegar na resposta
//o value é usado para expressar o comando apenas com o valor e não com o código em si
function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * 10 + 1);
  let quantidadeDeElementonaLista = listaDeNumerosSorteados.length;
  if (quantidadeDeElementonaLista == 10) {
    listaDeNumerosSorteados = [];

  }
  //quando todos números forem sorteados o joo começa dnv

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}
//incudes vai verificar um item
//push vai inserir um item na lista, coloca no final da lista
// return é usado para enviar de volta um valor específico quando a função é chamada. 

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}
function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio;
  limparCampo();
  tentativas = 1;
  exibirMensgaemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
  //setAttribute hablilita o que tava desabilitado
}