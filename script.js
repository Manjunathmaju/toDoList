// (() => {

// import prepareTask from "./app";
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
let dataToLocal = {};
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
    // console.log(Object.keys(allTasks))
    return allTasks;
}

// function setTaskToLocal(tasks) {
//     localStorage.setItem('myTasks', JSON.stringify(tasks));
// }

function uniqueValue() { return Date.now() }

function prepareValuesForLocal() {//change the function name
    const id = uniqueValue()
    dataToLocal[id] = { 'id': id, 'task': getObjectIdValue.getNewTask(), 'status': false };
    return dataToLocal;
}
function passValueForLocal(tasks) {
    localStorage.setItem('myTasks', JSON.stringify(tasks));
}
// console.log(dataToLocal);


function init() {
    registerEventHandlers();
}

function registerEventHandlers() {
    buttonsEventHandler();
}

function localStorageHandler() {
    const obj = getlocalData();
    onAddHistoryTaskClick(obj);
}

function onAddHistoryTaskClick(myTasks) {//change this function name
    const objkeys = Object.keys(myTasks);
    objkeys.forEach(key => {
        const element = prepareTask(myTasks[key].task);
        insertTaskIntoDOM(element);
    });
}

function buttonsEventHandler() {
    domElements.getTextBtn.addEventListener('click', taskActions);
    domElements.getTaskHistory.addEventListener('click', localStorageHandler);
}


const getObjectIdValue = {
    getNewTask() {
        return domElements.getnewText.value;
    },
    getTaskId() {
        console.log(dataToLocal);
    }
};

function taskActions() {
    const value = prepareValuesForLocal();
    passValueForLocal(value);
    const id = Object.keys(value)
    onAddTaskClick(id[-1]);
}

function onAddTaskClick() {
    const value = getObjectIdValue.getNewTask();
    getObjectIdValue.getTaskId;
    if (value) {
        const element = prepareTask(value);
        insertTaskIntoDOM(element);
    }
}

// function getTaskNode(value) {
//     return prepareTask(value);
// }

function insertTaskIntoDOM(node) {
    domElements.getTaskLists.appendChild(node);
}
function prepareTask(value) {
    // const id = Object.keys(dataToLocal)
    const task = document.createTextNode(value);
    const liElement = createEleme('li', { 'class': 'task', });
    const taskDelBtn = createEleme('input', { 'type': 'button', 'class': 'taskDeleteBtn', 'value': 'delete' });
    const taskcheckbox = createEleme('input', { 'type': 'checkbox', 'class': 'taskcheckbox' });
    appendElements(liElement, task, taskcheckbox, taskDelBtn);
    return liElement;
}

function createEleme(value, addAtt) {
    const element = document.createElement(value);//
    return addAttributes(element, addAtt);//here have to check addAtt identifier is object
}

function addAttributes(mainElement, setAtt) {
    const key = Object.keys(setAtt);
    const value = Object.values(setAtt);
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














