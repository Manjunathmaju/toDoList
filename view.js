const values = {
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
let newTasksObj = {};
let localTasksObj = {};
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
    return allTasks;
}