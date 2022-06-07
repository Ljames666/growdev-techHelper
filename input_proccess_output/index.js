let nota1 = document.getElementById('n1Input');
let nota2 = document.getElementById('n2Input');
let nota3 = document.getElementById('n3Input');

let enviar = document.getElementById('notaSend');

let calcular = document.getElementById('calcMedia');

let arrayNotas = [];

console.log('arrayNotas', arrayNotas);
let mediaInput = document.getElementById('mediaInput');
let statusInput = document.getElementById('statusInput');
const leNotas = () => {
  arrayNotas.push(parseInt(nota1.value));
  document.getElementById('n1').style.display = 'none';
  document.getElementById('n2').style.display = 'block';
};
const leNotas2 = () => {
  arrayNotas.push(parseInt(nota2.value));
  document.getElementById('n2').style.display = 'none';
  document.getElementById('n3').style.display = 'block';
};
const leNotas3 = () => {
  arrayNotas.push(parseInt(nota3.value));
  document.getElementById('inputs').style.display = 'none';
  document.getElementById('calc').style.display = 'block';
};

calcular.addEventListener('click', () => {
  let media = calcularMedia();
  document.getElementById('result').style.display = 'block';
  mediaInput.innerHTML = media;
  if (media >= 7) {
    statusInput.innerText = 'Aprovado';
  } else {
    statusInput.innerText = 'Reprovado';
  }
});
console.log('arrayNotas1', arrayNotas);
const calcularMedia = () => {
  console.log('arrayNotas2', arrayNotas);
  let media = 0;
  for (let i = 0; i < arrayNotas.length; i++) {
    media += arrayNotas[i];
  }
  media = media / arrayNotas.length;
  return media;
}; //Funcion para calcular la media

document.getElementById('btn').addEventListener('click', () => window.location.reload());
