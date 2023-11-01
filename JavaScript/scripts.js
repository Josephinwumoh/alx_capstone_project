import { validateform, getMovementfields, reset } from './js/manage.js'

const taskBtn = document.querySelector("task-form-btn");
const tasks = [];

taskBtn.addEventListener("click", function() {
    const isvalidated = validateform();

    if (!isvalidated)
    return;

    const fieldValues = getMovementfields();
    reset();
    
    tasks.push(fieldValues);
    console.log(tasks)
    
    renderTaskItems(tasks)
})


const renderTaskItems = (tasks) => {
    const showDisplay = document.querySelector('#ShowTasks');
    showDisplay.innerHTML = '';
    for (let itemPosition = 0; itemPosition < tasks.length; itemPosition++)
    {
        const task = tasks.itemPosition;
        const item = createTaskItem(task)
        showDisplay.appendChild(item)
    }

}

const createTaskItem = (item) => {

    const papercardDiv = document.createElement('div');
    papercardDiv.setAttribute('class', 'paper-card');


    const imageGroupDiv = document.createElement('div');
    imageGroupDiv.setAttribute('class', 'paper-img-group');

    const imageTag = document.createElement('img');
    imageTag.setAttribute('src', 'Assests/checklist-1622517_1920.jpg');
    imageTag.setAttribute('alt', 'Check Icon');
    imageTag.setAttribute('style', 'width', '120px');

    imageGroupDiv.appendChild(imageTag)

    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox');
    imageGroupDiv.appendChild(checkbox);

    const paperBodyDiv = document.createElement('div');
    paperBodyDiv.setAttribute('class', 'paper-body');

    const title = document.createElement('h4');
    title.textContent = 'item.Tracker Name';

    paperBodyDiv.appendChild(title);

    const pluralDiv = document.createElement('div');
    pluralDiv.setAttribute('class', 'plural');

    const dateTimeplural = document.createElement('p');
    dateTimeplural.textContent = '${item.date}: ${item.time}';

    const taskStatusplural = document.createElement('p');
    taskStatusplural.textContent = 'Task Status: ${item.taskStatus';

    pluralDiv.appendChild(dateTimeplural);
    pluralDiv.appendChild(taskStatusplural);

    paperBodyDiv.appendChild(pluralDiv)

    const buttonGroupDiv = document.createElement('div');
    buttonGroupDiv.setAttribute('class', 'btn-group');

    const newButton = document.createElement('button');
    newButton.textContent = 'New';
    newButton.setAttribute('class', 'btn-add')

    const completedButton = document.createElement('button');
    completedButton.textContent = 'Completed';
    completedButton.setAttribute('class', 'btn-approved')

    const deletedButton = document.createElement('button');
    deletedButton.textContent = 'Deleted';
    deletedButton.setAttribute('class', 'btn-cancel');

    buttonGroupDiv.appendChild(newButton)
    buttonGroupDiv.appendChild(completedButton)
    buttonGroupDiv.appendChild(deletedButton)

    paperBodyDiv.appendChild(buttonGroupDiv);

    papercardDiv.appendChild(imageGroupDiv)
    papercardDiv.appendChild(paperBodyDiv);

    return papercardDiv;


}