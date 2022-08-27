(() => {

    // import prepareTask from "./app";
    let isDataTaken = false;
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

    const getObjectIdValue = {
        getNewTask() {
            return domElements.getnewText.value;
        },
        getTaskId() {
            const id = Object.keys(newTasksObj);
            console.log(newTasksObj[id[id.length - 1]]);
            return id[id.length - 1];
        }
    };


    function getlocalData() {
        const allTasks = JSON.parse(localStorage.getItem('myTasks'));
        return allTasks;
    }

    // function setTaskToLocal(tasks) {
    //     localStorage.setItem('myTasks', JSON.stringify(tasks));
    // }

    function uniqueValue() { return Date.now() }

    function prepareValuesForLocal() {
        const id = uniqueValue();
        newTasksObj[id] = { 'id': id, 'task': getObjectIdValue.getNewTask(), 'status': false };
        return newTasksObj;
    }

    function passValueForLocal(tasks) {
        localStorage.setItem('myTasks', JSON.stringify(tasks));
    }
    // console.log(newTasksObj);


    function init() {
        // historyTasksHandler();
        registerEventHandlers();
        updateTasksCountStatus();
    }
    function updateTasksCountStatus() {
        alert('hi i am here !')
    }
    // function historyTasksHandler() {
    //     lodeHistoryTasksToObject();
    //     addHistoryTasksOnLode();
    // }

    // function lodeHistoryTasksToObject() {
    //     if (Object.keys(getlocalData()).length !== 0) {
    //         newTasksObj = getlocalData();
    //     }
    // }

    // function addHistoryTasksOnLode() {
    //     const tasksId = Object.keys(newTasksObj);
    //     console.log(tasksId);
    //     tasksId.forEach(key => {
    //         console.log(newTasksObj[key].task);
    //         console.log(newTasksObj[key].id);
    //         console.log(newTasksObj[key].status);
    //         prepareTask(newTasksObj[key].task, newTasksObj[key].id, newTasksObj[key].status);
    //     })

    // }

    function registerEventHandlers() {
        buttonsEventHandel();
    }

    function buttonsEventHandel() {

        domElements.getTextBtn.addEventListener('click', addTaskActions);
        domElements.getTaskHistory.addEventListener('click', localStorageHandler);

    }
    let isLocalStorageInvoked = false;

    function localStorageHandler() {
        localTasksObj = getlocalData();
        if (localTasksObj) {
            if (!isLocalStorageInvoked) {
                isLocalStorageInvoked = true;
                onAddHistoryTaskClick(localTasksObj);
            }
        } else { alert('YOU DON`T HAVE TASKS HISTORY!!'); }
    }

    function onAddHistoryTaskClick(myTasks) {//change this function name
        const objkeys = Object.keys(myTasks);
        objkeys.forEach(key => {
            const element = prepareTask(myTasks[key].task, key, myTasks[key].status);
            insertTaskIntoDOM(element);
        });
    }


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
    //------------- DELETE TASKS ----------------------------------

    function deleteTaskHandler(element) {
        // getHistoryData();
        deleteTask(elementPropProvider.parentId(element));
        updateTheLocal();
        // updateTotalCount();
    }
    function updateTotalCount() {
        let num = values.getTotalTasks;
        values.setTotalTasks(num + 1);
        console.log(values.getTaskCompleted);
    }


    // function getHistoryData() {
    //     if (isDataTaken) {
    //         newTasksObj = getlocalData();
    //         isDataTaken = false;
    //     }
    // }
    const getTasksId = {
        newTasksKeys() { return Object.keys(newTasksObj) },
        localTasks() { if (localTasksObj) { return Object.keys(localTasksObj) } }

    }
    function updateTheLocal() {
        const concatedObjects = { ...newTasksObj, ...localTasksObj }
        passValueForLocal(concatedObjects);
        // passValueForLocal(localTasksObj);

    }

    function deleteTask(taskId) {
        if (getTasksId.newTasksKeys().includes(taskId)) {
            delete newTasksObj[taskId];
            return ''
        }
        if (getTasksId.localTasks().includes(localTasksObj)) {
            delete localTasksObj[taskId];
        }
        // app.getElementById(taskId).remove();
        document.getElementById(taskId).remove();
    }

    const elementPropProvider = {
        parentId(element) { return element.target.parentNode.id },
        elementId(element) { return element.target.id },
    }

    function taskStatusUpdateHandler(e) {
        updateStatus(elementPropProvider.parentId(e));
        updateTheLocal();
    }
    // const parentId = elementPropProvider.parentId(e);
    function updateStatus(id) {
        if (getTasksId.newTasksKeys().includes(id)) {
            newTasksObj[id].status = true;
        }
        if (getTasksId.localTasks().includes(id)) {
            localTasksObj[id].status = true;
        }
    }




    //---------------------  PREPARE TASK ------------------------

    function insertTaskIntoDOM(node) {
        domElements.getTaskLists.appendChild(node);
    }
    function prepareTask(value, id, status) {
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
    // function isLocalStorageInvoked() {
    //     isDataTaken = true;
    // }
    // window.onload = isLocalStorageInvoked();
    init();

})();