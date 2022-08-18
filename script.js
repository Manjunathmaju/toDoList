//dataStorage
//init function
//action function
const values = {
    totalTask: 0,
    taskDone: 0,
    taskPending: 0,
}
document.getElementsByClassName('addBtn').addEventListener('click', init)


function init() {
    let textValue = document.getElementsByClassName('addTask').value;
    if (textValue != '') {
        values.totalTask += 1;
        alert(values.totalTask)
        addTextToList(textValue)
        // counterUpdate()
    }
}

function addTextToList(task) {
    let newElem = newElement('ul', { 'class': 'allTask' })
    let newElem2 = newElement('li', { 'class': 'task', 'id': values.totalTask + 1 })
    let data = document.createTextNode(task);
    let newElem1 = newElement('input', { 'type': 'checkbox', 'id': values.totalTask })
    let delBtn = newElement('input', { 'type': 'button', 'id': values.totalTask + 2 })
    appendElements(newElem2, delBtn, data, newElem1)
    let domElem = getElement('class', 'taskList')
    appendElements(domElem, appendElements(newElem, newElem2))
}

function getElement(prop, value) {
    let val = (prop === 'id') ? document.getElementById(value) :
        (prop === 'class') ? document.getElementsByClassName(value) : alert('enter class name or id name!!');
    return val;
}
function newElement(value, addAtt) {
    let element = document.createElement(value)
    return addAttributes(element, addAtt);//here have to check addAtt identifier is object 
}

function addAttributes(mainElement, setAtt) {
    let key = Object.keys(setAtt)
    let value = Object.values(setAtt)
    for (let i = key.length - 1; i >= 0; i--) {
        mainElement.setAttribute(`${key[i]}`, `${value[i]}`);
    }
    return mainElement;
}


function appendElements(parentNode, ...appChild) {
    console.log('parentnode ' + parentNode)
    console.log('appChild ' + appChild)
    for (let i = appChild.length - 1; i >= 0; i--) {
        if (appChild != undefined) {
            console.log('inside loop ' + appChild[i])
            parentNode.appendChild(appChild[i])
        }
    }
}

function setLocalStorage(key, value) {
    localStorage.setItem(key, value)
}

function getLocalScorage() {
}

//task-1
//add tasks to list
//task-2
//count the checked tasks
//task-3
//push data to local storage
