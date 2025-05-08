export function addTodo(input, list) {
    const text = input.value.trim();
    if (!text) return;
  
    const li = document.createElement('li');
  
    const task = document.createElement('span');
    task.textContent = text;
  
    const closeBtn = document.createElement('span');
    closeBtn.textContent = '×';
    closeBtn.className = 'close-btn';
    closeBtn.addEventListener('click', () => li.remove());
  
    li.appendChild(task);
    li.appendChild(closeBtn);
    list.appendChild(li);
  
    input.value = '';
  }
  