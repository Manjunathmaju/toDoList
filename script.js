//dataStorage
//init function
//action function
const values = {
    totalTask: 0,
    taskDone: 0,
    taskPending: 0,
    elem: document.getElementById('masterDiv')
}
document.getElementById('addBtn').addEventListener('click', init)


function init() {
    let textValue = document.getElementById('addTask').value;
    if (textValue != '') {
        addTextToList(textValue)
        counterUpdate()
    }
}

function addTextToList(task) {
    getElement()
    newElement()
    addAttributes()
    appendElements()
}

function setLocalStorage(key, value) {
    localStorage.setItem(key, value)
}

function getLocalScorage() {

}

function getElement(value) {
    values.elem.

}

function newElement(value) {

}

function addAttributes(mainElement, setAtt) {
    let key = Object.keys(setAtt)
    let value = Object.values(setAtt)
    for (let i = key.length - 1; i >= 0; i--) {
        mainElement.setAttribute(`${key[i]}`, `${value[i]}`);
    }
}


function appendElements(parentNode, appChild) {
    for (let i = appChild.length - 1; i >= 0; i--) {
        parentNode.appendChild(appChild[i])
    }
}



