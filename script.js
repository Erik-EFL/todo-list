const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const limpar = document.querySelector('#apaga-tudo');
const clearFinish = document.querySelector('#remover-finalizados');

function mudarCor(event) {
  const color = document.querySelector('.selected');
  if (color != null) {
    color.classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function lineThrough(event) {
  event.target.classList.toggle('completed');
}

function criar() {
  const listAdd = document.querySelector('#lista-tarefas');
  const item = document.createElement('li');
  item.addEventListener('click', mudarCor);
  item.addEventListener('dblclick', lineThrough);
  item.classList.add('item');
  if (input.value === '') {
    alert('Please enter a value');
  } else {
    item.innerHTML = input.value;
    listAdd.appendChild(item);
  }
  input.value = '';
}

function limparLista() {
  const list = document.querySelectorAll('.item');
  for (let i = 0; i < list.length; i += 1) {
    list[i].parentElement.removeChild(list[i]);
  }
}

function FinishClear() {
  const completed = document.querySelectorAll('.completed');
  for (let i = 0; i < completed.length; i += 1) {
    completed[i].parentElement.removeChild(completed[i]);
  }
}

limpar.addEventListener('click', limparLista);
clearFinish.addEventListener('click', FinishClear);
button.addEventListener('click', criar);
