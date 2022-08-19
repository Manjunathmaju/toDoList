//dataStorage
//init function
//action function
(() => {
    const values = {
        totalTask: 0,
        taskDone: 0,
        taskPending: 0,
    }
    document.querySelector('.addBtn').addEventListener('click', init)
    // let idval = e.target.id
    // console.log(idval)


    function addDeleteBtn() {
        console.log('your are inside addDeleteBtn function')
    }

    function init() {
        const textValue = document.querySelector('.addTask').value;
        if (textValue !== '') {
            values.totalTask += 1;
            alert(values.totalTask)
            addTextToList(textValue)
            // counterUpdate()
        }
    }

    function addTextToList(task) {
        let newElem = newElement('ul', { 'class': 'allTask' })
        let newElem2 = newElement('li', { 'class': 'task', 'id': values.totalTask + 1 })
        const data = document.createTextNode(task);
        const newElem1 = newElement('input', { 'type': 'checkbox', 'class': 'taskStatus', 'id': values.totalTask })
        const delBtn = newElement('input', { 'type': 'button', 'value': 'delete', 'id': values.totalTask + 2 })
        appendElements(newElem2, data, newElem1, delBtn)
        const domElem = getElement('class', '.taskList')
        appendElements(newElem, newElem2)
        appendElements(domElem, newElem)
    }

    function getElement(prop, value) {
        const val = (prop === 'id') ? document.querySelector(value) :
            (prop === 'class') ? document.querySelector(value) : alert('enter class name or id name!!');
        return val;
    }
    function newElement(value, addAtt) {
        const element = document.createElement(value)
        return addAttributes(element, addAtt);//here have to check addAtt identifier is object 
    }

    function addAttributes(mainElement, setAtt) {
        const key = Object.keys(setAtt)
        const value = Object.values(setAtt)
        for (let i = key.length - 1; i >= 0; i--) {
            mainElement.setAttribute(`${key[i]}`, `${value[i]}`);
        }
        return mainElement;
    }

    function appendElements(parentNode, ...appChild) {
        for (let i = appChild.length - 1; i >= 0; i--) {
            parentNode.appendChild(appChild[i])
        }
    }
    document.querySelectorAll('.taskStatus').addEventListener('click', addDeleteBtn)

    function setLocalStorage(key, value) {
        localStorage.setItem(key, value)
    }

    function getLocalScorage() {

    }
})();

//task-1
//add tasks to list
//task-2
//count the checked tasks
//task-3
//push data to local storage
