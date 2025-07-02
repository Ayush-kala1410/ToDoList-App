function addTask() {
  const input = document.getElementById('task-input');
  const taskText = input.value.trim();

  if (taskText === '') {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = taskText;

  const btnContainer = document.createElement('div');
  btnContainer.className = 'buttons';

  const doneBtn = document.createElement('button');
  doneBtn.textContent = 'Done';
  doneBtn.className = 'done';
  doneBtn.onclick = () => {
    li.classList.toggle('completed');
  };

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.className = 'edit';
  editBtn.onclick = () => {
    const newTask = prompt("Edit task:", span.textContent);
    if (newTask !== null && newTask.trim() !== '') {
      span.textContent = newTask.trim();
    }
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete';
  deleteBtn.onclick = () => {
    li.remove();
  };

  btnContainer.appendChild(doneBtn);
  btnContainer.appendChild(editBtn);
  btnContainer.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnContainer);

  document.getElementById('task-list').appendChild(li);

  input.value = '';
}
