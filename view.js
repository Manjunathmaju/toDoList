import { domElements, getObjectIdValue, insertTaskIntoDOM, prepareTask, onAddHistoryTaskClick, onLodeLocalTasks, newTasksObj } from "./app.js";
import { passValueForLocal, prepareValuesForLocal, getlocalData } from "./local-storage.js";

// let isLocalStorageInvoked = false;



function init() {
    // historyTasksHandler();
    registerEventHandlers();
    // updateTasksCountStatus();
}


 function registerEventHandlers() {
    onLodeLocalTasks();
    buttonsEventHandel();
}

function buttonsEventHandel() {

    domElements.getTextBtn.addEventListener('click', addTaskActions);
    domElements.getTaskHistory.addEventListener('click', updateCounter);

}

function updateCounter(){
const taskIds=Object.keys(newTasksObj)
let completedTasks=0;
taskIds.forEach(key=>{
    if(newTasksObj[key].status){
        completedTasks++
    }
})

domElements.getTotalCount.innerHTML=taskIds.length
domElements.getCompletedCount.innerHTML=completedTasks;
domElements.getPendingCount.innerHTML=taskIds.length - completedTasks;
}



function addTaskActions() {
    const value = getObjectIdValue.getNewTask();
    console.log(newTasksObj)
    if (value) {
        const objectForLocal = prepareValuesForLocal();
        passValueForLocal(objectForLocal);
        console.log(newTasksObj)
        onAddTaskClick(value);
    }
}

function onAddTaskClick(task) {
    const id = getObjectIdValue.getTaskId();
    const element = prepareTask(task, id, false);
    insertTaskIntoDOM(element);

}


init();