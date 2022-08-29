import { getObjectIdValue } from "./app.js"
import { newTasksObj } from "./view.js"

function uniqueValue() { return Date.now() }

export function prepareValuesForLocal() {
    let id = uniqueValue();
    newTasksObj[id] = { 'id': id, 'task': getObjectIdValue.getNewTask(), 'status': false };
    return newTasksObj;
}

export function passValueForLocal(tasks) {
    localStorage.setItem('myTasks', JSON.stringify(tasks));
}
export function getlocalData() {
    const allTasks = JSON.parse(localStorage.getItem('myTasks'));
    return allTasks;
}