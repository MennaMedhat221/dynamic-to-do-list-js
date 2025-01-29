const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

document.addEventListener('DOMContentLoaded', () => {
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => { 
      if (e.key === 'Enter') {
        addTask();
      }
    });

})

function addTask() {
    let taskText = taskInput.value.trim();
    taskInput.value = '';
    if(taskText !== '' ) {
        let taskItem = document.createElement('li');
        taskItem.textContent = taskText
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-btn');
        removeBtn.textContent = 'Remove'
        taskItem.appendChild(removeBtn)
        taskList.appendChild(taskItem)

        removeBtn.addEventListener('click' , function() {
            taskList.removeChild(taskItem)
        })
       }else {
        alert('Please add task ')
    }
}

