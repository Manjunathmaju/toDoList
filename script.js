(() => {
    const values = {
        totalTask: 0,
        taskDone: 0,
        taskPending: 0
    };

    let store = {};
    document.querySelector('.addBtn').addEventListener('click', init);
    document.querySelector('.getHistoryTask').addEventListener('click', getLocalScorage);

    function addDeleteBtn(elem) {
        alert('you clicked the check box');
    };

    function init() {
        const textValue = document.querySelector('.addTask').value;
        console.log(Object.values(localStorage).size);
        if (textValue !== '') {
            values.totalTask += 1;
            store[Date.now()] = { id: Date.now(), task: textValue, status: false };
            setLocalStorage('localObj', JSON.stringify(store));
            addTextToList(textValue);
        }
    }

    function addTextToList(task) {
        const ulElement = newElement('ul', { 'class': 'allTask' });
        const liElement = newElement('li', { 'class': 'task', 'id': values.totalTask });
        const data = document.createTextNode(task);
        const checkboxElement = newElement('input', { 'type': 'checkbox', 'class': 'taskStatus' });
        checkboxElement.addEventListener('click', (e) => { addDeleteBtn(e) });
        const delBtn = newElement('input', { 'class': 'taskDeletBtn', 'type': 'button', 'value': 'delete', 'id': values.totalTask + 1 });
        appendElements(liElement, data, checkboxElement, delBtn);
        const domElement = getElement('class', '.taskList');
        appendElements(ulElement, liElement);
        appendElements(domElement, ulElement);
    }

    function getElement(prop, value) {
        const val = (prop === 'id') ? document.querySelector(value) :
            (prop === 'class') ? document.querySelector(value) : alert('enter class name or id name!!');
        return val;
    }
    function newElement(value, addAtt) {
        const element = document.createElement(value);
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

    function setLocalStorage(key, value) {
        localStorage.setItem(key, value);
    }

    function getLocalScorage() {
        const localStorageDate = JSON.parse(localStorage.getItem('localObj'));
        for (const key in localStorageDate) {
            if (localStorageDate.hasOwnProperty.call(localStorageDate, key)) {
                const storedText = localStorageDate[key].task;
                addTextToList(storedText);
            }
        }
    }
})();

//task-1
//add tasks to list
//task-2
//count the checked tasks
//task-3
//push data to local storage
