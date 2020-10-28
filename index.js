// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯

import Task from './Task.js';
import UI from './UI.js';

const ui = new UI();

document.querySelector('.AddTaskBtn').addEventListener('click', (e) => {

    const taskTitle = document.querySelector('#newtaskID').value;

    if(taskTitle.length > 0){
        const task = new Task(taskTitle);
    
        ui.addToUI(task);

        ui.resetForm();
    }
});

document.querySelector('.task-list').addEventListener('click', (e) =>{
    if(e.target.className.includes('task__op_delete')){
        ui.deleteTask(e);
    }

    if(e.target.className.includes('task-check')){
        ui.checkBox(e);
    }

})













