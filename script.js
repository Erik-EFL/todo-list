const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const limpar = document.querySelector('#apaga-tudo');
const saveTodosButton = document.querySelector('#salvar-tarefas');
const removeSelected = document.querySelector('#remover-selecionado');
const moveUp = document.querySelector('#mover-cima');
const moveDown = document.querySelector('#mover-baixo');
const clearFinish = document.querySelector('#remover-finalizados');

function list() {
  return document.querySelector('#lista-tarefas');
}

function selected() {
  return document.querySelector('li.selected');
}

function saveTodos() {
  const save = list();
  localStorage.setItem('list', save.innerHTML);
}

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
  const item = document.createElement('li');
  item.addEventListener('click', mudarCor);
  item.addEventListener('dblclick', lineThrough);
  item.classList.add('item');
  if (input.value === '') {
    alert('Please enter a value');
  } else {
    item.innerHTML = input.value;
    const newItem = list();
    newItem.appendChild(item);
  }
  input.value = '';
}

function limparLista() {
  const listAll = document.querySelectorAll('.item');
  for (let i = 0; i < listAll.length; i += 1) {
    listAll[i].parentElement.removeChild(listAll[i]);
    saveTodos();
  }
}

function FinishClear() {
  const completed = document.querySelectorAll('.completed');
  for (let i = 0; i < completed.length; i += 1) {
    completed[i].parentElement.removeChild(completed[i]);
    saveTodos();
  }
}

/* Bonus */

function addSavedTodos() {
  const AddList = list();
  AddList.innerHTML = localStorage.getItem('list');
  const items = document.querySelectorAll('.item');
  for (let i = 0; i < items.length; i += 1) {
    items[i].addEventListener('click', mudarCor);
    items[i].addEventListener('dblclick', lineThrough);
  }
}

function moveUpItem() {
  const selectedUp = selected();
  if (!selectedUp) return null;
  const previousItem = selectedUp.previousElementSibling;
  if (previousItem) {
    selectedUp.parentElement.insertBefore(selectedUp, previousItem);
    saveTodos();
  }
}

function moveDownItem() {
  const selectedDown = selected();
  if (!selectedDown) return null;
  const nextItem = selectedDown.nextElementSibling;
  if (nextItem) {
    selectedDown.parentElement.insertBefore(nextItem, selectedDown);
    saveTodos();
  }
}

function removeSelectedItem() {
  const removeSelection = selected();
  removeSelection.remove();
  saveTodos();
}

/* Click */

limpar.addEventListener('click', limparLista);
clearFinish.addEventListener('click', FinishClear);
button.addEventListener('click', criar);
saveTodosButton.addEventListener('click', saveTodos);
removeSelected.addEventListener('click', removeSelectedItem);
moveUp.addEventListener('click', moveUpItem);
moveDown.addEventListener('click', moveDownItem);

/* Buttons press */

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    criar();
  }
});

window.onload = () => {
  addSavedTodos();
};
