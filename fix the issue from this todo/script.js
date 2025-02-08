const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

function addTodo() {
  const newTodo = input.value.trim();

  if (newTodo) {
    const li = document.createElement('li');
    li.textContent = newTodo;

    li.addEventListener('click', function () {
      todoList.removeChild(li);
    });

    todoList.appendChild(li);
    input.value = '';
  } else {
    console.log('Please enter a task!');
  }
}
