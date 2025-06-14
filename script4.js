let tasks = [];

function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
  if (taskText === '') return;

  const task = {
    id: Date.now(),
    text: taskText,
    completed: false,
    createdAt: new Date().toLocaleString(),
    completedAt: null,
  };

  tasks.push(task);
  input.value = '';
  renderTasks();
}

function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.completed = !task.completed;
    task.completedAt = task.completed ? new Date().toLocaleString() : null;
    renderTasks();
  }
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  renderTasks();
}

function renderTasks() {
  const pendingList = document.getElementById('pendingList');
  const completedList = document.getElementById('completedList');
  pendingList.innerHTML = '';
  completedList.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>
        ${task.text}
        <div class="task-meta">Added: ${task.createdAt}</div>
        ${task.completed ? `<div class="task-meta">Completed: ${task.completedAt}</div>` : ''}
      </span>
      <div>
        <button onclick="toggleTask(${task.id})">
          ${task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onclick="deleteTask(${task.id})">Delete</button>
      </div>
    `;
    (task.completed ? completedList : pendingList).appendChild(li);
  });
}
