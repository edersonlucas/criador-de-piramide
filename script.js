// criaLinha(10);
let inputTamanho = document.querySelector('#tamanhoDaPiramide');
let base = 0;
let altura = 0;
let esquerda = 0;
console.log(altura);
let direita = 0;
let botaoCriar = document.querySelector('#botaoCriar');
// let linhas = document.querySelectorAll('.linha');
botaoCriar.addEventListener('click', function () {
  base = parseInt(inputTamanho.value);
  console.log(base);
  altura = (base + 1) / 2;
  console.log(altura);
  esquerda = altura;
  direita = altura;
  let linhas = document.querySelectorAll('.linha');
  prencherTriangulo(linhas);
});

function criaLinha(quantas) {
  for (let i = 1; i <= quantas; i += 1) {
    let div = document.createElement('div');
    div.className = 'linha';
    document.querySelector('#piramide').appendChild(div);
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
