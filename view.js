import { domElements, getObjectIdValue, insertTaskIntoDOM, prepareTask, onAddHistoryTaskClick, updateStatus, updateTheLocal } from "./app.js";
import { passValueForLocal, prepareValuesForLocal, getlocalData } from "./local-storage.js";

let isLocalStorageInvoked = false;
export let newTasksObj = {};

function init() {
    // historyTasksHandler();
    registerEventHandlers();
    // updateTasksCountStatus();
}
// function updateTasksCountStatus() {
//     alert('hi i am here !')
// }

function registerEventHandlers() {
    buttonsEventHandel();
}

function buttonsEventHandel() {

    domElements.getTextBtn.addEventListener('click', addTaskActions);
    domElements.getTaskHistory.addEventListener('click', localStorageHandler);

}
function localStorageHandler() {
    console.log(getlocalData());
    console.log(newTasksObj)

    newTasksObj = { ...getlocalData() };
    console.log(newTasksObj)
    // const newTasksObj = getlocalData();
    if (newTasksObj) {
        if (!isLocalStorageInvoked) {
            isLocalStorageInvoked = true;
            onAddHistoryTaskClick(newTasksObj);
        }
    } else { alert('YOU DON`T HAVE TASKS HISTORY!!'); }
}

// function addTasksToObject(obj){
//     let keys=Object.keys(obj)
//     keys.forEach(id=>{newTasksObj[id]=obj[id]})
// }

function addTaskActions() {
    // prepareTask(manju, 1234353353, true);

    const value = getObjectIdValue.getNewTask();
    if (value) {
        const objectForLocal = prepareValuesForLocal();
        passValueForLocal(objectForLocal);
        onAddTaskClick(value);
    }
}

function onAddTaskClick(task) {
    const id = getObjectIdValue.getTaskId();
    const element = prepareTask(task, id, false);
    insertTaskIntoDOM(element);

}

function taskStatusUpdateHandler(e) {
    updateStatus(elementPropProvider.parentId(e));
    updateTheLocal();
}

init();