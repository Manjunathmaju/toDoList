// (() => {
const values = {
    totalTask: 0,
    taskDone: 0,
    taskPending: 0,
    get getTotalTasks() { return this.totalTask; },
    get getTaskCompleted() { return this.taskDone; },
    get getTaskPending() { return this.taskPending; },
    set setTotalTasks(value) { this.totalTask = value; },
    set setTaskCompleted(value) { this.totalTask = value; },
    set setTotalTask(value) { return this.totalTask; }
};

const app = document.querySelector('.app');

const domElements = {
    textBtn: app.querySelector('.addBtn'),
    newTask: app.querySelector('.newTask'),
    taskHistory: app.querySelector('.getHistoryTask'),
    taskLists: app.querySelector('.taskList'),
    totalCount: app.querySelector('.totalCount'),
    completedCount: app.querySelector('.completedCount'),
    pendingCount: app.querySelector('.pendingCount'),
    taskHistory: app.querySelector('.taskHistory'),
    get getTextBtn() { return this.textBtn },
    get getnewText() { return this.newTask },
    get gettaskHistory() { return this.taskHistory },
    get getTaskLists() { return this.taskLists },
    get getTotalCount() { return this.totalCount },
    get getCompletedCount() { return this.completedCount },
    get getPendingCount() { return this.pendingCount },
    get getTaskHistory() { return this.taskHistory }
};

function getlocalData() {
    const allTasks = JSON.parse(localStorage.getItem('myTasks'));
}

function setTaskToLocal(tasks) {
    localStorage.setItem('myTasks', JSON.stringify(tasks));
}
// window.onload = getLocalScorage();
// domElements.getTextBtn.addEventListener('click', init);
// domRender.getHistoryTasks.addEventListener('click', getLocalScorage);
function uniqueValue() { return Date.now() }
function localData() { return { [uniqueValue()]: { id: uniqueValue(), task: 'value', status: false } } };


function init() {
    registerEventHandlers();

}

function registerEventHandlers() {
    buttonsEventHandler();
    // localStorageHandler();
}

function localStorageHandler() {
    const dataToLocal = localData();
}

function buttonsEventHandler() {
    domElements.getTextBtn.addEventListener('click', onAddTaskClick)
    domElements.getTaskHistory.addEventListener('click',)

}

function getNewTask() {
    return domElements.getnewText.value;

}

function onAddTaskClick() {
    const value = getNewTask();
    if (value) {
        const element = getTaskNode(document.createTextNode(value));
        insertTaskIntoDOM(element);
    }
}

function getTaskNode(value) {
    return prepareTask(value);
}

function prepareTask(value) {
    const liElement = createEleme('li', { 'class': 'task' });
    const taskDelBtn = createEleme('input', { 'type': 'button', 'class': 'taskDeleteBtn', 'value': 'delete' });
    const taskcheckbox = createEleme('input', { 'type': 'checkbox', 'class': 'taskcheckbox' });
    appendElements(liElement, value, taskcheckbox, taskDelBtn);
    return liElement;


    // return appendElements(domElements.getTaskLists, task)

}

function insertTaskIntoDOM(node) {
    console.log(domElements.getTaskLists)
    domElements.getTaskLists.appendChild(node);
}

function createEleme(value, addAtt) {
    const element = document.createElement(value);//
    return addAttributes(element, addAtt);//here have to check addAtt identifier is object 
}

function addAttributes(mainElement, setAtt) {
    const key = Object.keys(setAtt);//
    const value = Object.values(setAtt);//
    for (let i = key.length - 1; i >= 0; i--) {
        mainElement.setAttribute(`${key[i]}`, `${value[i]}`);
    }
    return mainElement;
}

function appendElements(parentNode, ...appChild) {
    for (let i = appChild.length - 1; i >= 0; i--) {
        parentNode.appendChild(appChild[i]);
    }
}

init();

