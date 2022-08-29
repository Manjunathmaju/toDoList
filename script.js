(() => {

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
    const newTasksObject = {};
    let historyTasksObject={}
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
    
    
    function init() {
        registerEventHandlers();
    }
    
    function registerEventHandlers() {
        buttonsEventHandler();
    }
    
    function buttonsEventHandler() {
        domElements.getTextBtn.addEventListener('click', taskActions);
        domElements.getTaskHistory.addEventListener('click', handlesGetLocalStorage);
    }
    function handlesGetLocalStorage() {
        historyTasksObject = getlocalData();
        onAddHistoryTaskClick(historyTasksObject);
    }
    
    function onAddHistoryTaskClick(myTasks) {//change this function name
        const objkeys = Object.keys(myTasks);
        objkeys.forEach(key => {
            const element = prepareTask(myTasks[key].task,myTasks[key].id,myTasks[key].status);
            insertTaskIntoDOM(element);
        });
    }
    
    
    
    const getObjectIdValue = {
        getNewTask() {
            return domElements.getnewText.value;
        },
        getTaskId() {
            console.log(newTasksObject);
            const tasksId=Object.keys(newTasksObject)
            return tasksId[tasksId.length-1];
    
        }
    };
    
    function taskActions() {
        const value = prepareValuesForLocal();
        passValueForLocal(value);
        const id = Object.keys(value)
        onAddTaskClick();
    }
    
    function onAddTaskClick() {
        const value = getObjectIdValue.getNewTask();
        getObjectIdValue.getTaskId;
        if (value) {
            const element = prepareTask(value,getObjectIdValue.getTaskId(),false);
            insertTaskIntoDOM(element);
        }
    }
    
    function insertTaskIntoDOM(node) {
        domElements.getTaskLists.appendChild(node);
    }
    function prepareTask(value,id,status) {
        // const id = Object.keys(newTasksObject)
        const task = document.createTextNode(value);
        const liElement = createEleme('li', { 'class': 'task','id':id });
        const taskDelBtn = createEleme('input', { 'type': 'button', 'class': 'taskDeleteBtn', 'value': 'delete'});
        let taskcheckbox;
        status?'':taskcheckbox= createEleme('input', { 'type': 'checkbox', 'class': 'taskcheckbox' });
        status?taskcheckbox= createEleme('input', { 'type': 'checkbox', 'class': 'taskcheckbox', 'checked':status }):'';
        taskcheckbox.addEventListener('click',(e)=>{handlesTaskStatusActions(e)})
        taskcheckbox.addEventListener('click',(e)=>{handlesTaskDeleteActions(e)})
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
    const getElemetnAttributs={
        getParentId(element){return element.target.parentNode.id},
        // add any property to get it;
    }
    function handlesTaskStatusActions(element){
        // const tasksObj= getTasksToUpdate()
        updateTaskStatus(element);
        updateLocalStorageData();

    }

    function getTasksToUpdate(){
        return newTasksObject;
    }
    function updateTaskStatus(element){
        let taskKeys=Object.keys(newTasksObject);
        if(taskKeys.includes(getElemetnAttributs.getParentId(element))){
            console.log(newTasksObject[taskKeys].status)
            if(newTasksObject[taskKeys].status){
                newTasksObject[taskKeys].status=false;
            }else{
                newTasksObject[taskKeys].status=true;
            }
        }
    }

    function updateLocalStorageData(){
        passValueForLocal(newTasksObject);
    }

    function handlesTaskDeleteActions(element){
        deleteTask(element);
        updateLocalStorageData();
    }
    function deleteTask(element){
        let taskKeys=Object.keys(newTasksObject);
        if(taskKeys.includes(getElemetnAttributs.getParentId(element))){
            delete  newTasksObject[taskKeys];
        }
    }
    
    
    function getlocalData() {
        const allTasks = JSON.parse(localStorage.getItem('myTasks'));
        // console.log(Object.keys(allTasks))
        return allTasks;
    }
    
    function uniqueValue() { return Date.now() }
    
    function prepareValuesForLocal() {//change the function name
        const id = uniqueValue()
        newTasksObject[id] = { 'id': id, 'task': getObjectIdValue.getNewTask(), 'status': false };
        return newTasksObject;
    }
    function passValueForLocal(tasks) {
        localStorage.setItem('myTasks', JSON.stringify(tasks));
    }
    
    
    init();
    })();