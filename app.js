import { getlocalData,passValueForLocal } from "./local-storage.js";
// import {taskStatusUpdateHandler} from "./view.js"


export let newTasksObj = {};

export const values = {
    totalTask: 0,
    taskDone: 0,
    taskPending: 0,
    get getTotalTasks() { return this.totalTask; },
    get getTaskCompleted() { return this.taskDone; },
    get getTaskPending() { return this.taskPending; },
    set setTotalTasks(value) { this.totalTask = value; },
    set setTaskCompleted(value) { this.taskDone = value; },
    set setTotalTask(value) { return this.taskPending = value; }
};
const app = document.querySelector('.app');

export const domElements = {
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

export const getObjectIdValue = {
    getNewTask() {
        return domElements.getnewText.value;
    },
    getTaskId() {
        const id = Object.keys(newTasksObj);
        console.log(newTasksObj[id[id.length - 1]]);
        return id[id.length - 1];
    }
};

const getElemetnAttributs={
    getParentId(element){return element.target.parentNode.id},
    // add any property to get it;
}


export function insertTaskIntoDOM(node) {
    domElements.getTaskLists.appendChild(node);
}

export function prepareTask(value, id, status) {
    // const id = Object.keys(newTasksObj)
    const task = document.createTextNode(value);
    const liElement = createEleme('li', { 'class': 'task', 'id': id });
    const taskDelBtn = createEleme('input', { 'type': 'button', 'class': 'taskDeleteBtn', 'value': 'delete', 'id': id / 1000 });
    let taskcheckbox;
    status ? taskcheckbox = createEleme('input', { 'type': 'checkbox', 'class': 'taskcheckbox', 'id': id / 100, 'checked': '' }) : '';
    status ? '' : taskcheckbox = createEleme('input', { 'type': 'checkbox', 'class': 'taskcheckbox', 'id': id / 100 });
    taskcheckbox.addEventListener('click', (e) => { taskStatusUpdateHandler(e) });
    taskDelBtn.addEventListener('click', (e) => { deleteTaskHandler(e) });
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

export function onAddHistoryTaskClick(myTasks) {//change this function name
    const objkeys = Object.keys(myTasks);
    objkeys.forEach(key => {
        const element = prepareTask(myTasks[key].task, key, myTasks[key].status);
        insertTaskIntoDOM(element);
    });
}

export function onLodeLocalTasks(){
    newTasksObj={...getlocalData()};
    const keys=Object.keys(newTasksObj);
    if(keys.length){
keys.forEach(id=>{const element=prepareTask(newTasksObj[id].task,newTasksObj[id].id,newTasksObj[id].status);
    insertTaskIntoDOM(element);})

    }
}

function taskStatusUpdateHandler(e) {
    updateTaskStatus(getElemetnAttributs.getParentId(e));
    updateTheLocal();
}

function updateTaskStatus(taskId){
    const taskStatus=newTasksObj[taskId].status;
    if(taskStatus){
        newTasksObj[taskId].status=false;
    }else{
        newTasksObj[taskId].status=true;
    }
}

function updateTheLocal(){
passValueForLocal(newTasksObj);
}

function deleteTaskHandler(e){
    deleteTaskOnClick(getElemetnAttributs.getParentId(e));
    updateTheLocal()
}

function deleteTaskOnClick(taskId){
    document.getElementById(taskId).remove();
    delete newTasksObj[taskId];
}


