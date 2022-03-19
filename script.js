// criaLinha(10);
let visitas = document.querySelector('#visitas');
let inputTamanho = document.querySelector('#tamanhoDaPiramide');
let piramideDiv = document.querySelector('#piramide');
let base = 0;
let altura = 0;
let esquerda = 0;
let direita = 0;
let botaoCriar = document.querySelector('#botaoCriar');
// let linhas = document.querySelectorAll('.linha');
botaoCriar.addEventListener('click', fazTudo);

inputTamanho.addEventListener('keydown', function (event) {
  if (event.key == 'Enter') {
    fazTudo();
  }
});

function fazTudo() {
  base = parseInt(inputTamanho.value);
  if (base < 6 || base > 70) {
    inputTamanho.value = '';
    alert('Por favor um valor entre 6 e 70!');
  } else {
    removeLinha();
    if (base % 2 === 0) {
      base += 2;
      altura = base / 2;
      esquerda = altura;
      direita = altura;
      criaLinha(altura);
      let linhas = document.querySelectorAll('.linha');
      inputTamanho.value = '';
      prencherTriangulo(linhas);
    } else {
      base += 1;
      altura = base / 2;
      esquerda = altura;
      direita = altura;
      criaLinha(altura);
      let linhas = document.querySelectorAll('.linha');
      inputTamanho.value = '';
      prencherTriangulo(linhas);
    }
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

// prencherTriangulo(linhas);

function prencherTriangulo(linhas) {
  for (let i = 0; i <= linhas.length; i += 1) {
    preencheLinha(linhas[i]);
    direita += 1;
    esquerda -= 1;
  }
}

function criarBloco(classe) {
  let bloco = document.createElement('span');
  bloco.className = classe;
  return bloco;
}

function preencheLinha(linhasIndex) {
  for (let a = 1; a <= base; a += 1) {
    if (a >= esquerda && a <= direita) {
      let bloco = criarBloco('bloquinho');
      linhasIndex.appendChild(bloco);
    } else {
      linhasIndex.appendChild(criarBloco('bloquinho-vazio'));
    }
  }
}

// contador de visitas
window.onload = function () {
  if (localStorage.getItem('visita') === null) {
    let visita = { visita: 1 };
    localStorage.setItem('visita', JSON.stringify(visita));
    let receber = localStorage.getItem('visita');
    let numero = JSON.parse(receber).visita;
    visitas.innerText = `Visita: ${numero}`;
  } else {
    let receber = localStorage.getItem('visita');
    let valor = JSON.parse(receber).visita;
    valor += 1;
    visita = { visita: valor };
    localStorage.setItem('visita', JSON.stringify(visita));
    let numero = JSON.parse(receber).visita;
    numero += 1;
    console.log('aqui');
    visitas.innerText = `Visitas: ${numero}`;
  }
};
