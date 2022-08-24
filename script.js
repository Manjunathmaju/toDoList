(() => {
    const values = {
        totalTask: 0,
        taskDone: 0,
        taskPending: 0
    };
    const allTasksListObject = {};
    const app = document.querySelector('.app');

    const domRender = {
        addBtn: app.querySelector('.addBtn'),
        newTask: app.querySelector('.addTask'),
        getHistoryTasks: app.querySelector('.getHistoryTask'),
        taskLists: app.querySelector('.taskList'),
        totalCount: app.querySelector('.totalCount'),
        completedCount: app.querySelector('.completedCount'),
        pendingCount: app.querySelector('.pendingCount'),
    };

    window.onload = getLocalScorage();
    domRender.addBtn.addEventListener('click', init);
    // domRender.getHistoryTasks.addEventListener('click', getLocalScorage);


    function init() {
        const textValue = domRender.newTask.value;
        if (!textValue) {
            alert('enter the task!');
        } else {
            values.totalTask += 1;
            const randomNo = Date.now();
            allTasksListObject[randomNo] = { id: randomNo, task: textValue, status: false };
            addTextToList(textValue, randomNo);
        }
        localStorage.setItem('localObj', JSON.stringify(allTasksListObject));
    }

    function statusUpdate(elem) {
        const taskId = elem.target.parentNode.id;
        const localStorageDate = JSON.parse(localStorage.getItem('localObj'));
        localStorageDate[taskId].status ? localStorageDate[taskId].status = false : localStorageDate[taskId].status = true;
        localStorage.setItem('localObj', JSON.stringify(localStorageDate));

    }

    function deleteTask(elem) {
        const elementId = elem.target.parentElement.id
        // const parentElementId = app.querySelector(elementId);
        // console.log(parentElementId);
        const localStorageDate = JSON.parse(localStorage.getItem('localObj'));
        const wantToDelete = confirm('do you want to delete')
        if (wantToDelete) {
            delete localStorageDate[elementId];
            document.getElementById(elementId).remove();
        }
        localStorage.setItem('localObj', JSON.stringify(localStorageDate));
    }


    function addTextToList(task, uniqueNo, status) {
        const ulElement = createElementFunction('ul', { 'class': 'allTask', 'id': uniqueNo });
        const liElement = createElementFunction('li', { 'class': 'task', 'id': uniqueNo });
        const data = document.createTextNode(task);

        let checkboxElement;
        if (status === undefined) {
            checkboxElement = createElementFunction('input', { 'type': 'checkbox', 'id': uniqueNo / 1000, 'class': 'taskStatus' });
        } else if (status) {
            checkboxElement = createElementFunction('input', { 'type': 'checkbox', 'id': uniqueNo, 'class': 'taskStatus', 'checked': true });
        } else {
            checkboxElement = createElementFunction('input', { 'type': 'checkbox', 'id': uniqueNo, 'class': 'taskStatus' });
        }

        checkboxElement.addEventListener('click', (e) => { statusUpdate(e) });
        const delBtn = createElementFunction('input', { 'class': 'taskDeletBtn', 'type': 'button', 'value': 'delete', 'id': values.totalTask + 1 });
        delBtn.addEventListener('click', (e) => deleteTask(e));
        appendElements(liElement, data, checkboxElement, delBtn);
        appendElements(ulElement, liElement);
        appendElements(domRender.taskLists, ulElement);
    }


    // function getElement(prop, value) {
    //     const updatedProp = (prop === 'id') ? document.querySelector(`#${value}`) :
    //         (prop === 'class') ? document.querySelector(`.${value}`) : alert('enter class name or id name!!');
    //     return updatedProp;
    // }

    function createElementFunction(value, addAtt) {
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

    function getLocalScorage() {
        const localStorageDate = JSON.parse(localStorage.getItem('localObj'));
        for (const key in localStorageDate) {
            if (localStorageDate.hasOwnProperty.call(localStorageDate, key)) {
                localStorageDate[key].status ? values.taskDone++ : values.taskPending++;
                values.totalTask++;
                addTextToList(localStorageDate[key].task, localStorageDate[key].id, localStorageDate[key].status);
            }
        }
        countTracker();
    }

    function countTracker() {
        domRender.totalCount.innerHTML = values.totalTask;
        domRender.completedCount.innerHTML = values.taskDone;
        domRender.pendingCount.innerHTML = values.taskPending;
    }
})();

//task-1
//add tasks to list
//task-2
//count the checked tasks
//task-3
//push data to local storage

// const Person = function (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//     //never do like this
//     // this.calcAge = function () {
//     //     console.log
//     // }


//     console.log(this)
// }

// const jones = new Person('json', 2001);
// const manju = new Person('json', 2001);
// const jar = 'jar'
// console.log(manju instanceof Person)//true
// console.log(jar instanceof Person)//false
// console.log(jones)


 //new {} is created
//  functio is called this={}
// {} linked to prototype
// function automatically return {}