// Variaveis
let visitas = document.querySelector('#visitas');
let inputTamanho = document.querySelector('#tamanhoDaPiramide');
let piramideDiv = document.querySelector('#piramide');
let base = 0;
let altura = 0;
let esquerda = 0;
let direita = 0;
let botaoCriar = document.querySelector('#botaoCriar');

// Eventos
// Click no botão
botaoCriar.addEventListener('click', fazTudo);
// Enter
inputTamanho.addEventListener('keydown', function (event) {
  if (event.key == 'Enter') {
    fazTudo();
  }
});

// Funcao que faz todo o trabalho
function fazTudo() {
  base = parseInt(inputTamanho.value);
  if (base < 3 || base > 39) {
    inputTamanho.value = '';
    alert('Por favor um valor entre 3 e 39!');
  } else if (base % 2 === 0) {
    inputTamanho.value = '';
    alert('Por favor digite um número impar');
  } else {
    removeLinha();
    base += 1;
    altura = base / 2;
    esquerda = altura;
    direita = altura;
    criaLinha(altura);
    inputTamanho.value = '';
    prencherTriangulo(document.querySelectorAll('.linha'));
  }
}

function removeLinha() {
  piramideDiv.innerHTML = '';
}

function criaLinha(quantas) {
  for (let i = 0; i < quantas; i += 1) {
    let div = document.createElement('div');
    div.className = 'linha';
    piramideDiv.appendChild(div);
  }
}

function prencherTriangulo(linhas) {
  for (let i = 0; i < linhas.length; i += 1) {
    preencheLinha(linhas[i]);
    esquerda -= 1;
    direita += 1;
  }
}

function criarBloco(classe) {
  let bloco = document.createElement('span');
  bloco.className = classe;
  return bloco;
}

function preencheLinha(linhasIndex) {
  for (let a = 1; a < base; a += 1) {
    if (a >= esquerda && a <= direita) {
      linhasIndex.appendChild(criarBloco('bloquinho'));
    } else {
      linhasIndex.appendChild(criarBloco('bloquinho-vazio'));
    }
  }
}

// contador de visitas
window.onload = function () {
  if (localStorage.getItem('visita') === null) {
    localStorage.setItem('visita', JSON.stringify({ visita: 1 }));
    let receber = localStorage.getItem('visita');
    let numero = JSON.parse(receber).visita;
    visitas.innerText = `Visita: ${numero}`;
  } else {
    let receber = localStorage.getItem('visita');
    let numero = JSON.parse(receber).visita + 1;
    localStorage.setItem('visita', JSON.stringify({ visita: numero }));
    visitas.innerText = `Visitas: ${numero}`;
  }
};
